import { ObserverOptions } from "../index"

export interface CustomObserve {
  observe: Function
}

export const intersectionObserver = (onIntersect: Function, observerOptions: ObserverOptions) => {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          onIntersect(entry.target)
          observer.unobserve(entry.target);
        }
      })
    }, observerOptions)

    return observer
  } else {
    let active = false;
    let observedList: Array<Element> = []
    const { threshold = 0 } = observerOptions

    const observer = () => {
      if (active === false) {
        active = true;

        setTimeout(() => {
          observedList.forEach((targetEle: Element) => {
            const { top, bottom } = targetEle.getBoundingClientRect()
            const downThreshold = top + (bottom - top) * threshold
            const upThreshold = top + (bottom - top) * (1 - threshold)

            const thresholdChecking =
              (top >= 0 && downThreshold <= window.innerHeight && bottom >= 0)
              || (upThreshold >= 0 && bottom <= window.innerHeight)

            if (thresholdChecking && getComputedStyle(targetEle).display !== "none") {
              onIntersect(targetEle)

              observedList = observedList.filter((diffObserve) => {
                return diffObserve !== targetEle;
              });

              if (observedList.length === 0) {
                document.removeEventListener("scroll", observer);
                window.removeEventListener("resize", observer);
                window.removeEventListener("orientationchange", observer);
              }
            }
          });
          active = false;
        }, 200);
      }
    };

    document.addEventListener("scroll", observer);
    window.addEventListener("resize", observer);
    window.addEventListener("orientationchange", observer);

    return {
      observe: (setElement: Element): void => {
        observedList.push(setElement)
      }
    }
  }
}
