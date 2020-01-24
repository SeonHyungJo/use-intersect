import { useEffect, useRef } from "react";
import { intersectionObserver, CustomObserve } from "./util";

export interface ObserverOptions {
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
  const targetRef = useRef<any>();
  const observerOptions: ObserverOptions = customOptions || initalOptions;
  let observer: IntersectionObserver | CustomObserve;

  useEffect(() => {
    observer = intersectionObserver(onIntersect, observerOptions);
  });

  useEffect(() => {
    if (targetRef !== null) {
      observer.observe(targetRef.current as Element);
    }
  }, [targetRef]);

  return targetRef;
};

export default useIntersect;
