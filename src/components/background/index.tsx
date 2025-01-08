import bgRight from "../../assets/Background-right.png";
import bgLeft from "../../assets/Background-left.png";

const Background = ({
  type,
  top,
}: {
  type: "right" | "left";
  top?: number;
}) => {
  return (
    <div
      className={`fixed w-[465px] h-[303px] ${type === "left" ? "-left-[100px]" : "-right-[100px]"}`}
      style={{top:`${top}px`}}
    >
      <img src={type === "left" ? bgLeft : bgRight} sizes="100%" />
    </div>
  );
};

export default Background;
