export type Review = {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
};

export type Provider = {
  id:string;
  name: string;
  service: ServiceType;
  location: string;
  rating: number;
  reviewsCount: number;
  mainImage: string;
  longDescription: string;
  images: string[];
  reviews: Review[];
};

export const serviceTypes = [
  'Web Development',
  'Graphic Design',
  'Marketing',
  'IT Consulting',
  'Content Creation',
] as const;

export type ServiceType = (typeof serviceTypes)[number];
