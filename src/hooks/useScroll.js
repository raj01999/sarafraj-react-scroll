import { useEffect, useState } from "react";

export default function useScroll() {
  // holding possition of scrolling
  const [poss, setPoss] = useState(null);

  // handler for scrolling {possision updater}
  const handleScroll = () => {
    setPoss(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return poss;
}
