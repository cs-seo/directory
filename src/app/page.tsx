import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const serviceCategories = [
  {
    id: 'aged-care',
    name: 'Aged Care',
    description: 'Professional aged care services for seniors requiring assistance with daily activities, medical care, and companionship.',
    href: '/aged-care',
    color: 'from-teal-500 to-teal-700',
    icon: '👵',
    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth']
  },
  {
    id: 'disability-support',
    name: 'Disability Support',
    description: 'Comprehensive disability support services including personal care, community access, and life skills development.',
    href: '/disability-support',
    color: 'from-purple-500 to-purple-700',
    icon: '♿',
    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Adelaide']
  },
  {
    id: 'mental-health-support',
    name: 'Mental Health Support',
    description: 'Professional mental health support services including counseling, crisis intervention, and emotional support.',
    href: '/mental-health-support',
    color: 'from-indigo-500 to-indigo-700',
    icon: '🧠',
    cities: ['Sydney', 'Melbourne', 'Perth', 'Canberra']
  }
];

const popularLocations = [
  { name: 'Sydney, NSW', href: '/aged-care/sydney-nsw' },
  { name: 'Melbourne, VIC', href: '/aged-care/melbourne-vic' },
  { name: 'Brisbane, QLD', href: '/disability-support/brisbane-qld' },
  { name: 'Perth, WA', href: '/mental-health-support/perth-wa' },
  { name: 'Adelaide, SA', href: '/aged-care/adelaide-sa' },
  { name: 'Canberra, ACT', href: '/disability-support/canberra-act' },
  { name: 'Darwin, NT', href: '/mental-health-support/darwin-nt' },
  { name: 'Hobart, TAS', href: '/aged-care/hobart-tas' }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Professional Care Services Near You
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Connect with qualified, experienced care professionals across Australia. 
            From aged care to disability support and mental health services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/aged-care">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                Find Aged Care
              </Button>
            </Link>
            <Link href="/disability-support">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                Disability Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Care Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional care services tailored to your needs across Australia
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {serviceCategories.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Available in:</h4>
                      <p className="text-sm text-gray-600">{service.cities.join(', ')}</p>
                    </div>
                    <Link href={service.href}>
                      <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90`}>
                        Explore {service.name}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Care Near You
            </h2>
            <p className="text-xl text-gray-600">
              Professional care services in major Australian cities and towns
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {popularLocations.map((location) => (
              <Link key={location.name} href={location.href}>
                <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <span className="text-lg font-semibold text-gray-900">{location.name}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/aged-care">
              <Button variant="outline" size="lg">
                View All Locations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Professional Standards
              </h3>
              <p className="text-gray-600">
                All caregivers are professionally trained, background-checked, and committed to providing the highest quality care standards.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🕒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Flexible Services
              </h3>
              <p className="text-gray-600">
                From part-time support to 24/7 care, we offer flexible scheduling options to accommodate your lifestyle and requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🇦🇺</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Australia Wide
              </h3>
              <p className="text-gray-600">
                Serving all major cities and regional areas across Australia with local, qualified care professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Find Your Perfect Care Match?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Browse our network of qualified care professionals and find the right support for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/aged-care">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                Browse Aged Care
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}