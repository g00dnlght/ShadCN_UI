import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export function CarouselOrientation() {
  const images = [
    '/3dwork1.jpg',
    '/3dwork2.jpg',
    '/3dwork3.jpg',
    '/3dwork4.jpg',
    '/3dwork5.jpg',
    '/ZBrushFinal.jpg',
    '/ZBrushFinalBust.jpg',
    '/ZBrushFinalBustGray1.jpg',
    '/ZBrushFinalBustGray2.jpg',
  ];

  return (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6 aspect-square">
                  <Image
                    src={image}
                    width={500}
                    height={500}
                    alt={`3D Work ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
