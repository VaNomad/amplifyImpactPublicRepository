import ambassador from "../../assets/vectors/happyAmbassador.svg";
import { useRef } from "react";
import { WonderText } from "./WonderText";
import { PopUpOnScroll } from "../hooks/PopUpOnScroll";

export const Wonder = () => {
  const wonderRef = useRef(null);

  return (
    <div className="bg-gradient-to-b from-amp-d-blue to-amp-orange mt-[20rem] md:mt-[30rem]">
      <div className="z-50 px-[1rem] layoutSun mx-auto">
        <div
          className="flex flex-col gap-10 text-9xl uppercase font-bold tracking-wide text-amp-orange"
          ref={wonderRef}
        >
          <WonderText />
          <WonderText />
          <WonderText />
          <WonderText />
          <WonderText />
        </div>
        <blockquote className="md:mt-[7rem] flex justify-center">
          <div className="flex flex-col">
            <PopUpOnScroll>
              <div className="flex flex-col gap-2 max-w-[235px] xss:max-w-[360px] sm:max-w-[520px] md:max-w-[640px]">
                <p className="wonderQuote">
                  &ldquo;If you want it easy, don&apos;t work with Whitney. You
                  work with Whitney if you want to get things done efficiently
                  and be better&rdquo;
                </p>
              </div>
            </PopUpOnScroll>
          </div>
        </blockquote>
        <PopUpOnScroll>
          <div className="relative grid place-items-center w-xl pb-[18rem] md:mt-[20rem]">
            <div className="absolute bottom-0 right-[5rem] mt-[26rem] w-[14rem] h-[7rem] md:w-[32rem] md:h-[16rem] rounded-tl-full rounded-tr-full bg-amp-yellow"></div>
            <img
              src={ambassador}
              alt="happy ambassador"
              className="max-w-[300px] md:max-w-[600px] absolute bottom-0 right-0 -mb-3"
            />
          </div>
        </PopUpOnScroll>
      </div>
    </div>
  );
};
