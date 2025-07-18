"use client";
import {type FC, unstable_ViewTransition as ViewTransition, useEffect} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import {type IProduct} from "@/shared/api";
import {useTrackNavigation} from "@/shared/hooks";

interface IProps {
    product: IProduct;
}
const clear = ()=>  {
    window.document.body.style.position = "";
    window.document.body.style.overflowY = "";
}
export const ProductPage: FC<IProps> = ({product}) => {
    const router = useRouter();


    useEffect(() => {
        if (typeof window === "undefined") return;

        window.scrollTo(0, 0);
        window.document.body.style.position = "fixed";
        window.document.body.style.overflowY = "scroll";

        const timeout = setTimeout(() => {
            clear();
        }, 2100);

        return () => {
            clearTimeout(timeout);
            clear();
        };
    }, []);
    const handlerBack = () => {
        router.push("/");
        clear();
    }
    useTrackNavigation();
    return (
        <div className="relative w-full min-h-screen px-[50px] flex gap-[16px] mb-[50px]">
            <div className="sticky h-screen flex -top-[15px] z-20 justify-start w-1/2">
                <button onClick={handlerBack} className={"mt-[10px] border border-white rounded-full h-min text-white py-[6px] px-[12px] cursor-pointer"}>
                    Назад
                </button>
                <div className={""}>
                    <ViewTransition name={`product_image-label-${product.id}`}>
                        <img
                            src={product.image}
                            alt={product.title}
                            width={600}
                            height={400}
                            className="object-contain"
                        />
                    </ViewTransition>
                </div>
            </div>
            <div
                className={"absolute w-full h-full inset-0 z-10 max-h-screen pointer-events-none"}
            >
                <motion.div
                    className={"w-full"}
                    style={{backgroundColor: product.primaryColor}}
                    initial={{height: "100%"}}
                    animate={{height: "50%"}}
                    transition={{duration: 1, ease: "easeOut", delay: 1}}
                >

                </motion.div>
            </div>
            <div className={"w-1/2"}>
                <motion.div
                    className={"relative h-fit text-white z-20"}
                    initial={{top: "170px"}}
                    animate={{top: "120px"}}
                    transition={{duration: 0.5, ease: "linear", delay: 1}}
                >
                    <h1 className={"text-7xl"}>
                        {product.title.split("").map((char, index)=> (
                            <motion.span
                                key={index}
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                transition={{duration: 0.2, delay: 1/Math.max(0.1, product.title.length/index)}}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>
                    <motion.h2
                        className={"mt-[30px] text-3xl"}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.6}}
                    >
                        {product.subtitle}
                    </motion.h2>
                </motion.div>
                <div className="mt-[300px] flex flex-col">
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.6}}
                    >
                        <p className="text-4xl font-semibold">{product.price} руб.</p>
                        <div className={"flex gap-x-[12px]"}>
                            <button className="border border-black  text-black px-6 py-3 mt-4 rounded-lg cursor-pointer hover:scale-105 transition-all duration-200">
                                Добавить в корзину
                            </button>
                            <button className="bg-red-600 text-white px-6 py-3 mt-4 rounded-lg cursor-pointer hover:scale-105 transition-all duration-200">
                                Купить
                            </button>
                        </div>
                    </motion.div>

                    <section className="mt-[100px] bg-[#fee4ba] p-[30px]">
                        <motion.div
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 0.8}}
                        >
                            <h2 className="text-2xl font-bold mb-4">About Me</h2>
                            <p className="mb-4 text-gray-700">{product.about.description}</p>
                            <ul className="text-gray-600 grid gap-x-[26px] gap-y-[16px] grid-rows-2 grid-cols-2">
                                <li>Color: {product.about.color}</li>
                                <li>Lining: {product.about.lining}</li>
                                <li>Sole: {product.about.sole}</li>
                                <li>Upper: {product.about.upper}</li>
                            </ul>
                        </motion.div>
                    </section>
                </div>
            </div>
        </div>
    );
};
