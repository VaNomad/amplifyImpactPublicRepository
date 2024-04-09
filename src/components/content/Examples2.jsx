import monitor from "../../assets/vectors/monitor.svg";
import { PopUpOnScroll } from "../hooks/PopUpOnScroll";
import { FadeInOnScroll } from "../hooks/FadeInOnScroll";
import { examples } from "../../constants/constants";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

export const Examples2 = () => {
  return (
    <section>
      <div className="triangle-back relative max-w-full">
        <div className="triangle-middle absolute"></div>
        <div className="triangle-front absolute border-b-2 border-amp-orange"></div>
      </div>
      <div className="bg-amp-orange pb-1 ">
        <div className="mx-28">
          {/* Header */}
          <PopUpOnScroll>
            <h2>Examples</h2>
          </PopUpOnScroll>

          {/* Monitor */}
          <PopUpOnScroll>
            <div className="mt-[2rem]">
              <img src={monitor} alt="" className="w-[14rem]" />
            </div>
          </PopUpOnScroll>
        </div>

        {/* Examples */}
        <div className="flex">
          <SwipeCarousel />
        </div>
      </div>

      <div
        className="triangle-back relative transform rotate-180"
        style={{ zIndex: 100 }}
      >
        <div className="triangle-middle absolute"></div>
        <div className="triangle-front absolute border-b-2 border-amp-orange"></div>
      </div>
    </section>
  );
};

const DRAG_LIMIT = 25;

const SPRING_EFFECT = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SwipeCarousel = () => {
  const [dragging, setDragging] = useState(false);
  const [exampleIndex, setExampleIndex] = useState(0);
  const dragX = useMotionValue(0);

  const onDragStart = () => {
    setDragging(dragging);
  };

  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();
    if (x <= -DRAG_LIMIT && exampleIndex < examples.length - 1) {
      setExampleIndex((prev) => prev + 1);
    }
    if (x >= DRAG_LIMIT && exampleIndex > 0) {
      setExampleIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${exampleIndex * 100}%` }}
        transition={SPRING_EFFECT}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className="flex items-center cursor-grab active:cursor-grabbing"
      >
        <Example examples={examples} exampleIndex={exampleIndex} />
      </motion.div>
      <Dots exampleIndex={exampleIndex} setExampleIndex={setExampleIndex} />
      <PrevNext exampleIndex={exampleIndex} setExampleIndex={setExampleIndex} />
    </div>
  );
};

const Example = ({ examples, exampleIndex }) => {
  return (
    <>
      {examples.map((example, index) => {
        return (
          <motion.div
            key={index}
            animate={{ scale: exampleIndex === index ? 1 : 0.7 }}
            transition={SPRING_EFFECT}
            className="w-screen shrink-0"
          >
            <div className="layout mt-[2rem] text-amp-d-blue flex gap-4 font-light mx-auto w-screen">
              <div className="flex flex-col items-end text-xs gap-4 overflow-hidden">
                <div className="flex">
                  <div className="w-[130px] flex">
                    <p className="p-small whitespace-nowrap ml-auto">
                      Problem <span className="opacity-50">＿＿</span>
                    </p>
                  </div>
                  <div className="w-full">
                    <p>{example.problem}</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-[130px] flex">
                    <p className="p-small whitespace-nowrap ml-auto">
                      Solution <span className="opacity-50">＿＿</span>
                    </p>
                  </div>
                  <div className="w-full">
                    <p>{example.solution}</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-[130px] flex">
                    <p className="p-small whitespace-nowrap ml-auto">
                      Effect <span className="opacity-50">＿＿</span>
                    </p>
                  </div>
                  <div className="w-full">
                    <p>{example.effect}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ exampleIndex, setExampleIndex }) => {
  return (
    <div className="mt-[2rem] flex w-full justify-center gap-6">
      {examples.map((_, index) => {
        return (
          <FadeInOnScroll key={index}>
            <button
              aria-label="Carousel Page Dots"
              key={index}
              onClick={() => setExampleIndex(index)}
              className={`h-4 w-4 rounded-full transition-all hover:opacity-50 duration-200  ${
                index === exampleIndex ? "bg-white" : "bg-amp-red"
              }`}
            ></button>
          </FadeInOnScroll>
        );
      })}
    </div>
  );
};

const PrevNext = ({ exampleIndex, setExampleIndex }) => {
  const goToPrevious = () => {
    if (exampleIndex > 0) {
      setExampleIndex(exampleIndex - 1);
    }
  };

  const goToNext = () => {
    if (exampleIndex < examples.length - 1) {
      setExampleIndex(exampleIndex + 1);
    }
  };

  return (
    <div className="gap-6 flex justify-end items-center text-black pe-[2rem] mt-[3rem]">
      <FadeInOnScroll>
        <button
          aria-label="Previous"
          onClick={goToPrevious}
          className="bg-white rounded-full text-xs py-4 px-6 md:py-5 md:px-7 hover:scale-95 transition-transform duration-200"
        >
          <p>previous</p>
        </button>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <button
          aria-label="Next"
          onClick={goToNext}
          className="bg-white rounded-full text-xl md:text-2xl w-[3.4rem] h-[3.4rem] xss:w-[3.7rem] xss:h-[3.7rem] md:w-[4.4rem] md:h-[4.4rem] hover:scale-95 transition-transform duration-200"
        >
          &gt;
        </button>
      </FadeInOnScroll>
    </div>
  );
};
