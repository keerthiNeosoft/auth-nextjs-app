import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

function createWrapperAndAppendToBody(wrapperId: string) {
    if(!document) return null;
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
  }

export default function ReactPortal({ children, wrapperId} : { children: React.ReactNode, wrapperId: string}) {
    const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

    useLayoutEffect(() => {
        let element =document.getElementById(wrapperId);
        let systemCreated = false;

    // if element is not found with wrapperId or wrapperId is not provided, create and append to body
    if (!element) {
        element = createWrapperAndAppendToBody(wrapperId);
      }
      setWrapperElement(element!);
      return () => {
        // delete the programatically created element
        if (systemCreated && element?.parentNode) {
          element.parentNode.removeChild(element);
        }
      }
    }, [wrapperId]);

    // wrapperElement state will be null on the very first render.
  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
}