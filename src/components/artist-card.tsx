
import type { Artist } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type ArtistCardProps = {
  artist: Artist;
  onArtistClick: (artist: Artist) => void;
};

export default function ArtistCard({ artist, onArtistClick }: ArtistCardProps) {
  const image = PlaceHolderImages.find(img => img.id === artist.imageSeed);
  const formattedDate = new Date(artist.date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div
      className="transition-transform duration-300 ease-in-out hover:scale-105 relative hover:z-10 cursor-pointer"
      onClick={() => onArtistClick(artist)}
    >
      <Card className="overflow-hidden bg-card border-border shadow-lg h-full flex flex-col">
        <CardContent className="p-4 flex flex-col flex-grow">
          <div className="text-center mb-4">
              <span className="text-xl font-bold font-headline text-primary cursor-pointer relative inline-block group">
                {artist.name}
                <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </span>
            <p className="text-xs text-muted-foreground">{formattedDate}</p>
          </div>

          {artist.quote && (
            <div className="text-center mb-4 flex-grow-0">
              <p className="text-sm italic text-foreground/70">"{artist.quote}"</p>
            </div>
          )}

          <div className="relative rounded-lg overflow-hidden shadow-lg aspect-[3/4] mb-4">
            {image ? (
              <Image
                src={image.imageUrl}
                alt={image.description || 'Artwork'}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Image not found</span>
              </div>
            )}
          </div>
          
          <div className="text-center flex-grow">
            <p className="text-sm text-foreground/80 line-clamp-4">
              {artist.description || artist.style}
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}

