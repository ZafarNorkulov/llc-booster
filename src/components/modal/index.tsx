import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import warning from "../../assets/icons/Vector.svg";

const CustomModal = ({
  open,
  title,
  desc,
  abs = true,
  setOpen,
}: {
  open: boolean;
  title: string;
  desc: string;
  abs?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);

  return (
    <div
      className={`${
        open ? "" : "hidden"
      } fixed bg-[#00000069] top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center`}
    >
      <div className={`max-container w-full ${open ? "modal" : "scale-0"}`}>
        <div
          ref={modalRef}
          className={`content p-[23px] ${
            !abs && "pt-[11px] pb-0"
          } relative rounded-[19px] bg-white flex flex-col items-center`}
        >
          <div
            className={`rounded-full ${
              abs
                ? "w-[80px] h-[80px] p-[15px] shadow-md absolute -translate-x-1/2 left-1/2 top-0 -translate-y-1/2"
                : ""
            } bg-white `}
          >
            <div className="bg-[#E6F7FF5C] rounded-full flex justify-center items-center p-[14px]">
              <img src={warning} />
            </div>
          </div>
          <div className="flex flex-col text-center mt-[30px] gap-[10px] text-dark mb-[21px]">
            <h3 className="text-xl leading-[27px] font-bold text-[#202020]">
              {title}
            </h3>
            <p className="text-base leading-[18px] ">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
