export interface Run {
    name: string;
    slug: string;
    latitude: number;
    longitude: number;
    place: string;
    date: string;
    type: string;
    description: string;
    tags: string[];
    category: string;
    coverImage?: string;
};
