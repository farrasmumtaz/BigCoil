export const uploadFolders = {
  company: 'company',

  hero: 'hero',

  collection: 'collection',

  'collection-detail': 'collection-detail',

  product: 'product',

  'product-gallery': 'product-gallery',

  'product-specification': 'product-specification',

  'product-description': 'product-description',

  'product-technology': 'product-technology',

  gallery: 'gallery',

  video: 'video',

  technology: 'technology',

  testimonial: 'testimonial',

  dealer: 'dealer',

  exhibition: 'exhibition',

  'dream-better': 'dream-better',

  'dream-better-section': 'dream-better-section',

  'about-company': 'about-company',

  'about-brand': 'about-brand',

  warranty: 'warranty',

  'warranty-item': 'warranty-item',

  article: 'article',
} as const;

export type UploadFolder = keyof typeof uploadFolders;

export function isUploadFolder(folder: string): folder is UploadFolder {
  return folder in uploadFolders;
}
