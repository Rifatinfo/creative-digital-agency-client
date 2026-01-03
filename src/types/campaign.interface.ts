export interface Campaign {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  thumbnail?: string;       // optional URL
  videoUrl: string;         // must be a valid URL
  views: string;            // format like "89K" or "1M"
  dateLabel: string;
  duration: string;         // format mm:ss
  brand: string;
  featured?: boolean;       // optional
}
