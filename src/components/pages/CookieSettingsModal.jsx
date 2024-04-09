import { AnimatePresence, motion } from "framer-motion";
import { MdCookie } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

export const CookieSettingsButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Cookie Settings"
        onClick={() => setIsOpen(true)}
        className="text-xs hover:text-amp-d-blue"
      >
        Cookie Settings
      </button>
      <CookieModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const CookieModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-amp-d-blue/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-amp-d-blue border-2 border-amp-orange text-white p-4 rounded-2xl w-full max-w-lg lg:max-w-3xl xl:max-w-4xl shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="py-3 border-b border-amp-green">
              <MdCookie className="rotate-12 text-[60px] absolute z-0 top-4 left-4 text-amp-orange" />
              <h2 className="font-semibold tracking-wide text-center mb-2">
                Cookie Settings
              </h2>
            </div>
            <div
              id="container"
              className="relative z-10 max-h-[70vh] overflow-y-auto"
              // style={{ maxHeight: "80vh", overflowY: "auto" }}
            >
              <h3 className="my-10">
                This Cookie Policy explains how Amplify Impact uses cookies and
                similar technologies on our website: <br />
                <span className="font-semibold">amplifyimpact.today</span>
              </h3>

              <div className="flex flex-col gap-4 mb-10">
                <h3>How We Use Cookies:</h3>
                <div>
                  <h4>Essential Cookies:</h4>
                  <p>
                    These cookies are necessary for the website to function
                    properly. They enable basic functions like page navigation
                    and access to secure areas of the website. The website
                    cannot function properly without these cookies.
                  </p>
                </div>
                <div>
                  <h4>Analytics Cookies:</h4>
                  <p>
                    We use analytics cookies to track information about how the
                    website is used, such as which pages are visited and how
                    long users spend on each page. This helps us improve the
                    website and provide a better user experience.
                  </p>
                </div>
                <div>
                  <h4>Functionality Cookies:</h4>
                  <p>
                    These cookies enable the website to remember choices you
                    make (such as your language preference) and provide enhanced
                    features. They may also be used to provide services you have
                    requested, such as watching a video or commenting on a blog.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                <h3>Third-Party Cookies:</h3>
                <p>
                  Our website may also use third-party cookies from services
                  such as Google Analytics to track usage statistics and improve
                  our services. These cookies are subject to the privacy
                  policies of the respective third parties.
                </p>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                <h3>Your Choices Regarding Cookies:</h3>
                <p>
                  You can choose to accept or decline cookies through your
                  browser settings. Most web browsers automatically accept
                  cookies, but you can usually modify your browser settings to
                  decline cookies if you prefer. However, this may prevent you
                  from taking full advantage of the website.
                </p>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                <h3>Changes to This Policy:</h3>
                <p>
                  We may update this Cookie Policy from time to time. Any
                  changes will be posted on this page, and the updated policy
                  will be effective immediately upon posting.
                </p>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                <h3>Contact Us:</h3>
                <p>
                  If you have any questions or concerns about this Cookie
                  Policy, please contact us at
                </p>
                <Link
                  className="underline underline-offset-2 decoration-1"
                  onClick={() =>
                    window.open(
                      "mailto:whitney@amplifyimpact.today?subject=Hello Whitney!&body=Hi,",
                      "_blank"
                    )
                  }
                >
                  whitney@amplifyimpact.today
                </Link>
              </div>
            </div>

            <div className="flex gap-2 bg-amp-d-blue pt-3 border-t border-amp-green">
              <button
                aria-label="Go Back"
                onClick={() => setIsOpen(false)}
                className="bg-transparent hover:bg-white/10 text-white font-semibold w-full py-2 rounded-full transition-all duration-200 hover:scale-95"
              >
                Go back
              </button>
              <button
                aria-label="I Understand"
                onClick={() => setIsOpen(false)}
                className="bg-amp-orange border-2 border-amp-orange text-white font-semibold w-full py-2 rounded-full transition-all duration-200 hover:scale-95 hover:border-white hover:bg-transparent"
              >
                Understood!
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
