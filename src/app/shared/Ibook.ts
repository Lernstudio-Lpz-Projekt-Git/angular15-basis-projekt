export interface IBook {
    isbn: string;
    title: string;
    authors: string[];
    published?: string;
    subtitle?: string;
    thumbnailUrl?: string;
    description?: string;
  }