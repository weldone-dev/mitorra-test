import {notFound} from "next/navigation";
import {getAllProduct, getProduct} from "@/shared/api";
import {ProductPage} from "@/views";
interface IProps {
    params: Promise<{ id: string }>;
}

export default async function PageProduct({ params }: IProps) {
    const { id } = await params;
    const data = await getProduct(parseInt(id));
    if (!data.product){
        return notFound();
    }
    return (
       <ProductPage product={data.product}/>
    );
}
export async function generateStaticParams() {
    const data = await getAllProduct();

    return data.products.map((product) => ({
        id: product.id.toString(),
    }));
}