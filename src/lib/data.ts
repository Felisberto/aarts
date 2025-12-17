
export type Artist = {
  id: string;
  name: string;
  style: string;
  imageSeed: string;
  date: string;
  quote?: string;
  description?: string;
  socialUrl?: string;
};

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Milky',
    style: 'Physic Art',
    imageSeed: 'milky',
    date: '2025-09-11',
    quote: 'Atulemado',
    description: 'Arte feita com carinho pela Milky, uma honra ter um trabalho de alguém tão incrível.',
    socialUrl: 'https://www.tiktok.com/@milkyzinha_15',
  },
  {
    id: '2',
    name: 'angen_luz',
    style: 'Digital Art',
    imageSeed: 'angen_luz',
    date: '2025-11-21',
    quote: 'Felis no dia menos afeminado',
    description: 'Feito pela luz de mim de um jeito diferente, agradeço de coração mas eu não sou um femboy 😠😂❤️',
    socialUrl: 'https://www.tiktok.com/@angen_luz2',
  }
];

export const getArtistById = (id: string): Artist | undefined => {
  return artists.find(artist => artist.id === id);
};
