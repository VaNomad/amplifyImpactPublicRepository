import { PopUpOnScroll } from "../hooks/PopUpOnScroll";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import megaphone from "../../assets/vectors/impact/Megaphone.svg";
import bubble from "../../assets/vectors/impact/Animated_story_bubble.svg";
import star1 from "../../assets/vectors/impact/Animated_story_star1.svg";
import star2 from "../../assets/vectors/impact/Animated_story_star2.svg";
import star3 from "../../assets/vectors/impact/Animated_story_star3.svg";
import star4 from "../../assets/vectors/impact/Animated_story_star4.svg";

export const Megaphone = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8, once: true });
  const controls = useAnimation();

  const starContainerVariants = {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, when: "beforeChildren", staggerChildren: 0.25 },
    },
  };

  const starVariants = {
    initial: { x: "-100%", opacity: 0, scale: 0 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 13,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="img-container flex-1">
      <PopUpOnScroll>
        <div className="relative" ref={ref}>
          {/* Megaphone */}
          <motion.img
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { x: "-100%", opacity: 0, rotate: -45, scale: 0 },
              visible: {
                x: [-120, 0, 0, 0],
                rotate: [-45, 0, 0, 360],
                opacity: [0, 1, 1, 1],
                scale: [1, 1, 1, 0],
                transition: {
                  duration: 1.5,
                  delay: 0.22,
                  times: [0, 0.2, 0.6, 1],
                  ease: "easeInOut",
                },
              },
            }}
            src={megaphone}
            alt="graphic of computer monitor"
            className="w-full"
          />

          {/* Bubble */}
          <motion.img
            variants={{
              hidden: { opacity: 0, x: "-100%" },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 0.2,
              delay: 1.8,
              type: "spring",
              bounce: 400,
              stiffness: 500,
              damping: 19,
            }}
            src={bubble}
            alt="graphic of un-happy person before amplify Impact branding"
            className="absolute top-0 left-0 w-full"
          />

          {/* Stars */}
          <motion.div
            variants={starContainerVariants}
            initial="initial"
            animate={controls}
          >
            {[star1, star2, star3, star4].map((star, i) => (
              <motion.img
                key={i}
                variants={starVariants}
                src={star}
                alt={`graphic of star inside speaking bubble ${i}`}
                className="absolute top-0"
              />
            ))}
          </motion.div>
        </div>
      </PopUpOnScroll>
    </div>
  );
};
