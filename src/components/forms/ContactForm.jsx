import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { TiArrowRight } from "react-icons/ti";
import { PopUpOnScroll } from "../hooks/PopUpOnScroll";
import { motion, AnimatePresence } from "framer-motion";

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Your name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Your email is required"),
    message: Yup.string().required("Your message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_*******",
        "template_*******",
        "#contactForm",
        "*****************"
      )
      .then(
        function (response) {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
        },
        function (error) {
          console.log("Error sending email", error);
        }
      );
  };

  const handleSubmit = (values, e) => {
    console.log(values);
    sendEmail(e);
    setIsSubmitted(true);
    formik.resetForm();
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="relative w-full flex">
      <form
        id="contactForm"
        onSubmit={formik.handleSubmit}
        className="w-full max-w-[300px] sm:max-w-[560px] py-[10rem] text-xl text-amp-d-blue mx-auto"
      >
        <div className="p-5">
          <PopUpOnScroll>
            <h2 className="text-white mb-[2rem]">So, lets talk?</h2>
          </PopUpOnScroll>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <div className="flex-1 flex flex-col gap-8 sm:gap-0 justify-between">
              {/* Name */}
              <div className="relative">
                <PopUpOnScroll>
                  <input
                    className="inputs"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </PopUpOnScroll>
                <div className="absolute bottom-[-1.2rem] left-0">
                  {formik.errors.name && (
                    <p className="text-amp-orange text-xs pt-1">
                      {formik.errors.name}
                    </p>
                  )}
                </div>
              </div>
              {/* Email */}
              <div className="relative">
                <PopUpOnScroll>
                  <input
                    className="inputs"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </PopUpOnScroll>
                <div className="absolute bottom-[-1.2rem] left-0">
                  {formik.errors.email && (
                    <p className="text-amp-orange text-xs pt-1">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* Message */}
            <div className="flex flex-1 relative">
              <PopUpOnScroll>
                <textarea
                  className="inputs"
                  rows={4}
                  name="message"
                  id="message"
                  placeholder="What you want to light up..."
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
              </PopUpOnScroll>
              <div className="absolute bottom-[-1.2rem] left-0">
                {formik.errors.message && (
                  <p className="text-amp-orange text-xs pt-1">
                    {formik.errors.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Or send an email to whitney@amplifyimpact.today */}
          <PopUpOnScroll>
            <div className="mt-[2rem] text-white flex flex-col justify-start text-sm">
              <p>Or send an email to</p>
              <Link
                to="mailto:whitney@amplifyimpact.today?subject=Hello Whitney!&body=Hi,"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 decoration-1 hover:text-amp-l-blue"
              >
                whitney@amplifyimpact.today
              </Link>
            </div>
          </PopUpOnScroll>
          <div className="text-white mt-[2rem] flex justify-start md:justify-end">
            <PopUpOnScroll>
              <button
                aria-label="Submit"
                type="submit"
                className="bg-amp-orange rounded-full text-center flex items-center px-3 py-1 cursor-pointer hover:scale-95 transition-all duration-200"
              >
                <p className="ps-2 py-2">Send</p>
                <TiArrowRight size={40} />
              </button>
            </PopUpOnScroll>
          </div>
        </div>
        {/* Submit button */}
        <div className="absolute bottom-[2rem] right-[2rem] text-white">
          <div className="absolute bottom-0 right-0">
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ x: 300 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.2,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="relative overflow-hidden border border-amp-gushy-green py-10 px-5 mt-6 shadow-lg shadow-black bg-amp-d-blue"
                >
                  <motion.div
                    initial={{ left: 0 }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 4.7, delay: 0.2, ease: "linear" }}
                    className="absolute overflow-hidden top-0 left-0 h-3 w-full bg-amp-yellow"
                  ></motion.div>
                  <p className="whitespace-nowrap text-white text-xl">
                    Your request was sent!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </form>
    </div>
  );
};
