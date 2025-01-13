import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow-right.svg";
import { useState } from "react";
import PageSwitcher from "../../components/pageSwitcher";
import CustomModal from "../../components/modal";
import warning from "../../assets/icons/Vector.svg";
import consult from "../../assets/icons/consult.png";
import llc from "../../assets/icons/llc.png";
import keyRules from "../../assets/icons/key-rules.png";
import credit from "../../assets/icons/credit.png";
import payroll from "../../assets/icons/payroll.png";
import maintain from "../../assets/icons/maintain.png";
import { Radio } from "antd";

const Consultation = () => {
  const [open, setOpen] = useState(false);
  const [cards] = useState([
    {
      id: 1,
      icon: consult,
      text: "How your LLC is taxedin the USA",
      background: "#F9F5FF",
    },
    {
      id: 2,
      icon: llc,
      text: "How to choose the right tax status for your LLC",
      background: "#EDFCF2",
    },
    {
      id: 3,
      icon: keyRules,
      text: "Key rules for separating personal and business expenses",
      background: "#FEF6EE",
    },
    {
      id: 4,
      icon: credit,
      text: "Which tax deductions and credits are available for your LLC",
      background: "#FEF3F2",
    },
    {
      id: 5,
      icon: payroll,
      text: "When and how to pay sales tax and payroll taxes",
      background: "#F2FAFA",
    },
    {
      id: 6,
      icon: maintain,
      text: "Which reports and documents you need to maintain for IRS compliance",
      background: "#E5DAFA",
    },
  ]);
  return (
    <section>
      <div className="max-container">
        <Link to={"/form/business-bank"}>
          <img src={arrow} />
        </Link>
        <div className="sub-section mt-6">
          <div className="section-title mx-[18px] text-[28px] leading-[32px] font-bold text-center mb-[30px]">
            <h2>Free Accountant</h2>
            <div className="flex items-center justify-center gap-1">
              <h2>Consultation</h2>
              <img
                src={warning}
                className="w-[19px] h-[19px] cursor-pointer"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
          <h4 className="text-base leading-4 text-dark font-bold text-center">
            What you'll learn:
          </h4>

          <div className="grid grid-cols-12 gap-2 mt-5">
            {cards.map((item) => (
              <div
                className="col-span-6 card flex flex-col gap-[18px] px-[10px] py-[15px] rounded-xl bg-opacity-90"
                style={{ background: item.background }}
              >
                <img src={item.icon} className="w-[33px] h-[33px]" alt="" />
                <span className="text-xs font-bold text-dark leading-4">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <div className="border border-dashed border-step my-4" />
          <Radio.Group className="flex flex-col gap-2 " defaultValue={"1"}>
            <Radio
              value="1"
              className="text-sm leading-4 font-bold p-4 rounded-2xl"
            >
              I'm not interested at this time
            </Radio>
            <Radio
              value="2"
              className="text-sm leading-4 font-bold p-4 rounded-2xl"
            >
              Yes, I would like to receive the Business Tax Consultation (FREE)
            </Radio>
          </Radio.Group>
          <p className="mx-3 text-center mt-4 text-xs leading-[14px] text-questin mb-8">
            By clicking Select, you authorize Bank of America, N.A. to contact
            you to discuss small business products and services.
          </p>
          <PageSwitcher next="/checkout" />
          <CustomModal
            open={open}
            setOpen={setOpen}
            title="Free Accountant Consultation"
            desc="This free consultation will help you understand the basics of taxes and accounting for an LLC in the USA. We’ll provide clear and concise guidance on key points to help you avoid financial mistakes and unnecessary costs, while showing you how to structure your business for optimal tax benefits."
          />
        </div>
      </div>
    </section>
  );
};

export default Consultation;
