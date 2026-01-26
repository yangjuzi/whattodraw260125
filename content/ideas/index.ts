/*export interface DrawingSection {
  heading: string;
  items: string[];
  imagePlaceholder?: string;
}

export interface DrawingIdea {
  slug: string;
  title: string;
  description: string;
  sections: DrawingSection[];
}*/
export interface DrawingItem {
  text: string;
  image: string;
  alt?: string;
}

export interface DrawingSection {
  heading: string;
  items: DrawingItem[];
}

export interface DrawingIdea {
  slug: string;
  title: string;
  description: string;
  sections: DrawingSection[];
}

