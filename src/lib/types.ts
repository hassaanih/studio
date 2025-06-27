export type Review = {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
};

export type VendorStatus = 'Active' | 'Pending Validation' | 'Deactivated';

export type Vendor = {
  id: string;
  name: string;
  category: VendorCategory;
  location: string;
  rating: number;
  reviewsCount: number;
  mainImage: string;
  longDescription: string;
  images: string[];
  reviews: Review[];
  status: VendorStatus;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  registrationDate: string;
};

export const vendorCategories = [
  'Web Development',
  'Graphic Design',
  'Marketing',
  'IT Consulting',
  'Content Creation',
  'Office Supplies',
  'Logistics',
  'Manufacturing',
] as const;

export type VendorCategory = (typeof vendorCategories)[number];
