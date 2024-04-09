import { PopUpOnScroll } from "../hooks/PopUpOnScroll";
import monitor from "../../assets/vectors/monitor2.svg";
import mountains from "../../assets/vectors/impact/Mountains.svg"
import numbers from "../../assets/vectors/impact/mountains_numbers2.svg"
import mountainsLine from "../../assets/vectors/impact/mountains_line.svg"
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const Mountains = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  });

  return (
    <div className="img-container flex-1">
      <PopUpOnScroll>
        <div className="relative overflow-hidden" ref={ref}>
          <motion.img
            variants={{
              hidden: { opacity: 1, y: 0, rotate: 0 },
              visible: { opacity: 0, y: "100%", rotateX: [0, 90, 90] },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1, delay: 1, times: [0, 0.5, 1] }}
            src={monitor}
            alt="graphic of computer monitor"
            className="w-full"
          />

          <motion.img
            variants={{
              hidden: { opacity: 0, y: "100%" },
              visible: {
                opacity: [0, 1, 1, 1, 1],
                y: ["100%", "18%", "18%", "30%", "0%"],
                type: "spring",
                bounce: 100,
                stiffness: 200,
                damping: 19,
              },
            }}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 1,
              delay: 1.5,
              times: [0, 0.2, 0.7, 0.8, 1],
            }}
            src={mountains}
            alt="graphic of un-happy person before amplify Impact branding"
            className="absolute top-0 left-0 w-full"
          />

          <div className="absolute bottom-0 left-0 w-full bg-amp-d-blue h-5"></div>

          <motion.img
            variants={{
              hidden: { opacity: 0, y: "-100%" },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 0.4,
              delay: 2.5,
              type: "spring",
              bounce: 100,
              stiffness: 200,
              damping: 19,
            }}
            src={numbers}
            alt="graphic of un-happy person before amplify Impact branding"
            className="absolute top-0"
          />

          <motion.img
            variants={{
              hidden: { opacity: 0, x: "-100%" },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 0.4,
              delay: 3,
              type: "spring",
              bounce: 100,
              stiffness: 200,
              damping: 19,
            }}
            src={mountainsLine}
            alt="graphic of un-happy person before amplify Impact branding"
            className="absolute top-0 -z-10"
          />
        </div>
      </PopUpOnScroll>
    </div>
  );
};
