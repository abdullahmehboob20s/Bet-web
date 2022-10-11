import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const MoreLink = ({ to = "/" }) => {
  return (
    <Link to={to} className="flex items-center space-x-1 text-xs uppercase">
      <span className="text-white-5">More</span>{" "}
      <span className="text-[1.2em]">
        <IoIosArrowForward className="fill-white-5" />
      </span>
    </Link>
  );
};

export default MoreLink;
