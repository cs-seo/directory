# Next.js 14 Modern Stack

A production-ready Next.js 14 application with TypeScript, Tailwind CSS, NextAuth, and PostgreSQL support.

## Features

- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **ESLint & Prettier** for code quality
- ✅ **Jest & React Testing Library** for testing
- ✅ **NextAuth.js v5** configuration ready
- ✅ **PostgreSQL** environment setup
- ✅ **SEO optimized** with metadata and Open Graph
- ✅ **Docker ready** with Docker Compose
- ✅ **UI Primitives** - reusable component library

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- PostgreSQL (optional, can use Docker)

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Set up environment variables:

```bash
cp .env.example .env
```

Edit `.env` with your configuration values.

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests in watch mode
- `npm run test:ci` - Run tests in CI mode

## Docker Setup

### Using Docker Compose

Run the entire stack (app + PostgreSQL):

```bash
docker-compose up -d
```

This will start:

- PostgreSQL database on port 5432
- Next.js app on port 3000

### Build Docker Image Only

```bash
docker build -t nextjs-app .
```

## Project Structure

```
.
├── src/
│   ├── app/                  # App Router pages
│   │   ├── layout.tsx        # Root layout with SEO
│   │   ├── page.tsx          # Home page
│   │   ├── sitemap.ts        # Dynamic sitemap
│   │   └── robots.ts         # Robots.txt configuration
│   ├── components/
│   │   └── ui/               # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── index.ts
│   └── __tests__/            # Test files
├── public/                   # Static assets
├── .env.example              # Environment variables template
├── docker-compose.yml        # Docker Compose configuration
├── Dockerfile                # Docker configuration
└── tailwind.config.ts        # Tailwind CSS configuration
```

## Environment Variables

See `.env.example` for all available environment variables including:

- App configuration
- PostgreSQL connection
- NextAuth providers (Google, GitHub)
- Email service configuration

## SEO Configuration

The project includes SEO-ready configurations:

- **Metadata API** - Configured in `src/app/layout.tsx`
- **Open Graph** - Social media sharing optimization
- **Sitemap** - Auto-generated at `/sitemap.xml`
- **Robots.txt** - SEO crawler configuration at `/robots.txt`

## UI Components

The project includes a set of reusable UI primitives:

- `Button` - Multiple variants and sizes
- `Card` - Card components with header, content, and footer
- `Input` - Styled form input

Import components from `@/components/ui`:

```tsx
import { Button, Card, Input } from "@/components/ui";
```

## Database Setup

The project is configured for PostgreSQL. Update the `DATABASE_URL` in your `.env` file:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

## Authentication

NextAuth.js v5 (beta) is configured. To enable authentication:

1. Set up OAuth providers in your `.env`
2. Configure providers in your auth configuration
3. Add authentication logic to your app

## Testing

Tests are configured with Jest and React Testing Library:

```bash
npm run test
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [NextAuth.js](https://next-auth.js.org/)
- [TypeScript](https://www.typescriptlang.org/docs)

## License

MIT
