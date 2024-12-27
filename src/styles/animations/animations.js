export const premiumVariants = {
  // Glissement fluide avec un zoom léger
  default: {
    initial: { opacity: 0, scale: 0.95, x: 50 },
    animate: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 0.9, x: -50 },
    transition: { duration: 1.6, ease: "easeInOut" },
  },

  // Rotation et fondu progressif
  rotate: {
    initial: { opacity: 0, rotate: -10, x: 50 },
    animate: { opacity: 1, rotate: 0, x: 0 },
    exit: { opacity: 0, rotate: 10, x: -50 },
    transition: { duration: 2, ease: "easeOut" },
  },

  // Effet d’apparition avec flou
  blur: {
    initial: { opacity: 0, filter: "blur(10px)", y: 30 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
    exit: { opacity: 0, filter: "blur(10px)", y: -30 },
    transition: { duration: 1.4, ease: "easeInOut" },
  },
};
