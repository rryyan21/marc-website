'use client'

import { useMemo, useEffect, Suspense } from 'react'
import { Canvas, ThreeEvent, useFrame, useThree } from '@react-three/fiber'
import { shaderMaterial, useTrailTexture } from '@react-three/drei'
import { useTheme } from 'next-themes'
import * as THREE from 'three'

const DotMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector2(),
    dotColor: new THREE.Color('#FFFFFF'),
    bgColor: new THREE.Color('#121212'),
    mouseTrail: null,
    render: 0,
    rotation: 0,
    gridSize: 50,
    dotOpacity: 0.05
  },
  /* glsl */ `
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  /* glsl */ `
    uniform float time;
    uniform int render;
    uniform vec2 resolution;
    uniform vec3 dotColor;
    uniform vec3 bgColor;
    uniform sampler2D mouseTrail;
    uniform float rotation;
    uniform float gridSize;
    uniform float dotOpacity;

    vec2 rotate(vec2 uv, float angle) {
        float s = sin(angle);
        float c = cos(angle);
        mat2 rotationMatrix = mat2(c, -s, s, c);
        return rotationMatrix * (uv - 0.5) + 0.5;
    }

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 rotatedUv = rotate(uv, rotation);

      // Create a grid
      vec2 gridUv = fract(rotatedUv * gridSize);
      vec2 gridUvCenterInScreenCoords = rotate((floor(rotatedUv * gridSize) + 0.5) / gridSize, -rotation);

      // Calculate distance from the center of each cell
      float baseDot = sdfCircle(gridUv, 0.25);

      // Screen mask
      float screenMask = smoothstep(0.0, 1.0, 1.0 - uv.y); // 0 at the top, 1 at the bottom
      vec2 centerDisplace = vec2(0.7, 1.1);
      float circleMaskCenter = length(uv - centerDisplace);
      float circleMaskFromCenter = smoothstep(0.5, 1.0, circleMaskCenter);
      
      float combinedMask = screenMask * circleMaskFromCenter;
      float circleAnimatedMask = sin(time * 2.0 + circleMaskCenter * 10.0);

      // Mouse trail effect - sample multiple times for better coverage
      float mouseInfluence = texture2D(mouseTrail, gridUvCenterInScreenCoords).r;
      float mouseInfluence2 = texture2D(mouseTrail, gridUvCenterInScreenCoords + vec2(0.001, 0.001)).r;
      float mouseInfluence3 = texture2D(mouseTrail, gridUvCenterInScreenCoords + vec2(-0.001, -0.001)).r;
      float mouseInfluenceCombined = max(max(mouseInfluence, mouseInfluence2), mouseInfluence3);
      
      float scaleInfluence = max(mouseInfluenceCombined * 0.6, circleAnimatedMask * 0.3);

      // Create dots with animated scale, influenced by mouse
      float dotSize = min(pow(circleMaskCenter, 2.0) * 0.3, 0.3);

      float sdfDot = sdfCircle(gridUv, dotSize * (1.0 + scaleInfluence * 0.5));

      float smoothDot = smoothstep(0.05, 0.0, sdfDot);

      float opacityInfluence = max(mouseInfluenceCombined * 50.0, circleAnimatedMask * 0.5);

      // Mix background color with dot color, using animated opacity to increase visibility
      vec3 composition = mix(bgColor, dotColor, smoothDot * combinedMask * dotOpacity * (1.0 + opacityInfluence));

      gl_FragColor = vec4(composition, 1.0);

      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `
)

function Scene() {
  const size = useThree((s) => s.size)
  const viewport = useThree((s) => s.viewport)
  const { theme } = useTheme()
  
  const rotation = 0
  const gridSize = 100

  const getThemeColors = () => {
    // Using UMich colors - blue background with maize dots
    switch (theme) {
      case 'dark':
        return {
          dotColor: '#FFCB05', // UMich Maize
          bgColor: '#00274C', // UMich Blue
          dotOpacity: 0.03
        }
      case 'light':
        return {
          dotColor: '#00274C', // UMich Blue
          bgColor: '#F4F5F5',
          dotOpacity: 0.15
        }
      default:
        return {
          dotColor: '#FFCB05', // UMich Maize
          bgColor: '#00274C', // UMich Blue
          dotOpacity: 0.03
        }
    }
  }

  const themeColors = getThemeColors()

  // Enhanced mouse trail configuration for better slow movement tracking
  const [trail, onMove] = useTrailTexture({
    size: 1024,
    radius: 0.2,
    maxAge: 800,
    interpolate: 3,
    ease: function easeInOutCirc(x: number) {
      return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2
    }
  })

  const dotMaterial = useMemo(() => {
    return new DotMaterial()
  }, [])

  useEffect(() => {
    if (dotMaterial) {
      dotMaterial.uniforms.dotColor.value.setHex(parseInt(themeColors.dotColor.replace('#', ''), 16))
      dotMaterial.uniforms.bgColor.value.setHex(parseInt(themeColors.bgColor.replace('#', ''), 16))
      dotMaterial.uniforms.dotOpacity.value = themeColors.dotOpacity
    }
  }, [theme, dotMaterial, themeColors])

  useFrame((state) => {
    if (dotMaterial) {
      dotMaterial.uniforms.time.value = state.clock.elapsedTime
      dotMaterial.uniforms.resolution.value.set(size.width * viewport.dpr, size.height * viewport.dpr)
      if (trail) {
        dotMaterial.uniforms.mouseTrail.value = trail
      }
    }
  })

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    // Always update on move, even for slow movements
    onMove(e)
  }

  const handlePointerEnter = (e: ThreeEvent<PointerEvent>) => {
    onMove(e)
  }

  const handlePointerLeave = (e: ThreeEvent<PointerEvent>) => {
    // Keep tracking even when leaving to ensure smooth transitions
    onMove(e)
  }

  // Scale to cover entire viewport with some margin to ensure edge coverage
  const scale = Math.max(viewport.width, viewport.height) / 2 * 1.2

  return (
    <mesh 
      scale={[scale, scale, 1]} 
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      position={[0, 0, 0]}
    >
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        attach="material"
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        rotation={rotation}
        gridSize={gridSize}
        mouseTrail={trail}
        render={0}
      />
    </mesh>
  )
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 bg-umich-blue" />
  )
}

export const DotScreenShader = () => {
  return (
    <div className="fixed inset-0 z-0 bg-umich-blue" style={{ width: '100vw', height: '100vh', pointerEvents: 'auto' }}>
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          gl={{
            antialias: true,
            powerPreference: 'high-performance',
            outputColorSpace: THREE.SRGBColorSpace,
            toneMapping: THREE.NoToneMapping
          }}
          dpr={[1, 2]}
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
}
