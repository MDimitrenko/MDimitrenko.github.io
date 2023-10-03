export interface Product {
    category?: string;
    productionName?: string;
    shortDefinition?: string;
    definition?: string;
    price?: number;
    images?: ImageItem[];
}
export interface ImageItem {
    id: number;
    imageKey: string;
    fileName?: string;
    selectedFile: boolean;
}