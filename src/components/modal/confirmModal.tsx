import { Button, Divider } from "antd";
import { Dispatch, SetStateAction, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import modalIcon from "../../assets/icons/loc-address.svg";
import { StringObject } from "../../types/data.models";

const ConfirmModal = ({
  open,
  setFormModal,
  enter,
  reEnter,
  onClick,
}: {
  open: boolean;
  setFormModal: Dispatch<SetStateAction<StringObject>>;
  enter: string;
  reEnter?: string;
  onClick?: () => void;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      className={`${
        open ? "" : "hidden"
      } fixed bg-[#00000069] top-0 left-0 bottom-0 right-0 z-10 flex justify-center items-center`}
    >
      <div className={`max-container w-full ${open ? "modal" : "scale-0"}`}>
        <div
          ref={modalRef}
          className={`content   pb-[15px] relative rounded-[19px] bg-white flex flex-col`}
        >
          <div className="header w-full mx-auto px-5 pt-[26px] flex items-center gap-[9px]">
            <div
              className="w-[44px] h-[44px] rounded-[9px] flex items-center justify-center "
              style={{ boxShadow: "0px 1.83px 11.55px 0px #D5E4ED" }}
            >
              <img src={modalIcon} className="w-[18px]" />
            </div>
            <h3 className="text-[22px] text-[#090A0A] font-bold leading-9">
              Confirm yor address
            </h3>
          </div>
          <Divider className="mt-[15px] mb-[11px]" />
          <div className="body px-5 w-full">
            <div className="flex flex-col gap-1 text-sm font-roboto leading-4 ">
              <h5 className="font-bold text-dark ">Address not found</h5>
              <p className="text-step font-medium">
                Enable to find address in database
              </p>
            </div>
            <h5 className="font-bold text-dark text-sm font-roboto mt-5">
              Member 1
            </h5>
            <div
              className="address flex flex-col gap-1 text-sm leading-4 font-roboto py-[10px] px-4 mt-3 rounded-xl"
              style={{ boxShadow: "0px 1px 9.9px 0px #64606040" }}
            >
              <span>Company DOG MARKET DOG </span>
              <span>New York City 10012</span>
            </div>
          </div>
          <Divider className="my-[11px]" />
          <div className="footer flex gap-[5px] px-5">
            <Button
              size="large"
              className="rounded-[48px] w-full h-[48px] border-color2 text-color2"
              onClick={() => {
                navigate(enter);
              }}
            >
              Use Entered
            </Button>

            <Button
              size="large"
              className="rounded-[48px] w-full h-[48px]"
              type="primary"
              onClick={() => {
                if (onClick) {
                  onClick();
                } else if (reEnter && !onClick) {
                  navigate(reEnter);
                }

                if (location.pathname.includes("/form/package")) {
                  sessionStorage.removeItem("address");
                }
                setFormModal({});
              }}
            >
              Re-enter Address
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
