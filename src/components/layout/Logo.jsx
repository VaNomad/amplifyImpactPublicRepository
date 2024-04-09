import logo from "../../assets/vectors/logos/amplify_logo_full_white.svg";
import { Link as ScrollLink } from "react-scroll";

export const Logo = () => {
  return (
    <ScrollLink to="work" smooth={true} duration={500}>
      <img
        src={logo}
        alt="logo"
        className="w-[5rem] m-2 lg:hover:scale-95 transition-all duration-200 lg:cursor-pointer"
      />
    </ScrollLink>
  );
};
