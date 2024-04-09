import { PopUpOnScroll } from "../hooks/PopUpOnScroll";
import ambassadorSad from "../../assets/vectors/impact/Ambassador_sad.svg"
import ambassadorHappy from "../../assets/vectors/impact/Ambassador_happy.svg"
import hearts from "../../assets/vectors/impact/Hearts.svg"
import { motion, useInView, useAnimation } from "framer-motion";
import {useEffect, useRef} from "react"

export const Ambassador = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  })

  return (
    <div className="img-container flex-1">
      <PopUpOnScroll>
        <div className="relative" ref={ref}>
          <img
            src={ambassadorSad}
            alt="graphic of un-happy person before amplify Impact branding"
            className="w-full"
          />
          <motion.img
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1},
            } }
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.4, delay: 0.8 }}
            src={ambassadorHappy}
            alt="graphic of un-happy person before amplify Impact branding"
            className="absolute top-0 left-0 w-full"
          />
          <motion.img
            variants={{
              hidden: { opacity: 0, x: "-100%" },
              visible: { opacity: 1, x: 0},
            } }
            initial="hidden"
            animate={controls}
            transition={{
              duration: 0.4,
              delay: 1.4,
              type: "spring",
              bounce: 100,
              stiffness: 200,
              damping: 19,
            }}
            src={hearts}
            alt="graphic of un-happy person before amplify Impact branding"
            className="absolute top-0 left-0 w-full"
          />
        </div>
      </PopUpOnScroll>
    </div>
  );
}
