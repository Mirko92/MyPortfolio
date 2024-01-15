import { MutableRefObject, useEffect } from "react";

export function useIsVisible(
  elRef: MutableRefObject<any>, 
  callback: (isVisible: boolean) => void,
) {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry.isIntersecting);
      });
    });

    observer.observe(elRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
}