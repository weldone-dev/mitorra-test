"use client";

import {useEffect} from 'react';
import {usePathname, useSearchParams} from 'next/navigation';

export function useTrackNavigation() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const currentUrl = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
        sessionStorage.setItem('prevUrl', currentUrl);
    }, [pathname, searchParams]);
}