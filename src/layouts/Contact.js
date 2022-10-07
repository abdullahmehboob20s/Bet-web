import SocialIcon from "components/SocialIcon";
import { RiLiveFill } from "react-icons/ri";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div className="container">
        <div className="space-y-3 pb-3 border-b-[1px] border-white-2">
          <button className="w-full h-9 px-5 rounded bg-oc-1 transition-all duration-[.24s] flex items-center justify-center space-x-3 hover:bg-oc-1-hover text-sm font-medium uppercase">
            <RiLiveFill className="text-[1.2em]" />
            <span className="mt-[.2em]">Contact support</span>
          </button>

          <div className="flex items-center justify-between">
            <div className="w-6 h-6 rounded-full border-1px border-white-7 text-10px flex items-center justify-center text-white-7">
              18+
            </div>

            <div className="flex items-center space-x-2">
              <SocialIcon className="bg-[#d6249f] bg-instagram">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon className="bg-[#4ea0ec] text-sm">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon className="bg-[#4867aa] text-sm">
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon className="bg-[red]">
                <FaYoutube />
              </SocialIcon>
              <SocialIcon className="bg-[#1e96d3]">
                <FaTelegramPlane />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
