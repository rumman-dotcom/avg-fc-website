export interface GalleryImage {
  url: string;
  category: 'Match' | 'Tournament' | 'Training' | 'Community';
  caption?: string;
}

export const galleryImages: GalleryImage[] = [
  { url: '/images/hero-bg.jpg', category: 'Match', caption: 'Leads Cup Action' },
  { url: '/images/team-photo.jpg', category: 'Community', caption: 'The Squad' },
  { url: '/images/leads-1.jpg', category: 'Tournament', caption: 'Leads Cup Highlights' },
  { url: '/images/leads-2.jpg', category: 'Match', caption: 'Match Day Energy' },
  { url: '/images/leads-3.jpg', category: 'Tournament', caption: 'AV Gardens in Action' },
  { url: '/images/leads-4.jpg', category: 'Match', caption: 'Lahore Football' },
  { url: '/images/leads-5.jpg', category: 'Tournament', caption: 'Competition Focus' },
  { url: '/images/juniors-1.jpg', category: 'Community', caption: 'Champions Ceremony' },
  { url: '/images/juniors-2.jpg', category: 'Tournament', caption: 'Juniors Season IV' },
  { url: '/images/juniors-3.jpg', category: 'Community', caption: 'Youth Development' },
  { url: '/images/juniors-4.jpg', category: 'Tournament', caption: 'Future Stars' },
];
