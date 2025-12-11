import React from 'react';
import { Metadata } from 'next';
import { CaregiverCard, SEOFooter, Breadcrumbs } from '@/components/caregiver';
import { 
  getCaregiversByLocation, 
  getLocationPageContent,
  caregiverLocations 
} from '@/data/caregivers';

interface CaregiversPageProps {
  params: {
    location: string;
  };
}

export async function generateStaticParams() {
  return caregiverLocations.map((location) => ({
    location: location.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: CaregiversPageProps): Promise<Metadata> {
  const { location } = params;
  const locationContent = getLocationPageContent(location);
  
  const locationName = location.charAt(0).toUpperCase() + location.slice(1);
  
  return {
    title: locationContent?.title || `Caregivers in ${locationName} | Professional Aged Care & Support Services`,
    description: locationContent?.description || `Find qualified, experienced caregivers in ${locationName} offering personalized aged care, disability support, and specialized care services.`,
    keywords: [
      'caregivers',
      location,
      'aged care',
      'disability support',
      'home care',
      'professional caregivers',
      `${location} caregivers`,
      'aged care services',
      'disability care',
      'respite care',
      'personal care'
    ],
    openGraph: {
      title: locationContent?.title || `Professional Caregivers in ${locationName}`,
      description: locationContent?.description || `Find experienced, qualified caregivers in ${locationName}.`,
      type: 'website',
      locale: 'en_AU',
      siteName: 'Caregivers.com.au'
    },
    twitter: {
      card: 'summary_large_image',
      title: locationContent?.title || `Professional Caregivers in ${locationName}`,
      description: locationContent?.description || `Find experienced, qualified caregivers in ${locationName}.`
    },
    alternates: {
      canonical: `/${location}/caregivers`
    }
  };
}

export default function CaregiversPage({ params }: CaregiversPageProps) {
  const { location } = params;
  const caregivers = getCaregiversByLocation(location);
  const locationContent = getLocationPageContent(location);
  
  const locationName = location.charAt(0).toUpperCase() + location.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: locationName, href: `/${location}/caregivers` }
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Caregivers in {locationName}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Connect with experienced, qualified caregivers offering personalized aged care and disability support services throughout {locationName} and surrounding areas.
            </p>
          </div>
        </div>
      </div>

      {/* Caregivers Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {caregivers.length > 0 ? (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Our {locationName} Care Team
              </h2>
              <p className="text-gray-600">
                Professional caregivers available in {locationName}, ready to provide compassionate, high-quality care tailored to your needs.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caregivers.map((caregiver) => (
                <CaregiverCard key={caregiver.id} caregiver={caregiver} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No Caregivers Currently Available in {locationName}
            </h2>
            <p className="text-gray-600 mb-6">
              We're constantly expanding our network of qualified caregivers. Please check back soon or contact us to discuss your care needs.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact Us for Assistance
            </a>
          </div>
        )}
      </div>

      {/* SEO Footer */}
      {locationContent && (
        <SEOFooter
          location={location}
          locationName={locationName}
          content={locationContent.seoFooterContent}
        />
      )}
    </div>
  );
}