import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin } from 'lucide-react';
import type { Provider } from '@/lib/types';

interface ProviderCardProps {
  provider: Provider;
}

export function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <Link href={`/providers/${provider.id}`} className="block group">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={provider.mainImage}
              alt={provider.name}
              fill
              className="object-cover"
              data-ai-hint={`${provider.service.toLowerCase().replace(' ', '-')}`}
            />
          </div>
          <div className="p-4">
            <Badge variant="secondary" className="mb-2">{provider.service}</Badge>
            <CardTitle className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
              {provider.name}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{provider.location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold text-foreground">{provider.rating.toFixed(1)}</span>
            <span className="text-muted-foreground ml-1">({provider.reviewsCount} reviews)</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
