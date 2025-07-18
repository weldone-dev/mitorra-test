interface IProductAbout {
    title: string;
    description: string;
    color: string;
    lining: string;
    sole: string;
    upper: string;
    product_code: string;
    dims: string;
}

export interface IProduct {
    id: number;
    image: string;
    primaryColor: string;
    gallery: string[];
    title: string;
    subtitle: string;
    description: string;
    price: number;
    about: IProductAbout;
}


export type IProductsMainPage = Pick<
    IProduct,
    "id"
    | "image"
    | "primaryColor"
    | "title"
    | "subtitle"
>[];