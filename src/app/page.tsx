import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Welcome to Next.js 14
          </h1>
          <p className="text-lg text-gray-600">
            A modern stack with TypeScript, Tailwind CSS, and more
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>TypeScript</CardTitle>
              <CardDescription>
                Fully typed for better developer experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                End-to-end type safety with TypeScript configured out of the
                box.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tailwind CSS</CardTitle>
              <CardDescription>Utility-first CSS framework</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Build modern UIs rapidly with Tailwind&apos;s utility classes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>UI Primitives</CardTitle>
              <CardDescription>Reusable component library</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Pre-built UI components ready to use in your application.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>NextAuth</CardTitle>
              <CardDescription>Authentication made easy</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Configured with NextAuth.js v5 for OAuth and email providers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>PostgreSQL</CardTitle>
              <CardDescription>Production-ready database</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Environment configured for PostgreSQL with connection pooling.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SEO Ready</CardTitle>
              <CardDescription>Optimized for search engines</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Complete SEO setup with metadata, Open Graph, and sitemaps.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-4">
          <Button variant="primary">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </main>
  );
}
