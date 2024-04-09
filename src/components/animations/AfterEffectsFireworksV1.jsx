import lottie from "lottie-web";
import { useRef, useEffect } from "react";
import Fireworks from "../../assets/animations/amplify impact logo anim V1(1).json";

export const AfterEffectsFireworksV1 = () => {
  const animationContainer = useRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      rerender: "svg",
      loop: "false",
      autoplay: "true",
      animationData: Fireworks,
      responseType: "json",
    });

    return () => anim.destroy();
  })

  return (
    <div
      className="w-[300px] xss:w-[350px] sm:w-[400px] md:w-[500px] lg:w-[650px] absolute top-0 -left-[5rem] xss:-left-[2rem] xss:top-[1rem] sm:left-0 md:left-[2rem]"
      ref={animationContainer}
    />
  );
};
