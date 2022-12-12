import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

/**
 * Hook to preserve scroll positions on client side navigations.
 * @param ref Scrollable HTMLElement of which scroll you want to maintain on client navigations.
 */
export const usePreserveScroll = (ref?: HTMLElement) => {
    const router = useRouter()
    const scrollPositions = useRef<{ [url: string]: number }>({})

    useEffect(() => {
        const onRouteChangeStart = () => {
            const url = router.asPath // current URL
            scrollPositions.current[url] = ref && ref.scrollTop || window.scrollY
        }

        const onRouteChangeComplete = (url: string) => {
            if (scrollPositions.current[url]) {
                if(ref) {
                    ref.scroll({
                        top: scrollPositions.current[url],
                        behavior: "auto",
                    })
                }else {
                    window.scroll({
                        top: scrollPositions.current[url],
                        behavior: "auto",
                    })
                }
            }
        }

        router.events.on("routeChangeStart", onRouteChangeStart)
        router.events.on("routeChangeComplete", onRouteChangeComplete)

        return () => {
            router.events.off("routeChangeStart", onRouteChangeStart)
            router.events.off("routeChangeComplete", onRouteChangeComplete)
        }
        // 'ref' dependency to update the events when scrollable element becomes available
        // on devices 'width >= 768px '
    }, [router, ref]) 
}