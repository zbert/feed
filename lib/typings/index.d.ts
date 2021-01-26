export interface Item {
    title: string;
    id?: string;
    link: string;
    date: Date;
    description?: string;
    content?: string;
    category?: Category[];
    guid?: string;
    image?: string | Enclosure;
    audio?: string | Enclosure;
    video?: string | Enclosure;
    enclosure?: Enclosure;
    author?: Author[];
    contributor?: Author[];
    published?: Date;
    copyright?: string;
    extensions?: Extension[];
}
export interface Enclosure {
    url: string;
    type?: string;
    length?: number;
    title?: string;
    duration?: number;
}
export interface Author {
    name?: string;
    email?: string;
    link?: string;
}
export interface Category {
    name?: string;
    domain?: string;
    scheme?: string;
    term?: string;
}
export interface FeedOptions {
    id: string;
    title: string;
    updated?: Date;
    generator?: string;
    language?: string;
    ttl?: number;
    timezone?: Timezone;
    feed?: string;
    feedLinks?: any;
    hub?: string;
    docs?: string;
    author?: Author;
    link?: string;
    description?: string;
    image?: string;
    favicon?: string;
    copyright: string;
}
export interface Extension {
    name: string;
    objects: any;
}
export declare type Timezone = 'GMT' | 'UTC' | 'ECT' | 'EET' | 'ART' | 'EAT' | 'MET' | 'NET' | 'PLT' | 'IST' | 'BST' | 'VST' | 'CTT' | 'JST' | 'ACT' | 'AET' | 'SST' | 'NST' | 'MIT' | 'HST' | 'AST' | 'PST' | 'PNT' | 'MST' | 'CST' | 'EST' | 'IET' | 'PRT' | 'CNT' | 'AGT' | 'BET' | 'CA';
