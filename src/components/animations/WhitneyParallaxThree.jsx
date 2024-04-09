import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import vector from "../../assets/vectors/nice-to-meet-you_head.svg";
import image from "../../assets/images/profileImage-Whitney.svg";
import { PopUpOnScroll } from "../hooks/PopUpOnScroll";

export const WhitneyParallaxThree = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7, once: true } );

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls])
  
  return (
    <div className="h-full">
      <div className="max-w-[500px] font-light text-white text-3xl md:text-7xl z-20 w-full bg-amp-d-blue py-3">
        <PopUpOnScroll>
          <h2>Nice to meet you!</h2>
          <h2>I am Whitney</h2>
        </PopUpOnScroll>
      </div>
      
      <motion.div ref={ref} className="h-full relative overflow-hidden">
        <div className="max-w-[500px] z-0 mx-auto">
          <img
            src={image}
            alt="profile image of Whitney"
            className="object-cover w-full z-10"
          />
        </div>

        <div>
          <AnimatePresence>
            <motion.div className="max-w-[500px] mx-auto">
              <motion.img
                className="absolute z-20 bg-amp-d-blue object-cover w-full"
                variants={{
                  hidden: { top: 0 },
                  visible: { y: "-100%" },
                }}
                initial="hidden"
                animate={controls}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                key={vector}
                src={vector}
                alt="info graphic of smiling woman"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
