export interface GalleryImage {
  url: string;
  category: 'Match' | 'Tournament' | 'Training' | 'Community';
  caption?: string;
}

export const galleryImages: GalleryImage[] = [
  { url: '/images/hero-bg.jpg', category: 'Match', caption: 'Leads Cup Action' },
  { url: '/images/team-photo.jpg', category: 'Community', caption: 'Squad Goals' },
  // You can add more filenames here as you upload them to public/images/
];
