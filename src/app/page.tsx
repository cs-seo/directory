import Link from "next/link";
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
            Caregivers.com.au
          </h1>
          <p className="text-lg text-gray-600">
            Professional aged care and disability support services across Australia
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Aged Care Services</CardTitle>
              <CardDescription>
                Professional caregivers for seniors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Compassionate aged care support including personal care, household assistance, and companionship services.
              </p>
              <Button asChild className="w-full">
                <Link href="/caregivers">Find Caregivers</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disability Support</CardTitle>
              <CardDescription>Specialized disability care</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Comprehensive disability support including life skills training and community access services.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/caregivers">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Location-Based Care</CardTitle>
              <CardDescription>Find caregivers near you</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Connect with qualified caregivers in your city - Sydney, Melbourne, Brisbane, Perth, and Adelaide.
              </p>
              <Button asChild className="w-full">
                <Link href="/caregivers">View Locations</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Professional Standards</CardTitle>
              <CardDescription>Quality-assured care</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                All caregivers are professionally trained, background-checked, and committed to providing the highest quality care standards.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Flexible Services</CardTitle>
              <CardDescription>Tailored to your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                From part-time support to 24/7 care, we offer flexible scheduling options to accommodate your lifestyle and requirements.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SEO Optimized</CardTitle>
              <CardDescription>Search engine friendly</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Complete SEO setup with metadata, Open Graph, and comprehensive location-based content for search optimization.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/caregivers">Find Caregivers</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}