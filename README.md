# WhatToDraw.art

A Next.js + Tailwind CSS website for generating drawing ideas and inspiration. Built for artists of all levels.

## Features

### Core Tools
- **Random Prompt Generator** (`/tools/random`) - Get instant random drawing ideas
- **Mood-Based Generator** (`/tools/generator`) - Personalized ideas based on mood and time
- **Drawing Wheel** (`/tools/wheel`) - Spin the wheel for random categories

### Drawing Challenges
- **7-Day Drawing Challenge** (`/challenges/7-day`) - Build a daily habit
- **30-Day Drawing Challenge** (`/challenges/30-day`) - Comprehensive creative journey

### SEO Content Pages
- Dynamic drawing ideas pages (`/ideas/[slug]`) with multiple categories:
  - What to draw when bored
  - Easy drawing ideas
  - Cute drawing ideas
  - Simple drawing ideas
  - Aesthetic drawing ideas
  - And more...

## Project Structure

```
whattodraw260125/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles with artistic theme
│   ├── tools/
│   │   ├── generator/       # Mood-based generator
│   │   ├── wheel/           # Spinning wheel
│   │   └── random/          # Random prompts
│   ├── ideas/
│   │   ├── page.tsx         # Ideas listing
│   │   └── [slug]/          # Dynamic idea pages (SSG)
│   ├── challenges/
│   │   ├── 7-day/           # 7-day challenge
│   │   ├── 30-day/          # 30-day challenge
│   │   └── page.tsx         # Challenges listing
│   └── api/
│       └── generate/        # Prompt generation API
├── components/
│   ├── Header.tsx           # Navigation header
│   └── Footer.tsx           # Footer with links
├── content/
│   └── ideas/               # SEO content data
│       ├── index.ts         # Types
│       ├── utils.ts         # Utility functions
│       ├── what-to-draw-when-bored.ts
│       ├── easy-drawing-ideas.ts
│       ├── cute-drawing-ideas.ts
│       ├── simple-drawing-ideas.ts
│       └── ...
└── public/                  # Static assets
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Adding New Ideas

To add new drawing ideas:

1. Create a new file in `content/ideas/`:
```typescript
// content/ideas/my-new-idea.ts
import { DrawingIdea } from './index';

export const idea: DrawingIdea = {
  slug: "my-new-idea",
  title: "My New Idea",
  description: "Description for SEO",
  sections: [
    {
      heading: "Section Title",
      items: [
        "Item 1",
        "Item 2",
        // More items...
      ],
      imagePlaceholder: "[Image placeholder: description]"
    }
    // More sections...
  ]
};
```

2. Import and add to `content/ideas/utils.ts`:
```typescript
import { idea as myNewIdea } from './my-new-idea';

export const allIdeas: DrawingIdea[] = [
  // ...existing ideas
  myNewIdea,
];
```

3. The page will be automatically generated at `/ideas/my-new-idea`

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  art: {
    50: '#fdf8f6',
    100: '#f5ebe6',
    // ... more shades
  },
}
```

### Typography
The project uses system fonts by default. To use custom fonts, modify `app/layout.tsx`.

## API Endpoints

### GET /api/generate
Generate random drawing prompts with optional filters.

Query Parameters:
- `category` - Filter by category (animal, food, fantasy, etc.)
- `difficulty` - Filter by difficulty (easy, medium, hard)
- `count` - Number of prompts to return (default: 1)

Example:
```bash
curl "http://localhost:3000/api/generate?category=animal&count=3"
```

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Other Platforms
Build and deploy the `.next` folder to your hosting platform.

## License

© 2026 WhatToDraw.art – Free drawing ideas for everyone.
