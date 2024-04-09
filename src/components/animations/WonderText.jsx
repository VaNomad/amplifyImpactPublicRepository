import { motion } from "framer-motion";
import { useRef } from "react";

export const WonderText = () => {
  const wonderTextRef = useRef(null);

  return (
    <motion.div
      className="text-5xl sm:text-7xl md:text-9xl uppercase font-bold tracking-wide text-amp-orange"
      initial={ { opacity: 0, scale: 0 } }
      transition={ { duration: 0.3, type: "spring", stiffness: 260, damping: 20 } }
      whileInView={ { opacity: 1, scale: 1, y: -100 } }
      viewport={ { once: true } }
      ref={ wonderTextRef }
    >
      <motion.span>Wonder</motion.span>
    </motion.div>
  );
};
