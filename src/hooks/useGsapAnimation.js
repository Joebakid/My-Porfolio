import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimation = (elementRef, animationFunction) => {
  useLayoutEffect(() => {
    if (!elementRef.current) return;

    console.log("GSAP Hook Initialized:", elementRef.current); // Debugging

    // GSAP context for better cleanup
    const ctx = gsap.context(() => {
      animationFunction(gsap, elementRef.current);
    });

    // ✅ Ensure ScrollTrigger updates when component is remounted
    ScrollTrigger.refresh();

    return () => {
      ctx.revert(); // ✅ Cleanup GSAP animations on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // ✅ Correctly removes all ScrollTriggers
    };
  }, [elementRef, animationFunction]); // Runs when elementRef or animationFunction changes
};

export default useGsapAnimation;
