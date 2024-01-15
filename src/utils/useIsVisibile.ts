import { useEffect } from "react";

export function useIsVisible( 
  selector : string,
  action   : (item: IntersectionObserverEntry) => void
) {

  useEffect(() => {
    // Create new intersection observer, 
    // root will be se to null to use the viewport
    const viewportObserver = new IntersectionObserver(
      (entries, _obs) => {
        for (const e of entries) {
          action(e);
        }
      }, 
      { 
        root: null, 
        threshold: 0.25 
      }
    );
    
    // Use the css selector to find the target elements
    const mainSections = document.querySelectorAll(selector);
    
    for (const section of Array.from(mainSections)) {
      viewportObserver.observe(section);
    }

    // Disconnect the viewport observer when the component is unmounted
    return () => {
      viewportObserver.disconnect();
    };
  }, []);
}