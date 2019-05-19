export interface Icon {
    changes: string[];
    label: string;
    search: { terms: string[]; },
    styles: string[];
    unicode: string;
    voted: boolean;
}

export interface Icons {
    [id: string]: Icon;
}
