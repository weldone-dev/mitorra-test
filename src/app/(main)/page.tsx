import { cookies } from 'next/headers'
import {MainPage} from "@/views";
import {getProductsMainPage} from "@/shared/api";

export default async function PageMain() {
    const data = await getProductsMainPage();
    const cookieStore = await cookies();
    const prevPath = cookieStore.get('previousPath')?.value || "/";

    return (
        <MainPage products={data.products} prevPath={prevPath}/>
    );
}