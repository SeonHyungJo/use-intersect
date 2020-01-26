import { useEffect, useRef } from "react";
import { intersectionObserver, CustomObserve } from "./util";

export interface ObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
}

export interface IntersectOptions {
  rootOptions?: ObserverOptions;
  once?: boolean;
}

const initalOptions: ObserverOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0
};

const useIntersect = (
  onIntersect: Function,
  { rootOptions, once = true }: IntersectOptions
) => {
  const targetRef = useRef<any>();
  const observerOptions: ObserverOptions = rootOptions || initalOptions;
  let observer: IntersectionObserver | CustomObserve;

  useEffect(() => {
    observer = intersectionObserver(onIntersect, { observerOptions, once });
  });

  useEffect(() => {
    if (targetRef !== null) {
      observer.observe(targetRef.current as Element);
    }
  }, [targetRef]);

  return targetRef;
};

export default useIntersect;
