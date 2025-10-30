
'use client';

import type { Artist } from '@/lib/data';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

type ArtistProfileModalProps = {
  artist: Artist | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export default function ArtistProfileModal({ artist, isOpen, onOpenChange }: ArtistProfileModalProps) {
  if (!artist) {
    return null;
  }

  const image = PlaceHolderImages.find(img => img.id === `profile-${artist.imageSeed}`);
  const formattedDate = new Date(artist.date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const TitleContent = () => (
    <DialogTitle className="text-3xl font-headline text-primary cursor-pointer group relative inline-block w-fit mx-auto sm:mx-0">
      {artist.name}
      <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </DialogTitle>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] bg-card border-border p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 flex items-center justify-center">
            <div className="relative rounded-lg overflow-hidden w-full aspect-[3/4]">
              {image ? (
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center aspect-[3/4]">
                  <span className="text-sm text-muted-foreground">Image not available</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col border-l border-border/50">
            <div className="p-6 pb-4">
              <DialogHeader>
                {artist.socialUrl ? (
                  <Link href={artist.socialUrl} target="_blank" rel="noopener noreferrer">
                    <TitleContent />
                  </Link>
                ) : (
                  <TitleContent />
                )}
                <DialogDescription className="text-sm text-muted-foreground">
                  {formattedDate}
                </DialogDescription>
              </DialogHeader>
            </div>
            <div className="px-6 pb-6 flex-grow">
              <div className="bg-muted/50 p-4 rounded-md h-full">
                <p className="text-base leading-relaxed text-foreground/90">
                  {artist.description || 'No description provided.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
