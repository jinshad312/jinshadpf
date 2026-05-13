# Toothsuite Premium Website

A complete premium luxury single-page website for Toothsuite Dental Clinic, Kerala, designed with Apple-level smoothness, modern startup-quality UI, and a premium dental lounge feeling.

## Architecture & Tech Stack

*   **Framework:** Next.js (App Router), React, TypeScript
*   **Styling:** Tailwind CSS, shadcn/ui, Radix UI
*   **Animations:** Framer Motion, Lenis (Smooth Scrolling)
*   **Deployment:** Vercel Optimized (Static Export / Serverless)

## Directory Structure
```
src/
├── app/          # Next.js App Router (Layout, Pages, Global CSS)
├── components/
│   ├── animations/ # Lenis SmoothScroll wrapper
│   ├── layout/     # Navbar, Footer
│   ├── sections/   # Page sections (Hero, About, Services, etc.)
│   └── ui/         # Reusable shadcn/ui components (Buttons, etc.)
├── constants/    # Global clinic info, services data
└── lib/          # Utilities (Tailwind merge)
```

## Getting Started

First, install the dependencies:
`npm install`

Run the development server:
`npm run dev`

Open http://localhost:3000 with your browser to see the result.

## Build for Production

`npm run build`
