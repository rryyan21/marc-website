# UI Components

This folder contains reusable UI components following the shadcn/ui structure.

## Dot Shader Background

The `dot-shader-background.tsx` component provides an animated dot grid background using Three.js and React Three Fiber.

### Usage

```tsx
import { DotScreenShader } from "@/components/ui/dot-shader-background"

export default function MyPage() {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-0">
        <DotScreenShader />
      </div>
      {/* Your content here */}
    </div>
  )
}
```

### Features

- Animated dot grid that responds to mouse movement
- Theme-aware (uses next-themes)
- Customized with UMich colors (Blue background, Maize dots)
- High-performance WebGL rendering

### Dependencies

- `three` - 3D library
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers for React Three Fiber
- `next-themes` - Theme management

### Customization

The component automatically uses UMich colors:
- Background: UMich Blue (#00274C)
- Dots: UMich Maize (#FFCB05)

To customize colors, modify the `getThemeColors()` function in the component.

