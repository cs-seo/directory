# Development Guide

## Quick Start

### Prerequisites

Ensure you have the following installed:
- Node.js 20+
- npm (comes with Node.js)
- Docker and Docker Compose (optional, for containerized development)

### Initial Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment:
```bash
cp .env.example .env
```
Edit `.env` and add your configuration values.

3. Start development server:
```bash
npm run dev
```

Visit http://localhost:3000 to see your application.

## Development Workflow

### Running the Application

- **Development mode**: `npm run dev` (with hot reload)
- **Production build**: `npm run build && npm start`
- **Docker**: `docker-compose up -d`

### Code Quality

Before committing, ensure your code passes all checks:

```bash
npm run lint          # Check for linting errors
npm run format:check  # Check code formatting
npm run format        # Auto-format code
npm run test:ci       # Run tests
```

### Project Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check if files are properly formatted |
| `npm run test` | Run tests in watch mode |
| `npm run test:ci` | Run tests once (for CI/CD) |

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt generation
├── components/
│   └── ui/                # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── index.ts       # Barrel export
│       └── __tests__/     # Component tests
├── lib/                   # Utility functions
│   ├── db.ts             # Database connection
│   └── env.ts            # Environment validation
└── __tests__/            # Application tests
```

## Adding New Features

### Creating a New Page

1. Create a new folder in `src/app/your-route`
2. Add a `page.tsx` file:
```tsx
export default function YourPage() {
  return <div>Your content</div>;
}
```

3. (Optional) Add metadata:
```tsx
export const metadata = {
  title: "Your Page Title",
  description: "Your page description",
};
```

### Creating a New Component

1. Create component file in `src/components/ui/your-component.tsx`
2. Follow the existing pattern:
```tsx
import React from "react";

export type YourComponentProps = {
  // your props
};

export const YourComponent = React.forwardRef<HTMLElement, YourComponentProps>(
  (props, ref) => {
    return <div ref={ref} {...props} />;
  }
);

YourComponent.displayName = "YourComponent";
```

3. Export from `src/components/ui/index.ts`
4. Add tests in `src/components/ui/__tests__/your-component.test.tsx`

### Adding Database Queries

Use the database utility:

```tsx
import { query } from "@/lib/db";

const result = await query("SELECT * FROM users WHERE id = $1", [userId]);
```

## Testing

### Running Tests

```bash
npm run test        # Watch mode for development
npm run test:ci     # Single run for CI
```

### Writing Tests

Tests use Jest and React Testing Library. Example:

```tsx
import { render, screen } from "@testing-library/react";
import { YourComponent } from "../your-component";

describe("YourComponent", () => {
  it("renders correctly", () => {
    render(<YourComponent />);
    expect(screen.getByText("Expected text")).toBeInTheDocument();
  });
});
```

## Docker Development

### Start with Docker Compose

```bash
docker-compose up -d
```

This starts:
- PostgreSQL on port 5432
- Next.js app on port 3000

### View logs

```bash
docker-compose logs -f app
```

### Stop containers

```bash
docker-compose down
```

### Rebuild after changes

```bash
docker-compose up -d --build
```

## Environment Variables

Required environment variables are documented in `.env.example`. Key variables:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` - Application URL for NextAuth
- `NEXTAUTH_SECRET` - Secret key for NextAuth (generate with `openssl rand -base64 32`)

## Code Style Guidelines

### TypeScript

- Use explicit types, avoid `any` (use `unknown` if needed)
- Use `type` for prop definitions
- Export both component and props type

### React Components

- Use functional components with hooks
- Use `React.forwardRef` for components that accept refs
- Set `displayName` for better debugging

### Styling

- Use Tailwind CSS utility classes
- Keep component-specific styles in the component
- Use responsive design patterns (`sm:`, `md:`, `lg:`)

### Imports

- Use path aliases: `@/` maps to `src/`
- Group imports: React, libraries, components, utils

## Troubleshooting

### Build Errors

If you encounter build errors:
1. Delete `.next` folder: `rm -rf .next`
2. Clear node_modules: `rm -rf node_modules && npm install`
3. Check TypeScript errors: `npx tsc --noEmit`

### Database Connection Issues

1. Verify PostgreSQL is running
2. Check `DATABASE_URL` in `.env`
3. Test connection: `psql $DATABASE_URL`

### Docker Issues

1. Check containers: `docker-compose ps`
2. View logs: `docker-compose logs`
3. Restart: `docker-compose restart`
4. Clean rebuild: `docker-compose down -v && docker-compose up -d --build`

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
