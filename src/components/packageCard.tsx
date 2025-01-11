import { Dispatch, ReactNode, SetStateAction } from "react";
import Accordion from "./accordion";
import { ICardContent } from "../types/data.models";
import contentA from "../assets/icons/contentA.svg";
import contentX from "../assets/icons/contentX.svg";

const PackageCard = ({
  title,
  desc,
  rec,
  pro,
  icon,
  onClick,
  isActive,
  type,
  small,
  price,
  reverse,
  background,
  content,
  showContent,
  cardType,
  setShowContent,
}: {
  title: string | ReactNode;
  desc?: string | ICardContent[];
  rec?: boolean;
  pro?: ReactNode;
  icon?: string;
  onClick?: () => void;
  type?: boolean;
  price?: string;
  reverse?: boolean;
  isActive?: boolean;
  small?: boolean;
  background: string[];
  cardType?: ReactNode;
  content?: ReactNode | ICardContent[];
  showContent?: boolean;
  setShowContent: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`w-full relative rounded-[20px] text-white  `}
      style={{
        background: `linear-gradient(to left, ${background[0]}, ${background[1]})`,
      }}
    >
      <div className="flex justify-between mt-[14px] mr-[14px]">
        <div className="title flex items-center max-w-[285px] gap-2 py-1 px-[14px] z-[1] left-0 top-[15px] bg-[#000] bg-opacity-10 rounded-tr-xl rounded-br-xl">
          {icon ? <img src={icon} className="w-[28px] h-[26px]" /> : ""}
          <h1 className={`${small ? "text-lg" : "text-2xl"}   `}>{title}</h1>
        </div>
        <div className="action ">
          <div
            className=" w-[35px] h-[35px] border flex items-center justify-center border-white rounded-full "
            onClick={onClick}
          >
            {isActive ? (
              <span className="w-[13px] z-[1] block h-[13px] bg-white rounded-full"></span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="p-[14px]">
        <div className={`flex ${reverse ? "flex-col-reverse" : "flex-col"}`}>
          {desc ? (
            <>
              {type ? (
                Array.isArray(desc) ? (
                  <div className="content mt-4 flex flex-col gap-2 bg-white rounded-xl text-dark p-[10px]">
                    {desc.map((content: ICardContent) => (
                      <div className="flex gap-3 items-center" key={content.id}>
                        <div className="w-8 h-8 p-2 flex-shrink-0 flex items-center justify-center rounded-full bg-[#E8EDFB]">
                          {" "}
                          <img src={content?.isActive ? contentA : contentX} />
                        </div>
                        <p className="text-sm text-dark leading-4 font-roboto text-medium">
                          {content?.text}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null
              ) : (
                typeof desc === "string" && (
                  <p className="text-xs font-medium leading-[16px] mt-5 max-w-[80%]">
                    {desc}
                  </p>
                )
              )}
            </>
          ) : (
            ""
          )}
          {pro ? pro : ""}
          {typeof price != "undefined" ? (
            <div className="price flex items-center gap-[6px] mt-3">
              <h3 className="text-[26px] leading-[35px] font-bold">${price}</h3>
              <span className="text-base leading-[35px] font-medium">
                {cardType}
              </span>
              {rec ? (
                <span
                  className={`bg-white ${
                    small ? "p-[2px] px-[6px] " : "p-[6px] px-2 "
                  } rounded-[8px] text-black  text-[10px] font-bold`}
                >
                  Recomendet
                </span>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        <Accordion
          reverse={reverse}
          content={content}
          showContent={showContent}
          setShowContent={setShowContent}
        />
      </div>
    </div>
  );
};

export default PackageCard;
