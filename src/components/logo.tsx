import { Link } from "react-router-dom";
import lg from "../assets/icons/logo.png";
const Logo = () => {
  return (
    <Link to="/" className="w-full flex justify-center">
      <img src={lg} className="w-[80px] h-[55px]" alt="" />
    </Link>
  );
};

export default Logo;
