import { useEffect, useRef } from "react";

interface ObserverOptions {
  root: Element | null;
  rootMargin: string;
  thresholds: number;
}

const initalOptions: ObserverOptions = {
  root: null,
  rootMargin: "0px",
  thresholds: 0
};

const useIntersect = (
  onIntersect: Function,
  customOptions?: ObserverOptions
) => {
  const targetRef = useRef<Element>();
  const observerOptions: ObserverOptions = customOptions || initalOptions;
  let observer: IntersectionObserver;

  useEffect(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          onIntersect();
          observer.unobserve(entry.target);
        }
      })
    }, observerOptions);
  });

  useEffect(() => {
    if (targetRef !== null) {
      observer.observe(targetRef.current as Element);
    }
  }, [targetRef]);

  return targetRef;
};

export default useIntersect;
