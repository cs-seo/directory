import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { caregiverLocations } from '@/data/caregivers';

export const metadata: Metadata = {
  title: 'Find Professional Caregivers in Australia | Aged Care & Disability Support',
  description: 'Connect with qualified, experienced caregivers across Australia. Find professional aged care and disability support services in Sydney, Melbourne, Brisbane, Perth, Adelaide and more.',
  keywords: [
    'caregivers Australia',
    'aged care',
    'disability support',
    'home care',
    'professional caregivers',
    'Sydney caregivers',
    'Melbourne caregivers',
    'Brisbane caregivers',
    'Perth caregivers',
    'Adelaide caregivers'
  ],
  openGraph: {
    title: 'Professional Caregivers Across Australia',
    description: 'Find qualified, experienced caregivers in your area. Professional aged care and disability support services.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Caregivers.com.au'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Caregivers Across Australia',
    description: 'Find qualified, experienced caregivers in your area.'
  }
};

const locationInfo = {
  sydney: {
    name: 'Sydney',
    state: 'NSW',
    description: 'Professional caregivers serving Greater Sydney',
    caregiverCount: 3
  },
  melbourne: {
    name: 'Melbourne',
    state: 'VIC', 
    description: 'Experienced support workers in Greater Melbourne',
    caregiverCount: 2
  },
  brisbane: {
    name: 'Brisbane',
    state: 'QLD',
    description: 'Compassionate care professionals in Greater Brisbane',
    caregiverCount: 1
  },
  perth: {
    name: 'Perth',
    state: 'WA',
    description: 'Dedicated caregivers throughout Perth metro',
    caregiverCount: 1
  },
  adelaide: {
    name: 'Adelaide',
    state: 'SA',
    description: 'Quality care services in Greater Adelaide',
    caregiverCount: 1
  }
};

export default function CaregiversPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Caregivers Across Australia
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Connect with qualified, experienced caregivers offering personalized aged care and disability support services. Find professional care in your city.
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <Link href="#locations">Find Caregivers Near You</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Service Overview */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Care Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our network of professional caregivers provides a wide range of services designed to support independence, dignity, and quality of life.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Aged Care</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Specialized support for seniors including personal care, household assistance, and companionship services.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Disability Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Comprehensive disability support including life skills training, community access, and personal care assistance.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Specialized Care</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Expert care for specific conditions including dementia, mental health support, and rehabilitation services.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Respite Care</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Temporary relief for family caregivers with flexible scheduling and comprehensive care coverage.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Location Directory */}
      <div id="locations" className="max-w-6xl mx-auto px-4 pb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Caregivers in Your City
          </h2>
          <p className="text-lg text-gray-600">
            Browse our network of professional caregivers across Australia's major cities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caregiverLocations.map((location) => {
            const info = locationInfo[location as keyof typeof locationInfo];
            if (!info) return null;
            
            return (
              <Card key={location} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{info.name}</CardTitle>
                    <span className="text-sm text-blue-600 font-medium">{info.state}</span>
                  </div>
                  <CardDescription className="text-gray-600">
                    {info.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">
                      {info.caregiverCount} caregiver{info.caregiverCount !== 1 ? 's' : ''} available
                    </span>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/${location}/caregivers`}>
                      View {info.name} Caregivers
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Caregiver Services?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to help you find the perfect caregiver match for your specific needs and circumstances.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              <Link href="/contact">
                Get Started Today
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}