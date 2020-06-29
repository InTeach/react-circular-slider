import { useEffect, useRef } from "react";
import window from "global";

const useEventListener = (eventName, handler, eventRef) => {
  const savedHandler = useRef(null);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event);

      (eventRef || window).addEventListener(eventName, eventListener, {
        passive: false,
      });
      return () => {
        (eventRef || window).removeEventListener(eventName, eventListener);
      };
    }
  }, [eventName]);
};

export default useEventListener;
