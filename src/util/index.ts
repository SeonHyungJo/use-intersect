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

    const observer = () => {
      if (active === false) {
        active = true;

        setTimeout(() => {
          observedList.forEach((targetEle: Element) => {
            const { top, bottom } = targetEle.getBoundingClientRect()

            if ((top <= window.innerHeight && bottom >= 0) && getComputedStyle(targetEle).display !== "none") {
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
      observe: (setElement: Element) => {
        observedList.push(setElement)
      }
    }
  }
}
