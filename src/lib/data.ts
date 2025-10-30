export type Artist = {
  id: string;
  name: string;
  style: string;
  imageSeed: string;
  date: string;
  description?: string;
  socialUrl?: string;
};

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Milky',
    style: 'Digital Art',
    imageSeed: 'milky',
    date: '2025-09-11',
    description: 'Milky é uma artista digital conhecida por suas ilustrações vibrantes e personagens cativantes, explorando temas de fantasia e cultura pop com um toque único e moderno.',
    socialUrl: 'https://www.tiktok.com/@milkyzinha_15',
  }
];

export const getArtistById = (id: string): Artist | undefined => {
  return artists.find(artist => artist.id === id);
};
