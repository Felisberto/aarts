import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// O erro estava aqui. A exportação correta é a lista de imagens, não o objeto inteiro.
export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
