import { IconName } from "@fortawesome/fontawesome-svg-core";

export interface Icon {
    id: IconName;
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
