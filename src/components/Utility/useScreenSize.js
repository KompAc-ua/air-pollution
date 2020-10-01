import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [winSize, setWinSize] = useState(window.innerWidth);
  const handleResize = () => setWinSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return winSize;
};
