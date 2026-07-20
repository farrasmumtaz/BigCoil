export const uploadFolders = {
  company: 'company',

  hero: 'hero',

  collection: 'collection',

  'collection-detail': 'collection-detail',

  product: 'product',

  'product-gallery': 'product-gallery',

  'product-specification': 'product-specification',

  technology: 'technology',

  testimonial: 'testimonial',

  dealer: 'dealer',

  exhibition: 'exhibition',

  'dream-better': 'dream-better',

  'about-company': 'about-company',

  'about-brand': 'about-brand',

  warranty: 'warranty',

  'warranty-item': 'warranty-item',
} as const;

export type UploadFolder = keyof typeof uploadFolders;
