'use client';

import { useState } from 'react';
import { artists } from '@/lib/data';
import type { Artist } from '@/lib/data';
import ArtistCard from '@/components/artist-card';
import ArtistProfileModal from '@/components/artist-profile-modal';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  const handleModalOpenChange = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
    if (!isOpen) {
      setSelectedArtist(null);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-full">
        <div className="container mx-auto px-4 md:px-8 pb-8">
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold font-headline text-primary tracking-tight">
              Momentos
            </h2>
            <Separator className="mt-2 w-full bg-primary/20 h-0.5" />
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {artists.map((artist, index) => (
                <CarouselItem key={artist.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="p-1">
                    <ArtistCard artist={artist} onArtistClick={handleArtistClick} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <ArtistProfileModal
        artist={selectedArtist}
        isOpen={isModalOpen}
        onOpenChange={handleModalOpenChange}
      />
    </>
  );
}
