import { Link } from "react-router-dom";
import lg from "../assets/icons/logo.png";
const Logo = () => {
  return (
    <Link to="/" className="w-full flex justify-center">
      <img src={lg} className="w-[50px] h-[36px]" alt="" />
    </Link>
  );
};

export default Logo;
