import { WhitneyParallaxThree } from "../animations/WhitneyParallaxThree";
import { PopUpOnScroll } from "../hooks/PopUpOnScroll";

export const AboutWhitney = () => {
  return (
    <section>
      <div className="mobileLandscape grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start md:gap-6 layout mx-auto">
        <WhitneyParallaxThree />
        <div className="max-w-[500px] grid sm:grid-cols-2 md:max-h-[560px] gap-10 mt-[3rem] md:mt-0">
          <div className="sm:col-span-1 md:col-span-2">
            <PopUpOnScroll>
              <p>
                I serve as the translator between leadership, technical experts, developers, creatives
                and communicators.
              </p>
            </PopUpOnScroll>
          </div>
          <div className="sm:col-span-1 md:col-span-2">
            <PopUpOnScroll>
              <p>
                I am driven by hopeful curiosity, natural tech-savviness and a
                critical eye for quality and design.
              </p>
            </PopUpOnScroll>
          </div>
          <div className="sm:col-span-2">
            <PopUpOnScroll>
              <p>
                I have 12+ years experience in building digital infrastructures, people centered processes, and championing marketing strategies for social impact, particularly in international development and employability.
              </p>
            </PopUpOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
