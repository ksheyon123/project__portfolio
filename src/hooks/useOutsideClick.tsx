/** @format */

import { useEffect } from "react";

const useOutsideClick = (
  ref: React.MutableRefObject<HTMLElement | undefined>,
  callback: () => void
) => {
  const handleClick = (e: CustomEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick as EventListener);

    return () => {
      document.removeEventListener("mousedown", handleClick as EventListener);
    };
  });
};

export default useOutsideClick;
