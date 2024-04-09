import { useState, useRef, useEffect } from "react";
import { TfiClose } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLinks } from "./NavLinks";
import { NavigationType } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (NavigationType === "reload") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    const handleScroll = () => {
      setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handler);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="w-1/2 flex justify-end p-[1rem]">
        <div className="w-full hidden md:flex justify-between">
          <NavLinks />
        </div>
        <div className="md:hidden z-50 transition-all duration-500">
          <motion.button
            aria-label="Menu and close menu"
            onClick={toggleMenu}
            initial={isOpen ? "close" : "menu"}
            animate={isOpen ? "menu" : "close"}
            variants={{
              menu: { rotate: 0 },
              close: { rotate: 180 },
            }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <TfiClose
                size={20}
              />
            ) : (
              <RxHamburgerMenu
                size={25}
              />
            )}
          </motion.button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="fixed top-0 left-0 w-full flex flex-col justify-center items-center p-[1rem] bg-amp-black"
          >
            <NavLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
