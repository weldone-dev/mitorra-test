import {MainPage} from "@/views";
import {getProductsMainPage} from "@/shared/api";

export default async function PageMain() {
    const data = await getProductsMainPage();
    return (
        <MainPage products={data.products}/>
    );
}