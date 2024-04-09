import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export const PopUpOnScroll = ({ children }) => {
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
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.2, delay: 0.2, type: "spring", bounce: 100, stiffness: 200, damping: 19 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
