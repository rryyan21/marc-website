# MARC Website

The official website for the Michigan Advanced Robotics Competition (MARC) team.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
marc-website/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── robots/            # Robots gallery page
│   ├── competition/       # Competition page
│   ├── team/              # Team page
│   ├── sponsors/          # Sponsors page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section component
│   ├── SectionWrapper.tsx # Section wrapper
│   ├── RobotCard.tsx      # Robot card component
│   ├── TeamMemberCard.tsx # Team member card
│   ├── SponsorTier.tsx    # Sponsor tier display
│   ├── ContactForm.tsx    # Contact form
│   └── animations/        # Animation components
│       ├── FadeIn.tsx
│       ├── SlideUp.tsx
│       └── Stagger.tsx
└── public/                # Static assets
```

## 🎨 Design System

The website follows a Dolby.com-inspired design:
- **Colors**: Black backgrounds, white typography, minimal color accents
- **Typography**: Bold, large headings with clean sans-serif fonts
- **Animations**: Smooth fade-in and slide-up animations using Framer Motion
- **Layout**: Premium, futuristic feel with subtle rounded corners

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## 📝 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Modal dialogs for robot details
- ✅ Team member filtering
- ✅ Contact form with validation
- ✅ Sponsor tier display
- ✅ Competition timeline
- ✅ Image optimization with Next.js Image

## 🚢 Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is for the MARC team at the University of Michigan.

