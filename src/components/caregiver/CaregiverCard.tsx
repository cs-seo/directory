import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { CaregiverProfile } from '@/data/caregivers';

interface CaregiverCardProps {
  caregiver: CaregiverProfile;
}

export const CaregiverCard: React.FC<CaregiverCardProps> = ({ caregiver }) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start space-x-4">
          <img
            src={caregiver.imageUrl}
            alt={`${caregiver.name} - ${caregiver.title}`}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/default-avatar.jpg';
            }}
          />
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-semibold text-gray-900">
              {caregiver.name}
            </CardTitle>
            <p className="text-sm text-blue-600 font-medium mt-1">
              {caregiver.title}
            </p>
            <div className="flex items-center mt-2 space-x-4">
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="text-sm text-gray-600 ml-1">
                  {caregiver.rating} ({caregiver.reviewCount} reviews)
                </span>
              </div>
              <span className="text-sm text-gray-500">
                {caregiver.experience} experience
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
          {caregiver.description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
          <div className="flex flex-wrap gap-1">
            {caregiver.specialties.slice(0, 3).map((specialty) => (
              <span
                key={specialty}
                className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
              >
                {specialty}
              </span>
            ))}
            {caregiver.specialties.length > 3 && (
              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                +{caregiver.specialties.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Services:</h4>
          <div className="flex flex-wrap gap-1">
            {caregiver.services.slice(0, 2).map((service) => (
              <span
                key={service}
                className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full"
              >
                {service}
              </span>
            ))}
            {caregiver.services.length > 2 && (
              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                +{caregiver.services.length - 2} more
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-auto space-y-2">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Availability:</span> {caregiver.availability}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              View Profile
            </Button>
            <Button size="sm" className="flex-1">
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};