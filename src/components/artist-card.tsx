
import type { Artist } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type ArtistCardProps = {
  artist: Artist;
};

export default function ArtistCard({ artist }: ArtistCardProps) {
  const image = PlaceHolderImages.find(img => img.id === artist.imageSeed);
  const formattedDate = new Date(artist.date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="group">
      <Card className="overflow-hidden bg-card border-border shadow-lg h-full flex flex-col">
        <CardContent className="p-4 flex flex-col flex-grow">
          <div className="text-center mb-4">
            <Link href={artist.socialUrl || '#'} target="_blank" rel="noopener noreferrer">
              <span className="text-xl font-bold font-headline text-primary hover:text-primary/80 hover:underline transition-colors cursor-pointer">
                {artist.name}
              </span>
            </Link>
            <p className="text-xs text-muted-foreground">{formattedDate}</p>
          </div>

          {artist.quote && (
            <div className="text-center mb-4 flex-grow-0">
              <p className="text-sm italic text-foreground/70">"{artist.quote}"</p>
            </div>
          )}

          <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {image ? (
              <Link href={`/artist/${artist.id}`}>
                <Image
                  src={image.imageUrl}
                  alt={image.description || 'Artwork'}
                  data-ai-hint={image.imageHint}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Image not found</span>
              </div>
            )}
          </div>
          
          <div className="mt-4 text-center flex-grow">
            <p className="text-sm text-foreground/80 line-clamp-4">
              {artist.description || artist.style}
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}

