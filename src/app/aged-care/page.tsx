import React from 'react';
import Link from 'next/link';

const serviceCategories = [
  {
    id: 'aged-care',
    name: 'Aged Care',
    description: 'Professional aged care services for seniors requiring assistance with daily activities, medical care, and companionship.',
    href: '/aged-care',
    color: 'from-teal-500 to-teal-700',
    icon: '👵'
  },
  {
    id: 'disability-support',
    name: 'Disability Support',
    description: 'Comprehensive disability support services including personal care, community access, and life skills development.',
    href: '/disability-support',
    color: 'from-purple-500 to-purple-700',
    icon: '♿'
  },
  {
    id: 'mental-health-support',
    name: 'Mental Health Support',
    description: 'Professional mental health support services including counseling, crisis intervention, and emotional support.',
    href: '/mental-health-support',
    color: 'from-indigo-500 to-indigo-700',
    icon: '🧠'
  }
];

export default function AgedCareIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Aged Care Services
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
              Connect with experienced, qualified aged care professionals across Australia. Find the right caregiver for your loved one's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/aged-care/sydney-nsw"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-white hover:bg-gray-100 transition-colors"
              >
                Find Aged Care Near You
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Location Selector */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Aged Care in Your Area
          </h2>
          <p className="text-xl text-gray-600">
            Browse aged care professionals by city or region across Australia
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <Link
                  href={category.href}
                  className={`inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r ${category.color} hover:opacity-90 transition-opacity`}
                >
                  Explore {category.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Locations */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Aged Care Locations
            </h2>
            <p className="text-xl text-gray-600">
              Find aged care professionals in major Australian cities
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Sydney, NSW', href: '/aged-care/sydney-nsw' },
              { name: 'Melbourne, VIC', href: '/aged-care/melbourne-vic' },
              { name: 'Brisbane, QLD', href: '/aged-care/brisbane-qld' },
              { name: 'Perth, WA', href: '/aged-care/perth-wa' },
              { name: 'Adelaide, SA', href: '/aged-care/adelaide-sa' },
              { name: 'Canberra, ACT', href: '/aged-care/canberra-act' },
              { name: 'Darwin, NT', href: '/aged-care/darwin-nt' },
              { name: 'Hobart, TAS', href: '/aged-care/hobart-tas' }
            ].map((location) => (
              <Link
                key={location.name}
                href={location.href}
                className="block p-4 border border-gray-200 rounded-lg hover:border-teal-300 hover:bg-teal-50 transition-colors"
              >
                <span className="text-gray-900 font-medium">{location.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Help Finding the Right Aged Care?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team can help you find qualified, experienced aged care professionals in your area.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
          >
            Contact Us for Assistance
          </Link>
        </div>
      </div>
    </div>
  );
}