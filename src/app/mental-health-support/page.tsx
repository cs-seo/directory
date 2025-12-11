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

export default function MentalHealthSupportIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Mental Health Support Services
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              Connect with experienced, qualified mental health support professionals across Australia. Find the right counselor or support specialist for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/mental-health-support/sydney-nsw"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 transition-colors"
              >
                Find Support Near You
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mental Health Support Services
          </h2>
          <p className="text-xl text-gray-600">
            Professional mental health support across Australia
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
              Popular Mental Health Support Locations
            </h2>
            <p className="text-xl text-gray-600">
              Find mental health support professionals in major Australian cities
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Sydney, NSW', href: '/mental-health-support/sydney-nsw' },
              { name: 'Melbourne, VIC', href: '/mental-health-support/melbourne-vic' },
              { name: 'Brisbane, QLD', href: '/mental-health-support/brisbane-qld' },
              { name: 'Perth, WA', href: '/mental-health-support/perth-wa' },
              { name: 'Adelaide, SA', href: '/mental-health-support/adelaide-sa' },
              { name: 'Canberra, ACT', href: '/mental-health-support/canberra-act' },
              { name: 'Darwin, NT', href: '/mental-health-support/darwin-nt' },
              { name: 'Hobart, TAS', href: '/mental-health-support/hobart-tas' }
            ].map((location) => (
              <Link
                key={location.name}
                href={location.href}
                className="block p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
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
            Need Help Finding the Right Mental Health Support?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team can help you find qualified, experienced mental health support professionals in your area.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Contact Us for Assistance
          </Link>
        </div>
      </div>
    </div>
  );
}