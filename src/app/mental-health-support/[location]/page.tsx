import React from 'react';
import { Metadata } from 'next';
import { CaregiverCard, SEOFooter, Breadcrumbs } from '@/components/caregiver';
import { 
  getCaregiversByLocation, 
  getLocationPageContent,
  caregiverLocations 
} from '@/data/caregivers';

interface MentalHealthSupportPageProps {
  params: {
    location: string;
  };
}

export async function generateStaticParams() {
  return caregiverLocations.map((location) => ({
    location: location.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: MentalHealthSupportPageProps): Promise<Metadata> {
  const { location } = params;
  const locationContent = getLocationPageContent(location);
  
  const [cityName, state] = location.split('-');
  const locationName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
  const stateFull = state.toUpperCase();
  
  return {
    title: locationContent?.title || `Mental Health Support Services in ${locationName}, ${stateFull} | Professional Counselors`,
    description: locationContent?.description || `Find qualified, experienced mental health support professionals in ${locationName}, ${stateFull} offering personalized counseling and support services.`,
    keywords: [
      'mental health support',
      location,
      `${locationName} mental health`,
      'counseling',
      'mental health services',
      'psychological support',
      'therapy',
      `${locationName} counselor`,
      'mental health assistance',
      'emotional support'
    ],
    openGraph: {
      title: locationContent?.title || `Mental Health Support Services in ${locationName}, ${stateFull}`,
      description: locationContent?.description || `Find experienced, qualified mental health support professionals in ${locationName}, ${stateFull}.`,
      type: 'website',
      locale: 'en_AU',
      siteName: 'Caregivers.com.au'
    },
    twitter: {
      card: 'summary_large_image',
      title: locationContent?.title || `Mental Health Support Services in ${locationName}, ${stateFull}`,
      description: locationContent?.description || `Find experienced, qualified mental health support professionals in ${locationName}, ${stateFull}.`
    },
    alternates: {
      canonical: `/mental-health-support/${location}`
    }
  };
}

export default function MentalHealthSupportPage({ params }: MentalHealthSupportPageProps) {
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
          { label: 'Mental Health Support', href: '/mental-health-support' },
          { label: `${locationName}, ${stateFull}`, href: `/mental-health-support/${location}` }
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mental Health Support Services in {locationName}, {stateFull}
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Connect with experienced, qualified mental health support professionals offering personalized counseling and emotional support throughout {locationName} and surrounding areas.
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
                Mental Health Support Professionals in {locationName}
              </h2>
              <p className="text-gray-600">
                Experienced mental health support specialists available in {locationName}, {stateFull}, ready to provide compassionate, professional support for your mental wellbeing.
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
              No Mental Health Support Professionals Currently Available in {locationName}
            </h2>
            <p className="text-gray-600 mb-6">
              We're constantly expanding our network of qualified mental health support professionals. Please check back soon or contact us to discuss your mental health support needs.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Contact Us for Mental Health Support
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