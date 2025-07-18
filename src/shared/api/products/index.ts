export type * from "./types";
import {IProductsMainPage} from "@/shared/api";
import {Products} from "./mock";

export const getProductsMainPage = async () => ({
    products: Products.slice(0, 4).map((product)=> ({
        id: product.id,
        image: product.image,
        primaryColor: product.primaryColor,
        title: product.title,
        subtitle: product.subtitle
    })) as IProductsMainPage
});


export const getProduct= async (id: number) => ({
    product: Products.find((product)=>product.id === id)
});