import React from 'react';
import { Metadata } from 'next';
import { CaregiverCard, SEOFooter, Breadcrumbs } from '@/components/caregiver';
import { 
  getCaregiversByLocation, 
  getLocationPageContent,
  caregiverLocations 
} from '@/data/caregivers';

interface AgedCarePageProps {
  params: {
    location: string;
  };
}

export async function generateStaticParams() {
  return caregiverLocations.map((location) => ({
    location: location.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: AgedCarePageProps): Promise<Metadata> {
  const { location } = params;
  const locationContent = getLocationPageContent(location);
  
  const [cityName, state] = location.split('-');
  const locationName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
  const stateFull = state.toUpperCase();
  
  return {
    title: locationContent?.title || `Aged Care Services in ${locationName}, ${stateFull} | Professional Caregivers`,
    description: locationContent?.description || `Find qualified, experienced aged care professionals in ${locationName}, ${stateFull} offering personalized support services for seniors.`,
    keywords: [
      'aged care',
      location,
      `${locationName} aged care`,
      'senior care',
      'elderly care',
      'aged care services',
      'professional caregivers',
      `${locationName} caregivers`,
      'senior support',
      'elderly support services'
    ],
    openGraph: {
      title: locationContent?.title || `Aged Care Services in ${locationName}, ${stateFull}`,
      description: locationContent?.description || `Find experienced, qualified aged care professionals in ${locationName}, ${stateFull}.`,
      type: 'website',
      locale: 'en_AU',
      siteName: 'Caregivers.com.au'
    },
    twitter: {
      card: 'summary_large_image',
      title: locationContent?.title || `Aged Care Services in ${locationName}, ${stateFull}`,
      description: locationContent?.description || `Find experienced, qualified aged care professionals in ${locationName}, ${stateFull}.`
    },
    alternates: {
      canonical: `/aged-care/${location}`
    }
  };
}

export default function AgedCarePage({ params }: AgedCarePageProps) {
  const { location } = params;
  const caregivers = getCaregiversByLocation(location);
  const locationContent = getLocationPageContent(location);
  
  const [cityName, state] = location.split('-');
  const locationName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
  const stateFull = state.toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Aged Care', href: '/aged-care' },
          { label: `${locationName}, ${stateFull}`, href: `/aged-care/${location}` }
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Aged Care Services in {locationName}, {stateFull}
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Connect with experienced, qualified aged care professionals offering compassionate support and specialized services for seniors throughout {locationName} and surrounding areas.
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
                Aged Care Professionals in {locationName}
              </h2>
              <p className="text-gray-600">
                Experienced aged care specialists available in {locationName}, {stateFull}, ready to provide compassionate, professional support tailored to your loved one's needs.
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
              No Aged Care Professionals Currently Available in {locationName}
            </h2>
            <p className="text-gray-600 mb-6">
              We're constantly expanding our network of qualified aged care professionals. Please check back soon or contact us to discuss your care needs.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
            >
              Contact Us for Aged Care Assistance
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