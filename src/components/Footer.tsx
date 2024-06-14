import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import PrivacyButton from "./PrivacyButton";
import TermsButton from "./TermsButton";
const Footer = () => {

  return (
    <div className="bg-purple-600 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-4xl text-white font-bold tracking-tight font-poppins">
          HeyFoodie
        </span>
        <span className="text-white font-bold tracking-tight flex flex-row gap-4 font-poppins text-xl"><PrivacyButton /> </span>
        <span className="text-white font-bold tracking-tight flex flex-row gap-4 font-poppins text-xl"><TermsButton /></span>

        <span className="text-white font-bold tracking-tight flex flex-row gap-4 font-poppins text-xl">
          <span><FaFacebook /></span>
          <span><LuInstagram /></span>

          <span><FaLinkedin /></span>
        </span>

      </div>

    </div>
  );
};

export default Footer;
