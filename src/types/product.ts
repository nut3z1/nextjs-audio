export interface ProductsParams {
	per_page?: number;
	category?: number;
    include?: number[];
	exclude?: number[];
	
}


export interface CategoriesType {
	id?: number;
	name?: string;
    slug?: string;
}

export enum CategoriesSlug{
    DanKaraoke= 'dan-karaoke'
}
