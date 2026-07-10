export const uploadFolders = {
  company: 'company',

  hero: 'hero',

  collection: 'collection',

  product: 'product',

  'product-gallery': 'product-gallery',

  'product-specification': 'product-specification',

  technology: 'technology',

  testimonial: 'testimonial',

  dealer: 'dealer',

  'dream-better': 'dream-better',

  'about-company': 'about-company',

  'about-brand': 'about-brand',
} as const;

export type UploadFolder = keyof typeof uploadFolders;
