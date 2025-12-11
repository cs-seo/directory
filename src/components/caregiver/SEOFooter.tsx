import React from 'react';

interface SEOFooterProps {
  location: string;
  locationName: string;
  content: string;
}

export const SEOFooter: React.FC<SEOFooterProps> = ({ location, locationName, content }) => {
  return (
    <div className="bg-gray-50 py-12 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Professional Caregiving Services in {locationName}
          </h2>
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }}
          />
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why Choose Our {locationName} Caregivers?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Professional Excellence</h4>
                <p className="text-sm text-gray-600">
                  All our caregivers are professionally trained, background-checked, and committed to providing the highest quality care standards.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Personalized Approach</h4>
                <p className="text-sm text-gray-600">
                  We understand that every individual has unique needs, which is why we create customized care plans for each client.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Local Knowledge</h4>
                <p className="text-sm text-gray-600">
                  Our {locationName} caregivers have extensive local knowledge and understand the community and healthcare resources available.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h4>
                <p className="text-sm text-gray-600">
                  We offer flexible scheduling options to accommodate your lifestyle and care requirements, from part-time to 24/7 support.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Common Questions About Our {locationName} Services
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">How do I get started with care services in {locationName}?</h4>
                <p className="text-sm text-gray-600">
                  Contact us today for a free consultation. We'll discuss your needs, answer questions, and match you with the perfect caregiver.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Are your {locationName} caregivers insured and background-checked?</h4>
                <p className="text-sm text-gray-600">
                  Yes, all our caregivers undergo comprehensive background checks, reference verification, and carry full professional insurance coverage.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">What areas in {locationName} do your caregivers serve?</h4>
                <p className="text-sm text-gray-600">
                  Our caregivers serve the entire {locationName} metropolitan area and surrounding suburbs, providing consistent quality care wherever you are.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Can services be provided on short notice?</h4>
                <p className="text-sm text-gray-600">
                  While we recommend advance notice for planning, we understand emergencies happen and will do our best to accommodate urgent care needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};