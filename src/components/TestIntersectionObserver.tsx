'use client';

import { useEffect, useRef } from "react";

const MyComponent = () => {
  const elementRef: any = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elementRef.current.classList.add('bg-red-500');
        } else {
          elementRef.current.classList.remove('bg-red-500');
        }
      });
    });

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={elementRef} className="my-component trasition-[background-color] duration-[2s] ease-out">
      Ciao sono io
    </div>
  );
};

export default MyComponent;