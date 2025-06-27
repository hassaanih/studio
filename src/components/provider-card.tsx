import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin } from 'lucide-react';
import type { Vendor } from '@/lib/types';

interface VendorCardProps {
  vendor: Vendor;
}

export function ProviderCard({ vendor }: VendorCardProps) {
  return (
    <Link href={`/providers/${vendor.id}`} className="block group">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={vendor.mainImage}
              alt={vendor.name}
              fill
              className="object-cover"
              data-ai-hint={`${vendor.category.toLowerCase().replace(' ', '-')}`}
            />
          </div>
          <div className="p-4">
            <Badge variant="secondary" className="mb-2">{vendor.category}</Badge>
            <CardTitle className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
              {vendor.name}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{vendor.location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold text-foreground">{vendor.rating.toFixed(1)}</span>
            <span className="text-muted-foreground ml-1">({vendor.reviewsCount} reviews)</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
