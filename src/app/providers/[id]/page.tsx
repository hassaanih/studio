import { vendors } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Building2, GalleryHorizontalEnd, MessageSquareText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ContactDialog } from '@/components/contact-dialog';
import type { Review } from '@/lib/types';

interface VendorPageProps {
  params: {
    id: string;
  };
}

function renderStars(rating: number) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />);
    } else {
      stars.push(<Star key={i} className="w-5 h-5 text-muted-foreground/50" />);
    }
  }
  return stars;
}


function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="bg-secondary/50">
      <CardHeader className="flex-row items-center justify-between pb-2">
         <CardTitle className="text-base font-medium">{review.author}</CardTitle>
         <div className="flex items-center gap-0.5">{renderStars(review.rating)}</div>
      </CardHeader>
      <CardContent>
         <p className="text-sm text-muted-foreground mb-2">{review.date}</p>
         <p className="text-foreground">{review.comment}</p>
      </CardContent>
    </Card>
  );
}

export default function VendorPage({ params }: VendorPageProps) {
  const vendor = vendors.find((p) => p.id === params.id);

  if (!vendor) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Header Section */}
        <div className="md:flex items-center justify-between mb-8">
            <div>
                <Badge variant="default" className="mb-2 text-sm">{vendor.category}</Badge>
                <h1 className="text-3xl md:text-5xl font-bold font-headline">{vendor.name}</h1>
                <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        <span>{vendor.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {renderStars(vendor.rating)}
                        <span className="font-semibold text-foreground ml-1">{vendor.rating.toFixed(1)}</span>
                        <span>({vendor.reviewsCount} reviews)</span>
                    </div>
                </div>
            </div>
            <div className="mt-4 md:mt-0">
                <ContactDialog vendorName={vendor.name} />
            </div>
        </div>

        <Separator className="my-8" />

        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
                 {/* About Section */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Building2 className="text-primary"/>
                            <span>About {vendor.name}</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/80 leading-relaxed">{vendor.longDescription}</p>
                    </CardContent>
                </Card>

                {/* Gallery Section */}
                {vendor.images.length > 0 && (
                     <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <GalleryHorizontalEnd className="text-primary"/>
                                <span>Gallery</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {vendor.images.map((img, index) => (
                                    <CarouselItem key={index}>
                                        <div className="relative aspect-video w-full">
                                        <Image
                                            src={img}
                                            alt={`${vendor.name} gallery image ${index + 1}`}
                                            fill
                                            className="rounded-lg object-cover"
                                            data-ai-hint={`${vendor.category.toLowerCase().replace(' ', '-')} office`}
                                        />
                                        </div>
                                    </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </CardContent>
                    </Card>
                )}

                {/* Reviews Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                             <MessageSquareText className="text-primary"/>
                            <span>Customer Reviews</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {vendor.reviews.map((review) => (
                           <ReviewCard key={review.id} review={review} />
                        ))}
                    </CardContent>
                </Card>
            </div>
            <div className="md:col-span-1">
                 {/* Placeholder for other info */}
            </div>
        </div>
      </div>
    </div>
  );
}
