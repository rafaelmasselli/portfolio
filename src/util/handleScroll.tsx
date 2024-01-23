import { useRef, RefObject } from "react";

interface ScrollToSectionHook {
  sectionRef: RefObject<HTMLDivElement>;
  handleScrollingFromScratch: () => void;
}

export const useScrollToSection = (): ScrollToSectionHook => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleScrollingFromScratch = () => {
    const inputPosition = sectionRef.current?.offsetTop;
    window.scrollTo({ top: inputPosition, behavior: "smooth" });
  };

  return { sectionRef, handleScrollingFromScratch };
};
