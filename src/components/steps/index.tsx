import { useNavigate } from "react-router-dom";
import arrow from "../../assets/icons/arrow-right.svg";
const Steps = ({
  count,
  activeIndex,
}: {
  count: number;
  activeIndex: number;
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between h-[48px]">
      <button onClick={() => navigate(-1)}>
        <img src={arrow} />
      </button>
      <div className="flex gap-2">
        {[...Array(count)].map((_, index) => (
          <span
            className={`w-2 h-2 rounded-full ${
              activeIndex - 1 == index ? "bg-[#0499F6]" : "bg-[#e3e5e5]"
            }`}
          />
        ))}
      </div>
      <span className="text-lg font-medium text-right text-step">
        Step {activeIndex}
      </span>
    </div>
  );
};

export default Steps;
