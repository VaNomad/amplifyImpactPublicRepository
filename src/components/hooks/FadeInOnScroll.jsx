import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export const FadeInOnScroll = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  });

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -80},
          visible: { opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={controls}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: "anticipate",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
