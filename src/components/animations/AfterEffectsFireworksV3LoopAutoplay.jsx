import lottie from "lottie-web";
import { useRef, useEffect } from "react";
import Fireworks from "../../assets/animations/amplify impact logo anim V3 loop.json";
import { motion } from "framer-motion";

export const AfterEffectsFireworksV3LoopAutoplay = () => {
  const animationContainer = useRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      rerender: "svg",
      // set loop to false if adding specific frames
      loop: true, 
      autoplay: true,
      animationData: Fireworks,
      responseType: "json",
    });

    // Define specific frames to loop over
    // Start frame variable
    // const startFrame = 0;

    // End frame variable
    // const endFrame = 50;

    // Eventlistener that plays from startFrame to endFrame in a loop
    // anim.addEventListener("complete", () => {
    //   anim.goToAndPlay(startFrame, true);
    // });

    return () => anim.destroy();
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={animationContainer}
    >
      <div style={{ width: "100%", height: "100%" }}></div>
    </motion.div>
  );
};
