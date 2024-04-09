import { Ambassador } from "../animations/Ambassador";
import { Mountains } from "../animations/Mountains";
import { Megaphone } from "../animations/Megaphone";
import emailIcon from "../../assets/vectors/emailIcon.svg";
import phoneIcon from "../../assets/vectors/phoneIcon.svg";
import linkedinIcon from "../../assets/vectors/linkedinIcon.svg";
import { TiArrowRight } from "react-icons/ti";
import { Examples2 } from "../content/Examples2";
import { PopUpOnScroll } from "../hooks/PopUpOnScroll";
import { Link } from "react-router-dom";
import { AfterEffectsFireworksV3LoopAutoplay } from "../animations/AfterEffectsFireworksV3LoopAutoplay";

export const Impact = () => {
  return (
    <>
      <section id="impact" className="mt-[4rem] mb-[1rem] layout mx-auto">
        <div className="flex flex-col gap-28 lg:gap-36">
          {/* More motivation */}
          <div className="flex items-end">
            <div className="flex-1 flex flex-col items-start">
              <PopUpOnScroll>
                <p>You gain:</p>
              </PopUpOnScroll>
              <PopUpOnScroll>
                <div className="flex flex-col gap-2">
                  <h3 className="mt-12">
                    more
                    <br />
                    recognition,
                  </h3>
                </div>
              </PopUpOnScroll>
              <PopUpOnScroll>
                <p className="mt-6 text-amp-orange p-small">
                  from your employees, volunteers, <br />
                  clients and your target groups
                </p>
              </PopUpOnScroll>
            </div>

            <Ambassador />
          </div>

          {/* Deeper insights */}
          <div className="flex items-center">
            <Mountains />
            <div className="flex-1 flex flex-col items-center">
              <div className="ml-10">
                <PopUpOnScroll>
                  <div className="flex flex-col gap-2 pb-1">
                    <h3>
                      deeper <br /> insights,
                    </h3>
                  </div>
                </PopUpOnScroll>
                <PopUpOnScroll>
                  <p className="mt-6 text-amp-orange p-small">
                    into your culture, methods, <br /> impact and communication
                  </p>
                </PopUpOnScroll>
              </div>
            </div>
          </div>

          {/* Compelling stories */}
          <div className="you-gain flex items-center">
            <div className="flex-1 flex flex-col items-start">
              <PopUpOnScroll>
                <div className="flex flex-col gap-2">
                  <h3>
                    compelling <br /> stories,
                  </h3>
                </div>
              </PopUpOnScroll>
              <PopUpOnScroll>
                <p className="mt-6 text-amp-orange p-small">
                  to amplify impact, share experiences <br /> and create ambassadors
                </p>
              </PopUpOnScroll>
            </div>
            <Megaphone />
          </div>

          <div>
            {/* and ultimately */}
            <div>
              <PopUpOnScroll>
                <div className="flex flex-col gap-2">
                  <h3 className="pb-1">
                    and ultimately, <br />{" "}
                    <i className="text-amp-orange">
                      more meaningful and deepened impact!
                    </i>{" "}
                  </h3>
                </div>
              </PopUpOnScroll>
              <div className="flex flex-col mt-12">
                <PopUpOnScroll>
                  <p>I tune your people, systems and brands</p>
                </PopUpOnScroll>
                <PopUpOnScroll>
                  <p>to overcome today&apos;s challenges</p>
                </PopUpOnScroll>
                <PopUpOnScroll>
                  <p>and to prepare you for tomorrow.</p>
                </PopUpOnScroll>
                <PopUpOnScroll>
                  <p className="text-amp-orange mt-8">Want to Amplify your Impact today?</p>
                </PopUpOnScroll>
              </div>
            </div>

            {/* Contact us Section */}
            <div className="flex flex-col sm:flex-row justify-between mt-[2rem] whitespace-nowrap gap-4">
              {/* Call me */}
              <div className="flex items-start gap-6">
                <PopUpOnScroll>
                  <div className="call-us bg-amp-orange rounded-full py-2 px-4 sm:py-5 sm:px-7 text-center">
                    <Link
                      title="Click to call me!"
                      onClick={() => window.open("tel:+31621242945", "_blank")}
                    >
                      <p>Call me</p>
                    </Link>
                  </div>
                </PopUpOnScroll>
                <PopUpOnScroll>
                  <div className="bg-amp-orange rounded-full inline-block p-2.5 sm:p-4">
                    <Link
                      title="Click to call me!"
                      onClick={() => window.open("tel:+31621242945", "_blank")}
                    >
                      <img
                        src={phoneIcon}
                        alt="phone icon"
                        className="w-6 sm:w-10"
                      />
                    </Link>
                  </div>
                </PopUpOnScroll>
              </div>

              <div className="flex flex-col gap-6 ">
                {/* Linkedin */}
                <div className="flex items-center gap-6 ps-10 -mr-[1rem] ml-auto">
                  <PopUpOnScroll>
                    <p className="text-amp-orange">Linkedin</p>
                  </PopUpOnScroll>
                  <PopUpOnScroll>
                    <div className="bg-amp-orange rounded-full p-2 mt-2 sm:mt-0 sm:p-4 inline-block">
                      <Link
                        to="https://www.linkedin.com/in/whitneyvanschyndel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Whitney's Linkedin Profile"
                      >
                        <img
                          src={linkedinIcon}
                          alt="linkedin icon"
                          className="w-6 sm:w-10"
                        />
                      </Link>
                    </div>
                  </PopUpOnScroll>
                  <PopUpOnScroll>
                    <div className="arrow-btn bg-amp-orange rounded-l-full lg:rounded-full pe-3 lg:px-[2rem] sm:py-[0.2rem] mt-[0.2rem] sm:mt-0 inline-block">
                      <Link
                        to="https://www.linkedin.com/in/whitneyvanschyndel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Whitney's Linkedin Profile"
                      >
                        <TiArrowRight className="text-[2.5rem] sm:text-[4.2rem]" />
                      </Link>
                    </div>
                  </PopUpOnScroll>
                </div>

                {/* Email */}
                <div className="flex items-center gap-6 ml-auto">
                  <PopUpOnScroll>
                    <p className="text-amp-orange">Email</p>
                  </PopUpOnScroll>
                  <PopUpOnScroll>
                    <div className="bg-amp-orange rounded-full py-2.5 px-6 sm:py-5 sm:px-9">
                      <Link
                        onClick={() =>
                          window.open(
                            "mailto:whitney@amplifyimpact.today?subject=Hello Whitney!&body=Hi,",
                            "_blank"
                          )
                        }
                        title="Send us an Email!"
                      >
                        <img
                          src={emailIcon}
                          alt="linkedin icon"
                          className="w-8 sm:w-12"
                        />
                      </Link>
                    </div>
                  </PopUpOnScroll>
                  <PopUpOnScroll>
                    <div className="arrow-btn bg-amp-orange rounded-full">
                      <Link
                        onClick={() =>
                          window.open(
                            "mailto:whitney@amplifyimpact.today?subject=Hello Whitney!&body=Hi,",
                            "_blank"
                          )
                        }
                        title="Send us an Email!"
                      >
                        <TiArrowRight className="text-[2.5rem] sm:text-[4.2rem] -ml-0.5 mr-0.5" />
                      </Link>
                    </div>
                  </PopUpOnScroll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Examples2 />

        <div className="mr-auto ml-[15vw] my-[12rem] w-[300px] xss:w-[350px] sm:w-[400px] md:w-[500px]">
          <AfterEffectsFireworksV3LoopAutoplay />
        </div>
      </section>
    </>
  );
};
