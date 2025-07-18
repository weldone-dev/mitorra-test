"use client";
import React, {type FC, useState, unstable_ViewTransition as ViewTransition, useEffect, useLayoutEffect} from "react";
import cn from "clsx";
import {useRouter} from "next/navigation";
import type {IProductsMainPage} from "@/shared/api";
import {useDebouncedCallback, useTrackNavigation} from "@/shared/hooks";

interface IProps {
    products: IProductsMainPage;
}

export const MainPage: FC<IProps> = ({products}) => {
    const router = useRouter();

    const [activeIndex, setActiveIndex] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const handleItemHover = useDebouncedCallback(
        (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation();
            setActiveIndex(index);
        },
        200
    );
    const handlerClick = (index: number) => {
        router.push(`/product/${products[index].id}`);
        setIsLoading(true);
    }
    useLayoutEffect(() => {
        if (typeof window === "undefined") return;
        const prevUrl = sessionStorage.getItem('prevUrl');
        console.log('Предыдущий URL:', prevUrl);

        const match = prevUrl?.match(/\/product\/(\d+)\/?$/);
        if (match) {
            const id = parseInt(match[1], 10);
            console.log({id, match})
            setActiveIndex(id - 1);
        }
    }, []);
    useTrackNavigation();
    return (
        <div className="flex">
            {products.map((product, index) => (
                <div
                    key={index}
                    className={cn(
                        "relative min-h-screen transition-all duration-200 cursor-pointer overflow-x-hidden group",
                        (
                            activeIndex === index
                                ? (
                                    isLoading
                                        ? "z-10 w-screen"
                                        : "w-1/2"
                                )
                                : "w-1/6"
                        ),
                    )}
                    style={{
                        backgroundColor: product.primaryColor,
                        position: (activeIndex === index) && (isLoading)
                            ? "absolute"
                            : "relative"
                    }}
                    onMouseEnter={(e) => handleItemHover(index, e)}
                    onClick={() => handlerClick(index)}
                >
                    <div className="">
                        <div className="overflow-hidden">
                            <ViewTransition name={`product_image-label-${product.id}`}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className={cn(
                                        "relative -left-[20px] w-[100vh] h-full max-h-none max-w-none object-cover transition-all duration-400 ease-in-out scale-70  group-hover:delay-300 group-hover:scale-80",
                                        (activeIndex === index) && isLoading ? "rotate-0" : "rotate-45"
                                    )}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </ViewTransition>
                        </div>
                        <div
                            className="absolute bottom-[20px] left-[100px] text-3xl max-w-1/2 min-w-[300px] text-white">
                            <div
                                className={cn(
                                    "relative delay-200 opacity-0 -right-[200%] group-hover:right-0 group-hover:opacity-100 duration-200 transition-all",
                                    (activeIndex === index) && "!opacity-100 !right-0",
                                    {
                                        "hidden": isLoading
                                    }
                                )}
                            >
                                {product.title}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}