import { useEffect, useState } from "react"

const useInterSectionObserver = (ref, options) => {

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            //console.log(entry)
            setIsVisible(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
            return () => {
                if (ref.current) {
                    //console.log(ref.current)
                    observer.unobserve(ref.current);
                }
            }
        }

    }, [ref, options]);

    return isVisible;
}


export default useInterSectionObserver;