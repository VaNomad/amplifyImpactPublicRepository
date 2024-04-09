import { AnimatePresence, motion } from "framer-motion";
import { FcLock } from "react-icons/fc";
import { useState } from "react";
import { Link } from "react-router-dom";

export const PrivacyPolicyButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Privacy Policy"
        onClick={() => setIsOpen(true)}
        className="text-xs hover:text-amp-d-blue"
      >
        Privacy Policy
      </button>
      <PrivacyModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const PrivacyModal = ({ isOpen, setIsOpen }) => {
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
              <FcLock className="rotate-12 text-[60px] absolute z-0 top-4 left-4" />
              <h2 className="font-semibold tracking-wide text-center mb-2">
                Privacy Policy
              </h2>
            </div>
            <div
              id="container"
              className="relative z-10 max-h-[70vh] overflow-y-auto"
              // style={{ maxHeight: "80vh", overflowY: "auto" }}
            >
              <h3 className="my-10">
                At Amplify Impact, we prioritize the privacy of our users. This
                Privacy Policy outlines the types of personal information we
                collect, how we use it, and your choices regarding your
                information. By using the website: <br />
                <span className="font-semibold">amplifyimpact.today</span>,{" "}
                <br /> you consent to the practices described in this policy.
              </h3>

              <div className="flex flex-col gap-4 mb-10">
                <h3>Information We Collect:</h3>
                <div>
                  <h4>Personal Information:</h4>
                  <p>
                    When you visit our website, we may collect personal
                    information such as your name, email address, and any other
                    information you provide voluntarily through contact forms or
                    other means.
                  </p>
                </div>
                <div>
                  <h4>Automatically Collected Information:</h4>
                  <p>
                    We may also collect certain information automatically when
                    you visit our website, such as your IP address, browser
                    type, referring website, and other usage statistics.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                <h3>How We Use Your Information:</h3>
                <h4>
                  We may use the information we collect for the following
                  purposes:
                </h4>
                <p>● To communicate with you and respond to your inquiries.</p>
                <p>● To personalize your experience on our website.</p>
                <p>● To improve our website and services.</p>
                <p>● To analyze trends and usage statistics.</p>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                <h3>Cookies:</h3>
                <p>
                  Our website may use cookies to enhance your experience.
                  Cookies are small files stored on your device that enable
                  certain functionality and help us analyze usage patterns. By
                  using our website, you consent to the use of cookies in
                  accordance with this policy.
                </p>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                <h3>Third-Party Links:</h3>
                <p>
                  Our website may contain links to third-party websites or
                  services. We are not responsible for the privacy practices or
                  content of these third parties. We encourage you to review the
                  privacy policies of any third-party websites you visit.
                </p>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                <h3>Data Security:</h3>
                <p>
                  We take reasonable measures to protect the security of your
                  personal information. However, no method of transmission over
                  the internet or electronic storage is 100% secure. Therefore,
                  we cannot guarantee absolute security.
                </p>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                <h3>Changes to This Policy:</h3>
                <p>
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page, and the updated policy
                  will be effective immediately upon posting.
                </p>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                <h3>Contact Us:</h3>
                <p>
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us at:
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
