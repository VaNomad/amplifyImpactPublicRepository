import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Raindrops = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  const sm = useTransform(scrollYProgress, [0, 1], [80, -80])
  const md = useTransform(scrollYProgress, [0, 1], [150, -150])
  const lg = useTransform(scrollYProgress, [0, 1], [50, -50])
  const xl = useTransform(scrollYProgress, [0, 1], [195, -195])

  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.5, 0.7, 1],
    ["100%", "0%", "100%", "0%", "100%", "0%"]
  );

  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["100%", "0%", "100%", "0%", "100%", "0%"]
  );

  const opacity3 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 0.9, 1],
    ["100%", "0%", "100%", "0%", "100%", "0%"]
  );

  return (
    <div ref={container} className="layout mx-auto mt-[10rem]">
      <div className="flex items-center justify-around relative">
        
        {/* Quote */}
        <blockquote className="absolute top-1/2 whitespace-nowrap flex flex-col items-start z-10 shade">
          <p className="font-merri italic font-semibold xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-end">
            &ldquo;Let’s have another meeting,
          </p>
          <p className="font-merri italic xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-end">
            - I love the fireworks&rdquo;
          </p>
        </blockquote>

        {/* Raindrops */}
        <motion.div
          style={{ y: md }}
          className="flex flex-col gap-3 xss:gap-5 sm:gap-6 md:gap-8 lg:gap-10"
        >
          <motion.div className="raindrop bg-amp-d-green" style={{opacity: opacity1}}></motion.div>
          <motion.div className="raindrop bg-amp-l-green" style={{opacity: opacity2}}></motion.div>
          <motion.div className="raindrop bg-amp-gushy-yellow" style={{opacity: opacity3}}></motion.div>
        </motion.div>
        <motion.div
          style={{ y: sm }}
          className="flex flex-col gap-3 xss:gap-5 sm:gap-6 md:gap-8 lg:gap-10"
        >
          <motion.div className="raindrop bg-amp-d-green" style={{opacity: opacity1}}></motion.div>
          <motion.div className="raindrop bg-amp-l-green" style={{opacity: opacity3}}></motion.div>
          <motion.div className="raindrop bg-amp-gushy-yellow" style={{opacity: opacity2}}></motion.div>
        </motion.div>
        <motion.div
          style={{ y: xl }}
          className="flex flex-col gap-3 xss:gap-5 sm:gap-6 md:gap-8 lg:gap-10"
        >
          <motion.div className="raindrop bg-amp-d-green" style={{opacity: opacity3}}></motion.div>
          <motion.div className="raindrop bg-amp-l-green" style={{opacity: opacity2}}></motion.div>
          <motion.div className="raindrop bg-amp-gushy-yellow" style={{opacity: opacity1}}></motion.div>
        </motion.div>
        <motion.div
          style={{ y: lg }}
          className="flex flex-col gap-3 xss:gap-5 sm:gap-6 md:gap-8 lg:gap-10"
        >
          <motion.div className="raindrop bg-amp-d-green" style={{opacity: opacity2}}></motion.div>
          <motion.div className="raindrop bg-amp-l-green" style={{opacity: opacity3}}></motion.div>
          <motion.div className="raindrop bg-amp-gushy-yellow" style={{opacity: opacity1}}></motion.div>
        </motion.div>
      </div>
    </div>
  );
}
