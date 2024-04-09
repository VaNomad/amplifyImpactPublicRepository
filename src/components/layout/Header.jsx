import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { PopUpDelayed } from "../hooks/PopUpDelayed";

export const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-97.4%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="sticky top-0 z-50 bg-amp-d-blue"
      >
        <motion.div
          style={{ scaleX, transformOrigin: "left" }}
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
          className="h-[2px] bg-amp-green"
        ></motion.div>

        <div className="flex items-center justify-between sm:px-12">
          <PopUpDelayed>
            <Logo />
          </PopUpDelayed>
          <Nav />
        </div>

        <motion.div
          style={{ scaleX, transformOrigin: "left" }}
          variants={{ visible: { opacity: 0 }, hidden: { opacity: 1 } }}
          className="h-[2px] bg-amp-green"
        ></motion.div>
      </motion.header>
      
    </>
  );
};
