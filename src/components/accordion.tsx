import { Button } from "antd";
import { Dispatch, ReactNode, SetStateAction } from "react";
import ArrorUp from "../assets/icons/arrow-down-light.svg";

const Accordion = ({
  content,
  showContent,
  setShowContent,
}: {
  content: ReactNode;
  showContent?: boolean;
  setShowContent: Dispatch<SetStateAction<boolean>>;
}) => {
  const hasContent =
    content &&
    typeof content === "object" &&
    "props" in content &&
    content.props.children &&
    Array.isArray(content.props.children) &&
    content.props.children.length > 0;

  return (
    <div className={`flex flex-col`}>
      <Button
        type={"text"}
        className={`border border-white w-full mt-4 `}
        onClick={() => setShowContent(!showContent)}
      >
        <div
          className={`duration-200 ease ${
            showContent ? "rotate-180" : "rotate-0"
          }`}
        >
          <img src={ArrorUp} />
        </div>
      </Button>
      {hasContent ? (
        <div
          className={`content mt-4 transition-opacity duration-500 bg-white rounded-xl text-dark ${
            showContent ? "opacity-100 " : "opacity-0"
          }`}
        >
          <div
            className={`${
              showContent ? "" : "hidden"
            } p-[10px] flex flex-col gap-2 text-sm font-medium leading-[32px] `}
          >
            {content}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Accordion;
