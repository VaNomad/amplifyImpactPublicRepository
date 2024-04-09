import logo from "../../assets/vectors/logos/amplify_logo_full_white.svg";
import { FaLinkedinIn } from "react-icons/fa";
import tmw from "../../assets/vectors/logos/tmw_logo_dark.svg";
import sjur from "../../assets/vectors/logos/sjurio-logo_multicolor_reverse.svg";
import { TiArrowUp } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { PopUpOnScroll } from "../hooks/PopUpOnScroll";
import { PrivacyPolicyButton } from "../pages/PrivacyPolicyModal";
import { CookieSettingsButton } from "../pages/CookieSettingsModal";

export const Footer = () => {
  const scrollLinkProps = {
    smooth: true,
    duration: 800,
    offset: -80,
    className: "cursor-pointer",
  };

  return (
    <>
      <footer className="bg-amp-orange w-full p-[4rem] relative">
        <div className="max-w-[800px] mx-auto">
          {/* Contact links */}
          <div className="grid md:grid-cols-5 gap-6 text-white mb-[4rem]">
            {/* Logo */}
            <div
              className="w-[6rem] absolute right-[3rem] md:right-0 md:relative"
              style={{ zIndex: 50 }}
            >
              <PopUpOnScroll>
                <ScrollLink
                  to="work"
                  smooth={true}
                  duration={800}
                  offset={-150}
                  className="cursor-pointer"
                >
                  <img
                    src={logo}
                    alt="logo"
                    className="hover:scale-95 transition-all duration-200"
                  />
                </ScrollLink>
              </PopUpOnScroll>
            </div>

            {/* Menu */}
            <PopUpOnScroll>
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold tracking-widest text-sm">Menu</h2>

                {/* Work */}
                <div className="flex">
                  <ScrollLink
                    to="work"
                    smooth={true}
                    duration={800}
                    offset={-150}
                    className="cursor-pointer"
                  >
                    <p className="text-xs hover:text-amp-d-blue">Work</p>
                  </ScrollLink>
                </div>

                {/* About */}
                <div className="flex">
                  <ScrollLink to="about" {...scrollLinkProps}>
                    <p className="text-xs hover:text-amp-d-blue">About</p>
                  </ScrollLink>
                </div>

                {/* Impact */}
                <div className="flex">
                  <ScrollLink to="impact" {...scrollLinkProps}>
                    <p className="text-xs hover:text-amp-d-blue">Impact</p>
                  </ScrollLink>
                </div>

                {/* Lets Talk */}
                <div className="flex">
                  <ScrollLink to="lets-talk" {...scrollLinkProps}>
                    <p className="text-xs hover:text-amp-d-blue">Lets talk</p>
                  </ScrollLink>
                </div>
              </div>
            </PopUpOnScroll>

            {/* Contact */}
            <PopUpOnScroll>
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold tracking-widest text-sm">
                  Contact
                </h2>

                {/* Linkedin */}
                <div className="flex items-center justify-between">
                  <Link
                    to={[
                      "https://www.linkedin.com/in/amplifyimpact/",
                      "_blank",
                      "noopener noreferrer",
                    ]}
                  >
                    <p
                      className="text-xs hover:text-amp-d-blue transition-all duration-200"
                      title="Amplify Impact Linkedin Profile"
                    >
                      Linkedin
                    </p>
                  </Link>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between">
                  <Link
                    className="text-xs hover:text-amp-d-blue transition-all duration-200"
                    onClick={() =>
                      window.open(
                        "mailto:whitney@amplifyimpact.today?subject=Hello Whitney!&body=Hi,",
                        "_blank"
                      )
                    }
                  >
                    Email
                  </Link>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between">
                  <Link
                    title="Click to call us!"
                    className="text-xs hover:text-amp-d-blue transition-all duration-200"
                    onClick={() => window.open("tel:+31621242945", "_blank")}
                  >
                    Phone
                  </Link>
                </div>
              </div>
            </PopUpOnScroll>

            {/* Company */}
            <PopUpOnScroll>
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold tracking-widest text-sm">
                  Company
                </h2>

                {/* Privacy Policy */}
                <div className="flex items-center justify-between">
                  <PrivacyPolicyButton />
                </div>

                {/* Cookie Settings */}
                <div className="flex items-center justify-between">
                  <CookieSettingsButton />
                </div>
              </div>
            </PopUpOnScroll>

            {/* Social Links */}
            <PopUpOnScroll>
              <div className="flex gap-4 md:gap-0 md:justify-between md:mb-[1rem]">
                {/* Linkedin */}
                <div className="flex items-center justify-between">
                  <Link
                    to="https://www.linkedin.com/in/whitneyvanschyndel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center justify-between hover:scale-95 hover:text-amp-d-blue transition-all duration-200">
                      <div className="border-2 rounded-full p-1">
                        <FaLinkedinIn
                          size={24}
                          className="p-[3px] hover:text-amp-d-blue"
                          title="Whitney van Schyndel's Linkedin Profile"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                {/* Facebook */}
                {/* <div className="flex items-center justify-between hover:scale-95 hover:text-amp-d-blue transition-all duration-200">
                  <div className="border-2 rounded-full p-1">
                    <ImFacebook
                      size={24}
                      className="p-[3px] hover:text-amp-d-blue"
                      title="facebook"
                    />
                  </div>
                </div> */}
                {/* Instagram */}
                {/* <div className="flex items-center justify-between hover:scale-95 hover:text-amp-d-blue transition-all duration-200">
                  <div className="border-2 rounded-full p-1">
                    <RiInstagramFill
                      size={24}
                      className="p-[3px] hover:text-amp-d-blue"
                      title="instagram"
                    />
                  </div>
                </div> */}
              </div>
            </PopUpOnScroll>
          </div>

          {/* Copyright */}
          <PopUpOnScroll>
            <div className="flex items-start justify-start gap-3">
              <div className="whitespace-nowrap">
                <p className="text-[10px]">© 2024, All rights reserved.</p>
              </div>

              {/* Too Many Words */}
              <div className="flex items-center gap-1 whitespace-nowrap">
                <p className="text-[10px]">Design</p>
                <Link
                  to="https://toomanywords.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={tmw}
                    alt="Too Many Words logo"
                    className="w-10 hover:scale-105 transition-all duration-200"
                  />
                </Link>
              </div>

              {/* sjur.io */}
              <div className="flex items-center gap-1 whitespace-nowrap">
                <p className="text-[10px]">Build</p>
                <Link
                  to="https://www.sjur.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={sjur}
                    alt="Sjur.io logo"
                    className="w-6 hover:scale-105 transition-all duration-200"
                  />
                </Link>
              </div>
            </div>
          </PopUpOnScroll>

          {/* Back to top arrow */}
          <div className="absolute bottom-[15rem] md:bottom-[4rem] right-[4rem] ">
            <PopUpOnScroll>
              <div className="bg-amp-d-blue rounded-full p-1 inline-block hover:scale-95 transition-all duration-200">
                <div className="gap-2">
                  <ScrollLink
                    to="work"
                    smooth={true}
                    duration={800}
                    offset={-150}
                    className="cursor-pointer"
                  >
                    <TiArrowUp size={50} className="pe-[2px]" />
                  </ScrollLink>
                </div>
              </div>
            </PopUpOnScroll>
          </div>
        </div>
      </footer>
    </>
  );
};
