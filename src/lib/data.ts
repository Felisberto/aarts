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
    description: 'Arte feita com carinho pela Milky, é uma honra receber isso de alguém tão incrível, então, muito obrigado Milky! ❤️ ',
    socialUrl: 'https://www.tiktok.com/@milkyzinha_15',
  }, {
    id: '2',
    name: 'angen_luz',
    style: 'Digital Art',
    imageSeed: 'angen_luz',
    date: '2025-11-21',
    description: '"Felis no dia menos afeminado - angen_luz", feito pela luz de mim de um jeito diferente, agradeço de coração mas eu não sou um femboy 😠😂❤️',
    socialUrl: 'https://www.tiktok.com/@angen_luz2',
  }
];

export const getArtistById = (id: string): Artist | undefined => {
  return artists.find(artist => artist.id === id);
};
