export interface Tags {
    [id: string]: Tag;
}

export interface Tag {
    description: string;
    icons: string[];
}

export interface IconTags {
    [icon: string]: string[];
}