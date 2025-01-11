import { Button } from "antd";
import { Children, Dispatch, ReactNode, SetStateAction } from "react";
import ArrorUp from "../assets/icons/arrow-down-light.svg";
import { ICardContent } from "../types/data.models";

const Accordion = ({
  content,
  showContent,
  setShowContent,
  reverse,
}: {
  content: ReactNode | ICardContent[];
  showContent?: boolean;
  setShowContent: Dispatch<SetStateAction<boolean>>;
  reverse?: boolean;
}) => {
  const hasContent = content && Children.count(content) > 0;
  if(Array.isArray(content)){
    return (
      <div className={`flex flex-col`}>
      <Button
        type={"text"}
        className={`border border-white w-full mt-4 `}
        onClick={(prev) => setShowContent(!prev)}
      >
        <div
          className={`duration-200 ease ${
            showContent ? "rotate-0" : "rotate-180"
          }`}
        >
          <img src={ArrorUp} />
        </div>
      </Button>
      {content.length && (
        <div
          className={`content mt-4 text-dark transition-opacity duration-500 ${
            reverse ? "" : " bg-white rounded-xl"
          }    ${showContent ? "opacity-100 " : "opacity-0"}`}
        >
          <div
            className={`${
              showContent ? "" : "hidden"
            } p-[10px] flex flex-col gap-2 text-sm font-medium leading-[32px] `}
          >
            
          </div>
        </div>
      )}
    </div>
    )
  }
  
  return (
    <div className={`flex flex-col`}>
      <Button
        type={"text"}
        className={`border border-white w-full mt-4 `}
        onClick={(prev) => setShowContent(!prev)}
      >
        <div
          className={`duration-200 ease ${
            showContent ? "rotate-0" : "rotate-180"
          }`}
        >
          <img src={ArrorUp} />
        </div>
      </Button>
      {hasContent && (
        <div
          className={`content mt-4 text-dark transition-opacity duration-500 ${
            reverse ? "" : " bg-white rounded-xl"
          }    ${showContent ? "opacity-100 " : "opacity-0"}`}
        >
          <div
            className={`${
              showContent ? "" : "hidden"
            } p-[10px] flex flex-col gap-2 text-sm font-medium leading-[32px] `}
          >
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
