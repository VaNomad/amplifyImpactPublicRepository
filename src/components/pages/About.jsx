import heart from "../../assets/vectors/heart.svg";
import heart2 from "../../assets/vectors/heart2.svg";
import { Raindrops } from "../animations/Raindrops";
import { Wonder } from "../animations/Wonder";
import { AboutWhitney } from "../content/AboutWhitney";
import { PopUpOnScroll } from "../hooks/PopUpOnScroll";
import { AfterEffectsFireworksV3LoopAutoplay } from "../animations/AfterEffectsFireworksV3LoopAutoplay";

export const About = () => {
  return (
    <>
      <section id="about" className="layout mb-[5rem] relative mx-auto">
        {/* Text */}
        <div>
          <PopUpOnScroll>
            <h1 className="normal-case">What sets me apart?</h1>
          </PopUpOnScroll>
          <div className="mt-8 shade">
            <PopUpOnScroll>
              <p>I do not shy away from trouble.</p>
            </PopUpOnScroll>
            <PopUpOnScroll>
              <p>I ask the right questions.</p>
            </PopUpOnScroll>
            <PopUpOnScroll>
              <p>I know the latest trends.</p>
            </PopUpOnScroll>
            <PopUpOnScroll>
              <p>I tackle challenges and come up with efficient solutions.</p>
            </PopUpOnScroll>
            <PopUpOnScroll>
              <p className="mt-8">Above all, I work</p>
            </PopUpOnScroll>
            <PopUpOnScroll>
              <p>with genuine passion.</p>
            </PopUpOnScroll>
          </div>
        </div>

        {/* Heart illustration */}
        <div className="absolute inline-block top-[8rem] left-[3.5rem] md:top-[11rem] md:left-[9rem] z-[-1]">
          <PopUpOnScroll>
            <div>
              <img src={heart} alt="heart illustration" className="w-[15rem]" />
            </div>
          </PopUpOnScroll>
          <div className="absolute bottom-[3.5rem] right-[3rem] fill-white">
            <PopUpOnScroll>
              <img
                src={heart2}
                alt="heart illustration"
                className="w-[4rem] fill-white"
              />
            </PopUpOnScroll>
          </div>
        </div>

        {/* Fireworks illustration */}
        <div className="ml-auto mr-[15vw] mt-[16rem] mb-[8rem] md:mb-[12rem] w-[180px] xss:w-[240px] md:w-[320px] rotate-90">
          <AfterEffectsFireworksV3LoopAutoplay />
        </div>
      </section>

      <AboutWhitney />

      <Raindrops />

      <Wonder />
    </>
  );
};
