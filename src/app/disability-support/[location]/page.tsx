import React from 'react';
import { Metadata } from 'next';
import { CaregiverCard, SEOFooter, Breadcrumbs } from '@/components/caregiver';
import { 
  getCaregiversByLocation, 
  getLocationPageContent,
  caregiverLocations 
} from '@/data/caregivers';

interface DisabilitySupportPageProps {
  params: {
    location: string;
  };
}

export async function generateStaticParams() {
  return caregiverLocations.map((location) => ({
    location: location.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: DisabilitySupportPageProps): Promise<Metadata> {
  const { location } = params;
  const locationContent = getLocationPageContent(location);
  
  const [cityName, state] = location.split('-');
  const locationName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
  const stateFull = state.toUpperCase();
  
  return {
    title: locationContent?.title || `Disability Support Services in ${locationName}, ${stateFull} | Professional Support Workers`,
    description: locationContent?.description || `Find qualified, experienced disability support professionals in ${locationName}, ${stateFull} offering personalized support services for people with disabilities.`,
    keywords: [
      'disability support',
      location,
      `${locationName} disability support`,
      'disability care',
      'disability services',
      'support workers',
      'professional support',
      `${locationName} support workers`,
      'disability assistance',
      'NDIS support'
    ],
    openGraph: {
      title: locationContent?.title || `Disability Support Services in ${locationName}, ${stateFull}`,
      description: locationContent?.description || `Find experienced, qualified disability support professionals in ${locationName}, ${stateFull}.`,
      type: 'website',
      locale: 'en_AU',
      siteName: 'Caregivers.com.au'
    },
    twitter: {
      card: 'summary_large_image',
      title: locationContent?.title || `Disability Support Services in ${locationName}, ${stateFull}`,
      description: locationContent?.description || `Find experienced, qualified disability support professionals in ${locationName}, ${stateFull}.`
    },
    alternates: {
      canonical: `/disability-support/${location}`
    }
  };
}

export default function DisabilitySupportPage({ params }: DisabilitySupportPageProps) {
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
          { label: 'Disability Support', href: '/disability-support' },
          { label: `${locationName}, ${stateFull}`, href: `/disability-support/${location}` }
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Disability Support Services in {locationName}, {stateFull}
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Connect with experienced, qualified disability support professionals offering personalized assistance and specialized services throughout {locationName} and surrounding areas.
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
                Disability Support Professionals in {locationName}
              </h2>
              <p className="text-gray-600">
                Experienced disability support specialists available in {locationName}, {stateFull}, ready to provide compassionate, professional support tailored to your individual needs.
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
              No Disability Support Professionals Currently Available in {locationName}
            </h2>
            <p className="text-gray-600 mb-6">
              We're constantly expanding our network of qualified disability support professionals. Please check back soon or contact us to discuss your support needs.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Contact Us for Disability Support
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