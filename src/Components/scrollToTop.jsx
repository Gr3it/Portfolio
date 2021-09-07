import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const root = document.getElementById("root");
    root.style.scrollBehavior = "auto";
    root.scrollTo({ top: 0, behavior: "auto" });
    root.style.scrollBehavior = "";
  }, [pathname]);

  return null;
}
