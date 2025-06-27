import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll(".reveal");

      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealElements);
    window.addEventListener("load", revealElements);

    return () => {
      window.removeEventListener("scroll", revealElements);
      window.removeEventListener("load", revealElements);
    };
  }, []);
}

export default useScrollReveal;
