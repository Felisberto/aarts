
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
    style: 'Physical Art',
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
  },
  {
    id: '3',
    name: '☆~♡esther♡~☆',
    style: 'Physical Art',
    imageSeed: 'esther',
    date: '2025-12-08',
    description: 'Esther mandou essa fofura para mim, então, muito obrigado pelo carinho esther ❤️',
    socialUrl: 'https://www.tiktok.com/@esther28231',
  },
  {
    id: '4',
    name: 'angen_luz',
    style: 'Digital Art',
    imageSeed: 'angen_luz_2',
    date: '2025-12-15',
    quote: 'felis após receber fanart de seguidores 🩷',
    description: 'Mais uma arte feita pela luz, imparável, muito obrigado de coração, é incrível receber essa obra prima ❤️🥺',
    socialUrl: 'https://www.tiktok.com/@angen_luz2',
  },
  {
    id: '5',
    name: '_xerlok_',
    style: 'Digital Art',
    imageSeed: 'xerlok',
    date: '2025-12-15',
    quote: 'Nos olhos dele, a borboleta azul vira silêncio em forma de esperança.',
    description: 'Uma arte incrível feita pelo grande xerlok, meu mano, muito obrigado, não tenho palavras para agradeçer por essa obra ❤️',
    socialUrl: '',
  }
];

export const getArtistById = (id: string): Artist | undefined => {
  return artists.find(artist => artist.id === id);
};
