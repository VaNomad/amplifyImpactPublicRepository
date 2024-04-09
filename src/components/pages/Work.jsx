import { PopUpOnScroll } from "../hooks/PopUpOnScroll";
import { AfterEffectsFireworksV1 } from "../animations/AfterEffectsFireworksV1";
import { AfterEffectsFireworksV3Loop } from "../animations/AfterEffectsFireworksV3Loop";
import { Link } from "react-router-dom";
import { AfterEffectsFireworksV3LoopAutoplay } from "../animations/AfterEffectsFireworksV3LoopAutoplay";

export const Work = () => {
  return (
    <section
      id="work"
      className="mt-[2rem] relative layout mx-auto overflow-hidden"
    >
      <AfterEffectsFireworksV1 />
      <AfterEffectsFireworksV3Loop />

      <div className="flex flex-col sm:mx-2 justify-end">
        {/* From Worry To Wonder */}
        <PopUpOnScroll>
          <div className="shade flex w-full flex-col items-end xss:mt-[1.7rem] md:mt-[2rem] lg:mt-0">
            <h1>
              From Worry <br />⸺ To <span className="font-bold wh">Wonder</span>
            </h1>
            <p>Sparking meaningful innovations</p>
          </div>
        </PopUpOnScroll>

        {/* I never knew I was going to need this */}
        <PopUpOnScroll>
          <blockquote className="whitespace-nowrap shade mt-[6rem] sm:mt-[7rem] md:mt-[8rem] lg:mt-[11rem]">
            <p className="quote text-end">
              &ldquo;I never knew I was going to need this.
            </p>
            <p className="quote text-end">
              You are always 10 steps ahead&rdquo;
            </p>
          </blockquote>
        </PopUpOnScroll>

        {/* What I do: */}
        <PopUpOnScroll>
          <div className="mt-[6rem] sm:mt-[7rem] md:mt-[8rem] lg:mt-[13rem]">
            <h2>What I do:</h2>
            <p>
              I lift internal barriers, by coming up with new ways of
              collaborating, to strengthen your external positioning.{" "}
            </p>
            <div className="mt-[2rem] lg:mt-[3rem] sm:flex justify-between">
              <div className="pb-[1rem]">
                <p>
                  Impact
                  <br /> & Marketing
                </p>
              </div>
              <div className="pb-[1rem]">
                <p>
                  Digital Strategies
                  <br /> & Systems
                </p>
              </div>
              <div className="pb-[1rem]">
                <p>
                  Change <br />
                  Management
                </p>
              </div>
            </div>
          </div>
        </PopUpOnScroll>

        <PopUpOnScroll>
          {/* And more! (see linkedin) */}
          <div className="flex sm:justify-center items-center text-xs lg:text-2xl font-light mt-[0.5rem] md:mt-[1.5rem] lg:mt-[3rem]">
            <p>And more! &nbsp;</p>
            <Link
              to="https://www.linkedin.com/in/whitneyvanschyndel/"
              target="_blank"
              rel="noopener noreferrer"
              title="Amplify Impact Linkedin Profile"
              className="hover:text-amp-red"
            >
              <div className="center hover:text-amp-l-blue transition-all duration-200 ">
                <p>&#40;</p>
                <p className="underline cursor-default lg:cursor-pointer">
                  See LinkedIn
                </p>
                <p>&#41;</p>
              </div>
            </Link>
          </div>
        </PopUpOnScroll>

        <div className="my-[3rem] sm:my-[5rem] md:my-[6rem] lg:my-[8rem] rotate-90 mr-auto ml-[20vw] sm:mx-auto w-[50px] xss:w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px]">
          <AfterEffectsFireworksV3LoopAutoplay />
        </div>

        <div>
          {/* When your people */}
          <PopUpOnScroll>
            <div>
              <p>
                When your people, systems or brands are not performing to their
                potential - Amplify Impact has your back.
              </p>
            </div>
          </PopUpOnScroll>

          {/* Impact Summary */}
          <div className="flex flex-col gap-3 md:gap-1 mt-8">
            <PopUpOnScroll>
              <div className="flex items-center">
                <div className="w-[3.5rem]">
                  <div className="w-6 h-3 bg-amp-orange rounded-full">
                    <div className="w-3 h-3 bg-amp-yellow rounded-full"></div>
                  </div>
                </div>
                <p className="flex-1">
                  I critically analyze your systems, people and brands.
                </p>
              </div>
            </PopUpOnScroll>
            <PopUpOnScroll>
              <div className="flex items-center">
                <div className="w-[3.5rem]">
                  <div className="w-6 h-3 bg-amp-orange rounded-full flex justify-center">
                    <div className="w-3 h-3 bg-amp-yellow rounded-full"></div>
                  </div>
                </div>
                <p className="flex-1">
                  I bring resolute insights and add bright innovations.
                </p>
              </div>
            </PopUpOnScroll>
            <PopUpOnScroll>
              <div className="flex items-center">
                <div className="w-[3.5rem]">
                  <div className="w-6 h-3 bg-amp-orange rounded-full flex justify-end">
                    <div className="w-3 h-3 bg-amp-yellow rounded-full"></div>
                  </div>
                </div>
                <p className="flex-1">I improve your internal ecosystem.</p>
              </div>
            </PopUpOnScroll>
            <PopUpOnScroll>
              <div className="flex items-center">
                <div className="flex w-[3.5rem] gap-1">
                  <div className="w-6 h-3 bg-amp-orange rounded-full"></div>
                  <div className="w-3 h-3 bg-amp-yellow rounded-full"></div>
                </div>
                <p className="flex-1">
                  To strengthen your external positioning.
                </p>
              </div>
            </PopUpOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
