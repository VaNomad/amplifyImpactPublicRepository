import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const NavLinks = () => {
  const links = [
    { id: "work", text: "Work" },
    { id: "impact", text: "Impact" },
    { id: "about", text: "About" },
    { id: "lets-talk", text: "Let's Talk" },
  ];

  return (
    <>
      {links.map((link, index) => (
        <motion.div
          key={index}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2 + index * 0.2,
            duration: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {link.id ? (
            <ScrollLink
              to={link.id}
              smooth={true}
              duration={800}
              offset={link.id === "work" ? -150 : -80}
              className="hover:italic hover:tracking-widest md:hover:tracking-normal hover:text-amp-orange transition-all duration-200 ease-in-out"
            >
              {link.text}
            </ScrollLink>
          ) : (
            <NavLink
              to={`/${link.id}`}
              className="hover:italic hover:tracking-widest md:hover:tracking-normal hover:text-amp-orange transition-all duration-200 ease-in-out"
            >
              {link.text}
            </NavLink>
          )}
        </motion.div>
      ))}
    </>
  );
};
