export interface CaregiverProfile {
  id: string;
  name: string;
  title: string;
  description: string;
  experience: string;
  specialties: string[];
  location: string;
  availability: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  contactEmail: string;
  phoneNumber?: string;
  services: string[];
}

export const caregiverLocations = [
  'sydney',
  'melbourne', 
  'brisbane',
  'perth',
  'adelaide',
  'canberra',
  'darwin',
  'hobart'
];

export const sampleCaregivers: Record<string, CaregiverProfile[]> = {
  sydney: [
    {
      id: 'sarah-johnson-1',
      name: 'Sarah Johnson',
      title: 'Registered Aged Care Specialist',
      description: 'Dedicated aged care professional with over 8 years of experience providing compassionate support to seniors in the comfort of their own homes. Specializes in dementia care and mobility assistance.',
      experience: '8+ years',
      specialties: ['Dementia Care', 'Mobility Assistance', 'Medication Management', 'Meal Preparation'],
      location: 'sydney',
      availability: 'Full-time, Mon-Fri',
      rating: 4.9,
      reviewCount: 127,
      imageUrl: '/images/caregivers/sarah-johnson.jpg',
      contactEmail: 'sarah.johnson@caregivers.com.au',
      services: ['Personal Care', 'Household Tasks', 'Social Support', 'Transport']
    },
    {
      id: 'michael-chen-2',
      name: 'Michael Chen',
      title: 'Certified Disability Support Worker',
      description: 'Experienced disability support specialist committed to empowering individuals with disabilities to achieve their goals and maintain independence. Certified in complex care needs.',
      experience: '6+ years',
      specialties: ['Disability Support', 'Complex Care', 'Community Access', 'Life Skills Training'],
      location: 'sydney',
      availability: 'Part-time, Flexible',
      rating: 4.8,
      reviewCount: 89,
      imageUrl: '/images/caregivers/michael-chen.jpg',
      contactEmail: 'michael.chen@caregivers.com.au',
      phoneNumber: '+61 2 9876 5432',
      services: ['Personal Care', 'Community Access', 'Life Skills', 'Respite Care']
    },
    {
      id: 'emma-watson-3',
      name: 'Emma Watson',
      title: 'Mental Health Support Specialist',
      description: 'Qualified mental health professional with extensive experience supporting individuals with mental health challenges. Passionate about promoting wellbeing and recovery.',
      experience: '5+ years',
      specialties: ['Mental Health', 'Anxiety Support', 'Depression Care', 'Crisis Intervention'],
      location: 'sydney',
      availability: 'Full-time',
      rating: 4.9,
      reviewCount: 156,
      imageUrl: '/images/caregivers/emma-watson.jpg',
      contactEmail: 'emma.watson@caregivers.com.au',
      services: ['Emotional Support', 'Life Coaching', 'Community Integration', 'Crisis Support']
    }
  ],
  melbourne: [
    {
      id: 'david-rodriguez-4',
      name: 'David Rodriguez',
      title: 'Senior Aged Care Worker',
      description: 'Compassionate aged care specialist with a background in nursing. Experienced in providing high-quality care for seniors with complex health needs.',
      experience: '10+ years',
      specialties: ['Aged Care', 'Complex Health Needs', 'Wound Care', 'Pain Management'],
      location: 'melbourne',
      availability: 'Full-time, Weekends',
      rating: 4.8,
      reviewCount: 203,
      imageUrl: '/images/caregivers/david-rodriguez.jpg',
      contactEmail: 'david.rodriguez@caregivers.com.au',
      services: ['Personal Care', 'Health Monitoring', 'Medication Support', 'Rehabilitation']
    },
    {
      id: 'lisa-thompson-5',
      name: 'Lisa Thompson',
      title: 'Disability Care Coordinator',
      description: 'Experienced disability support coordinator who works collaboratively with clients and their families to develop personalized care plans and achieve life goals.',
      experience: '7+ years',
      specialties: ['Disability Support', 'Plan Coordination', 'Advocacy', 'Family Support'],
      location: 'melbourne',
      availability: 'Part-time, Evenings',
      rating: 4.9,
      reviewCount: 134,
      imageUrl: '/images/caregivers/lisa-thompson.jpg',
      contactEmail: 'lisa.thompson@caregivers.com.au',
      services: ['Plan Management', 'Advocacy', 'Family Liaison', 'Goal Setting']
    }
  ],
  brisbane: [
    {
      id: 'james-williams-6',
      name: 'James Williams',
      title: 'Community Care Specialist',
      description: 'Friendly community care worker who believes in building meaningful relationships with clients. Specializes in rural and remote area support.',
      experience: '4+ years',
      specialties: ['Community Care', 'Rural Support', 'Transport', 'Social Activities'],
      location: 'brisbane',
      availability: 'Flexible Hours',
      rating: 4.7,
      reviewCount: 76,
      imageUrl: '/images/caregivers/james-williams.jpg',
      contactEmail: 'james.williams@caregivers.com.au',
      services: ['Transport', 'Social Support', 'Shopping', 'Recreation']
    }
  ],
  perth: [
    {
      id: 'amanda-brown-7',
      name: 'Amanda Brown',
      title: 'End-of-Life Care Specialist',
      description: 'Compassionate palliative care specialist with specialized training in end-of-life support. Provides comfort and dignity during difficult times.',
      experience: '9+ years',
      specialties: ['Palliative Care', 'End-of-Life Support', 'Family Counseling', 'Comfort Care'],
      location: 'perth',
      availability: 'On-call, 24/7',
      rating: 5.0,
      reviewCount: 167,
      imageUrl: '/images/caregivers/amanda-brown.jpg',
      contactEmail: 'amanda.brown@caregivers.com.au',
      phoneNumber: '+61 8 9123 4567',
      services: ['Palliative Care', 'Family Support', 'Comfort Care', 'Bereavement Support']
    }
  ],
  adelaide: [
    {
      id: 'robert-smith-8',
      name: 'Robert Smith',
      title: 'Rehabilitation Support Worker',
      description: 'Experienced rehabilitation support specialist who works with clients recovering from injury or illness. Focuses on rebuilding independence and confidence.',
      experience: '6+ years',
      specialties: ['Rehabilitation', 'Injury Recovery', 'Physiotherapy Support', 'Mobility Training'],
      location: 'adelaide',
      availability: 'Full-time',
      rating: 4.8,
      reviewCount: 98,
      imageUrl: '/images/caregivers/robert-smith.jpg',
      contactEmail: 'robert.smith@caregivers.com.au',
      services: ['Rehabilitation', 'Exercise Support', 'Skill Building', 'Progress Monitoring']
    }
  ]
};

// SEO-optimized content for location pages
export const locationPageContent: Record<string, {
  title: string;
  description: string;
  seoFooterContent: string;
}> = {
  sydney: {
    title: 'Aged Care & Disability Support Services in Sydney | Professional Caregivers',
    description: 'Find qualified, experienced caregivers in Sydney offering personalized aged care, disability support, and specialized care services. Professional, compassionate, and reliable.',
    seoFooterContent: `Looking for professional aged care and disability support services in Sydney? Our network of qualified caregivers provides comprehensive, personalized care solutions for seniors and individuals with disabilities across the greater Sydney metropolitan area.

Our Sydney-based care professionals offer a wide range of services including personal care assistance, household support, medication management, mobility assistance, and specialized dementia care. Each of our caregivers is thoroughly vetted, professionally trained, and committed to delivering high-quality, compassionate care that enables clients to maintain their independence and quality of life in the comfort of their own homes.

We understand that every individual has unique care needs, which is why our Sydney caregivers work closely with clients, families, and healthcare providers to develop personalized care plans that address specific requirements, preferences, and goals. From basic companionship and social support to complex health care needs, our professional caregivers are equipped to handle diverse care situations with skill and sensitivity.

Our Sydney team includes registered aged care specialists, certified disability support workers, mental health support professionals, and rehabilitation specialists. Each brings years of experience and specialized training to ensure clients receive the highest standard of care. Whether you need short-term respite care, ongoing daily support, or specialized end-of-life care, our Sydney caregivers are available to provide reliable, professional assistance that you can trust.

Choosing the right care provider is an important decision, and we\'re committed to helping you find the perfect match from our network of experienced Sydney caregivers. Contact us today to learn more about our services and how our professional caregivers can support you or your loved one in maintaining independence, dignity, and quality of life in Sydney.`
  },
  melbourne: {
    title: 'Trusted Caregivers & Support Workers in Melbourne | Aged Care & Disability Services',
    description: 'Discover experienced, compassionate caregivers in Melbourne providing professional aged care, disability support, and specialized health services. Find the right care for your needs.',
    seoFooterContent: `Our Melbourne caregivers provide exceptional aged care and disability support services throughout Melbourne and surrounding suburbs. With a focus on person-centered care, our professional support workers help individuals maintain their independence while receiving the assistance they need to thrive.

Melbourne\'s diverse community requires flexible, culturally sensitive care approaches, and our caregivers are trained to understand and respect the unique needs of all clients. Whether you\'re seeking support for an aging parent, living with a disability, or recovering from illness or injury, our Melbourne-based care professionals deliver personalized services that promote independence, dignity, and overall wellbeing.

Our Melbourne team encompasses a wide range of care specialists including senior aged care workers, disability support coordinators, mental health professionals, and rehabilitation specialists. Each caregiver brings extensive experience and specialized training to provide comprehensive support tailored to individual needs and circumstances.

The Melbourne area presents unique care challenges, from busy urban environments to quieter suburban neighborhoods, and our caregivers are well-equipped to navigate these diverse settings while providing consistent, reliable support. We pride ourselves on our ability to match clients with caregivers who not only have the right skills and experience but also share similar interests, values, and communication styles.

Our Melbourne caregivers offer flexible scheduling options to accommodate varying care needs, from a few hours of weekly support to comprehensive 24/7 care arrangements. Services include personal care assistance, household tasks, community access support, transportation, social activities, and specialized health care management. We also provide respite care for family caregivers and transition support for individuals moving from hospital to home care.

With strong connections to Melbourne\'s healthcare system and community resources, our caregivers can coordinate comprehensive care packages that integrate seamlessly with existing medical treatments and support networks. This collaborative approach ensures continuity of care and optimal outcomes for all clients.`
  },
  brisbane: {
    title: 'Professional Caregivers in Brisbane | Aged Care & Disability Support Services',
    description: 'Find experienced, caring professionals in Brisbane offering quality aged care, disability support, and health services. Trusted caregivers serving the greater Brisbane area.',
    seoFooterContent: `Brisbane families trust our professional caregivers for comprehensive aged care and disability support services across the greater Brisbane region. Our experienced team provides personalized care solutions that enable individuals to live safely and comfortably in their own homes while maintaining their independence and dignity.

Our Brisbane-based caregivers understand the unique lifestyle and care preferences of Queensland residents, offering flexible, adaptable support that accommodates local customs, weather conditions, and community resources. From routine daily assistance to specialized care for complex conditions, our professional support workers deliver consistent, high-quality services that families can depend on.

The Brisbane area encompasses diverse communities, from the bustling inner city to suburban neighborhoods and rural outskirts, and our caregivers are skilled at providing appropriate care regardless of location. Our services include personal care assistance, domestic support, social and community engagement, transport services, and specialized health care management.

Our Brisbane team includes aged care specialists, disability support workers, mental health professionals, and community care coordinators, each bringing specialized training and local knowledge to provide comprehensive support. We recognize that every person\'s care journey is unique, which is why we develop individualized care plans that respect personal preferences, cultural backgrounds, and specific health needs.

With Brisbane\'s growing population of seniors and individuals requiring disability support, our caregivers play a crucial role in maintaining the health, safety, and social connection of vulnerable community members. Our services extend beyond basic care needs to include emotional support, life skills development, family liaison, and crisis intervention when required.

Families choosing our Brisbane caregivers benefit from our commitment to transparency, regular communication, and continuous quality improvement. We maintain open lines of communication with clients, families, and healthcare providers to ensure that care plans remain relevant and effective as needs evolve over time.`
  },
  perth: {
    title: 'Expert Caregivers in Perth | Quality Aged Care & Disability Support',
    description: 'Connect with skilled, compassionate caregivers in Perth offering professional aged care, disability services, and specialized health support. Quality care for Western Australian families.',
    seoFooterContent: `Our Perth caregivers provide exceptional aged care and disability support services throughout Western Australia, with a particular focus on the greater Perth metropolitan area and surrounding regions. Understanding the unique needs of Western Australian families, our professional support workers deliver personalized care solutions that respect local lifestyle preferences and cultural diversity.

Perth\'s extensive geography presents both opportunities and challenges for community care, and our caregivers are trained to provide consistent, high-quality support whether clients live in inner-city apartments, suburban homes, or rural properties. Our comprehensive services include personal care assistance, domestic support, community access, transport services, and specialized health care management for complex conditions.

The Western Australian climate and lifestyle require adaptable care approaches, and our Perth-based team is experienced in accommodating seasonal variations, outdoor activities, and the unique social dynamics of WA communities. Our caregivers work collaboratively with clients to develop care plans that not only meet health and safety needs but also promote engagement with Perth\'s vibrant community, cultural activities, and natural environment.

Our Perth team encompasses various specialist roles including aged care coordinators, disability support specialists, mental health professionals, and palliative care experts. Each brings extensive experience in their field and a commitment to person-centered care that prioritizes individual choice, dignity, and quality of life.

We recognize that effective community care requires strong connections with local healthcare providers, social services, and community resources. Our Perth caregivers maintain active relationships with local medical centers, hospitals, allied health professionals, and community organizations to ensure coordinated, comprehensive care that addresses all aspects of client wellbeing.

Families throughout Perth and Western Australia trust our caregivers for reliable, compassionate support that enables their loved ones to maintain independence and dignity while receiving professional care in comfortable, familiar surroundings.`
  },
  adelaide: {
    title: 'Dedicated Caregivers in Adelaide | Comprehensive Aged Care & Disability Services',
    description: 'Find reliable, professional caregivers in Adelaide providing quality aged care, disability support, and specialized health services. Trusted care for South Australian communities.',
    seoFooterContent: `Adelaide families rely on our dedicated caregivers for comprehensive aged care and disability support services across South Australia. Our professional support workers provide personalized care solutions that enable individuals to maintain their independence and quality of life while receiving the assistance they need in their own homes and communities.

Our Adelaide-based team understands the distinctive character of South Australian communities, offering culturally sensitive care that respects local traditions, values, and lifestyle preferences. From the bustling Adelaide Hills to the coastal communities and rural areas, our caregivers deliver consistent, high-quality services that accommodate the diverse needs of SA residents.

The Adelaide region encompasses a range of care environments, from modern metropolitan areas to smaller communities with unique local characteristics. Our caregivers are skilled at providing appropriate support regardless of location, ensuring that clients receive consistent, professional care whether they live in the Adelaide CBD, surrounding suburbs, or regional areas.

Our Adelaide team includes rehabilitation specialists, aged care coordinators, disability support workers, and community care professionals, each bringing specialized training and local knowledge to provide comprehensive support. We work closely with clients and their families to develop individualized care plans that address specific needs, preferences, and goals while remaining flexible enough to adapt as circumstances change.

South Australia\'s aging population and growing community of individuals requiring disability support benefit significantly from our professional caregiver services. Our support extends beyond basic care needs to include rehabilitation assistance, life skills development, community integration, social support, and crisis intervention when required.

We maintain strong partnerships with Adelaide\'s healthcare system, including local hospitals, medical centers, allied health services, and community organizations. This collaborative approach ensures that our caregivers can provide integrated care that works seamlessly with existing medical treatments and support networks, promoting optimal health outcomes and client satisfaction.`
  }
};

export function getCaregiversByLocation(location: string): CaregiverProfile[] {
  return sampleCaregivers[location] || [];
}

export function getLocationPageContent(location: string) {
  return locationPageContent[location] || null;
}