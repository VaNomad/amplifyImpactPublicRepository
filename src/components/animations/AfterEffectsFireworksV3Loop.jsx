import lottie from "lottie-web";
import { useRef, useEffect } from "react";
import Fireworks from "../../assets/animations/amplify impact logo anim V3 loop.json";
import { motion } from "framer-motion";

export const AfterEffectsFireworksV3Loop = () => {
  const animationContainer = useRef();
  const animRef = useRef(null);

  useEffect(() => {
    const loadAnimation = () => {
      animRef.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: Fireworks,
        rendererSettings: {
          progressiveLoad: false,
        },
      });

      animRef.current.addEventListener("complete", handleAnimationComplete);
    };

    const handleAnimationComplete = () => {
      animRef.current.goToAndPlay(0);
    };

    const delayTimeout = setTimeout(() => {
      loadAnimation();
      animRef.current.play();
    }, 3000);

    return () => {
      clearTimeout(delayTimeout);
      if (animRef.current) {
        animRef.current.removeEventListener(
          "complete",
          handleAnimationComplete
        );
        animRef.current.destroy();
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3 }}
      
      className="w-[300px] xss:w-[350px] sm:w-[400px] md:w-[500px] lg:w-[650px] absolute top-0 -left-[5rem] xss:-left-[2rem] xss:top-[1rem] sm:left-0 md:left-[2rem]"
      ref={animationContainer}
    >
      <div style={{ width: "100%", height: "100%" }}></div>
    </motion.div>
  );
};
