import SectionTitle from "../../../components/sectionTitle";
import Steps from "../../../components/steps";
import EditIcon from "../../../assets/icons/pen-edit.svg";
import PageSwitcher from "../../../components/pageSwitcher";

const ProAgent = () => {
  return (
    <section>
      <div className="max-container">
        <Steps activeIndex={7} count={7} />
        <div className="sub-section !pt-10">
          <SectionTitle title="Entered information" />
          <p className="text-sm leading-[16px] text-qestin text-center px-5">
            Check the information you entered again and go back to make
            adjusments if necessary. If the information is correct, proceed to
            payment
          </p>
          <div className="px-[15px] py-3 bg-white rounded-xl w-full text-dark mt-7">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">General information</h4>
              <span className="text-color2 gap-1 text-base font-bold leading-4 text-right flex ">
                Edit
                <img src={EditIcon} width={16} height={16} />
              </span>
            </div>
            <div className="content px-[9px] py-[13px] bg-[#E5E6E726] mt-[17px]">
              <div className="flex justify-between items-center">
                <span className="title text-question text-sm leading-4">
                  Organization type:
                </span>
                <h5 className="value text-dark text-base font-bold">LLC</h5>
              </div>
              <div className="flex justify-between items-center">
                <span className="title text-question text-sm leading-4">
                  State:
                </span>
                <h5 className="value text-dark text-base font-bold">Florida</h5>
              </div>
            </div>
          </div>
          <div className="px-[15px] py-3 bg-white rounded-xl w-full text-dark mt-7">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">Company information</h4>
              <span className="text-color2 gap-1 text-base font-bold leading-4 text-right flex ">
                Edit
                <img src={EditIcon} width={16} height={16} />
              </span>
            </div>
            <div className="content px-[9px] py-[13px] bg-[#E5E6E726] mt-[17px]">
              <div className="flex justify-between items-center">
                <span className="title text-question text-sm leading-4">
                  Name:
                </span>
                <h5 className="value text-dark text-base font-bold">
                  HHJJ l.l.C
                </h5>
              </div>
            </div>
            <a className="text-color2 mt-[7px] text-xs leading-4">
              The address of the service is used
            </a>
          </div>

          <div className="px-[15px] py-3 bg-white rounded-xl w-full text-dark mt-7">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">Contact Person</h4>
              <span className="text-color2 gap-1 text-base font-bold leading-4 text-right flex ">
                Edit
                <img src={EditIcon} width={16} height={16} />
              </span>
            </div>
            <div className="content px-[9px] py-[13px] bg-[#E5E6E726] mt-[17px]">
              <div className="flex justify-between items-center">
                <span className="title text-question text-sm leading-4">
                  First name:
                </span>
                <h5 className="value text-dark text-base font-bold">
                  HHJJ l.l.C
                </h5>
              </div>
              <div className="flex justify-between items-center">
                <span className="title text-question text-sm leading-4">
                  Last name:
                </span>
                <h5 className="value text-dark text-base font-bold">VVBH</h5>
              </div>
              <div className="flex justify-between items-center">
                <span className="title text-question text-sm leading-4">
                  Email:
                </span>
                <h5 className="value text-dark text-base font-bold">
                  VHHJ_llcproduct@mail.ru
                </h5>
              </div>
              <div className="flex justify-between items-center">
                <span className="title text-question text-sm leading-4">
                  Cell phone:
                </span>
                <h5 className="value text-dark text-base font-bold">
                  197326231276
                </h5>
              </div>
              <div className="flex justify-between items-center">
                <span className="title text-question text-sm leading-4">
                  Telegram username OR phone:
                </span>
                <h5 className="value text-dark text-base font-bold">-</h5>
              </div>
              <div className="flex justify-between items-center">
                <span className="title text-question text-sm leading-4">
                  Telegram phone:
                </span>
                <h5 className="value text-dark text-base font-bold">-</h5>
              </div>
            </div>
          </div>

          <div className="px-[15px] py-3 bg-white rounded-xl w-full text-dark mt-7">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">Members</h4>
              <span className="text-color2 gap-1 text-base font-bold leading-4 text-right flex ">
                Edit
                <img src={EditIcon} width={16} height={16} />
              </span>
            </div>
            <h6 className="text-xs font-semibold leading-4 mt-4">Member №1</h6>
            <div className="content px-[9px] py-[13px] bg-[#E5E6E726] mt-[6px]">
              <div className="flex justify-between items-center">
                <span className="title text-question text-sm leading-4">
                  First name:
                </span>
                <h5 className="value text-dark text-base font-bold">VHHJ</h5>
              </div>
              <div className="flex justify-between items-center">
                <span className="title text-question text-sm leading-4">
                  Last name:
                </span>
                <h5 className="value text-dark text-base font-bold">VHHJ</h5>
              </div>
              <div className="flex justify-between items-center">
                <span className="title text-question text-sm leading-4">
                  Title:
                </span>
                <h5 className="value text-dark text-base font-bold">CVG</h5>
              </div>
              <div className="flex justify-between items-center">
                <span className="title text-question text-sm leading-4">
                  ZipCode:
                </span>
                <h5 className="value text-dark text-base font-bold">1111222</h5>
              </div>
              <div className="flex justify-between items-start">
                <span className="title text-question text-sm leading-4">
                  Address:
                </span>
                <h5 className="value text-dark text-base font-bold max-w-[200px]">
                  334 E Thach Ave Auburn, AL 36830, US
                </h5>
              </div>
              <div className="flex justify-between items-center">
                <span className="title text-question text-sm leading-4">
                  City:
                </span>
                <h5 className="value text-dark text-base font-bold">City2</h5>
              </div>
              <div className="flex justify-between items-center">
                <span className="title text-question text-sm leading-4">
                  State:
                </span>
                <h5 className="value text-dark text-base font-bold">Florida</h5>
              </div>
              <div className="flex justify-between items-center">
                <span className="title text-question text-sm leading-4">
                  Percentage of ownership:
                </span>
                <h5 className="value text-dark text-base font-bold">100%</h5>
              </div>
            </div>
            <div className="mt-[22px]">
              <h5 className="text-sm font-medium leading-4">
                Regictered Agent
              </h5>
              <span className="text-xs leading-4 text-[#1BB268]">
                The agent of the service is used
              </span>
            </div>
          </div>
          <PageSwitcher
            next="/business-bank"
          />
        </div>
      </div>
    </section>
  );
};

export default ProAgent;
