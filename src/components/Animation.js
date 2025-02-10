import gsap from "gsap";

export const fadeIn = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  );
};

export const slideFromLeft = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
  );
};
