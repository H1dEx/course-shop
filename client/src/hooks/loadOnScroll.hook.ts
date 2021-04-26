import React, {useEffect} from "react";


export const useScrollLoad = (cb: () => {}) => {
    const eventHandler = (ev: Event): any => {
        if (document.scrollingElement
            && window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
            cb();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', eventHandler);
        return () => {
            window.removeEventListener('scroll', eventHandler)
        }
    }, [])

    return null;
}