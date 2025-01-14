import { Button, Select } from "antd";
import { useState } from "react";
import Logo from "../components/logo";
import Hero from "../assets/banner.png";
import Add from "../assets/icons/add.svg";
import Edit from "../assets/icons/edit.svg";
import Apply from "../assets/icons/apply.svg";
import Company from "../assets/icons/company.svg";
import Transaction from "../assets/icons/transaction.svg";
import user from "../assets/icons/R-user.svg";
import faq from "../assets/icons/faq.svg";
import chat from "../assets/icons/Chat- Bubbles.svg";
import { Link } from "react-router-dom";
import check from "../assets/icons/select-check.svg";

interface IOption {
  label: string;
  value: string;
  checked: boolean;
}

const Home = () => {
  const [selectedValue, setSelectedValue] = useState<string>("EN");
  const [tempSelectedValue, setTempSelectedValue] = useState<string>("EN");
  const [options, setOptions] = useState<IOption[]>([
    { label: "English (EN)", value: "EN", checked: true },
    { label: "Uzbek (UZ)", value: "UZ", checked: false },
    { label: "Russian (RU)", value: "RU", checked: false },
  ]);
  const [menus] = useState([
    {
      id: 1,
      title: "My companies",
      icon: Company,
      url: "/my-companies",
    },
    {
      id: 2,
      title: "Transaction history",
      icon: Transaction,
      url: "/transactions",
    },
    {
      id: 3,
      title: "Referral program",
      icon: user,
      url: "/refferal",
    },
    {
      id: 4,
      title: "FAQ",
      icon: faq,
      url: "",
    },
    {
      id: 5,
      title: "We’re here to help!",
      icon: chat,
      url: "",
    },
  ]);

  const handleChange = (value: string) => {
    const startIndex = value.indexOf("(");
    const endIndex = value.indexOf(")");
    const extractedValue =
      startIndex !== -1 && endIndex !== -1
        ? value.substring(startIndex + 1, endIndex)
        : value;

    setTempSelectedValue(extractedValue); // Update tempSelectedValue to extracted language code
    const selectedOption = options.find(
      (option) => option.value === extractedValue
    );

    if (selectedOption) {
      setSelectedValue(selectedOption.label); // Update selectedValue to the corresponding label
    }

    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.value === extractedValue
          ? { ...option, checked: true }
          : { ...option, checked: false }
      )
    );
  };
  const { Option } = Select;

  return (
    <div className="home max-container w-full">
      <div className="grid grid-cols-12">
        <div className="col-span-4" />
        <div className="col-span-4 flex items-center">
          <Logo />
        </div>
        <div className="col-span-4 flex justify-end">
          <Select
            value={tempSelectedValue}
            onChange={handleChange}
            defaultValue={selectedValue}
            placeholder="Language"
            className="text-slate-500 w-[70px]"
            dropdownRender={(menu) => (
              <div>
                <div className="py-[7px] px-3 text-sm leading-[22px] font-roboto text-mini-app">
                  Language
                </div>
                {menu}
                <Button
                  type="primary"
                  size="large"
                  className="w-[93%] m-[12px] "
                >
                  Save
                </Button>
              </div>
            )}
            dropdownStyle={{
              width: "100%",
              padding: 0,
              maxWidth: "92%",
              top: "60px",
              boxShadow:
                "0px 9px 28px 8px #0000000D,0px 6px 16px 0px #00000014,0px 3px 6px -4px #0000001F",
            }}
          >
            {options?.map((item) => (
              <Option key={item.value} value={item.label}>
                <div className="flex justify-between ">
                  <span className="text-sm font-medium font-roboto leading-[22px] text-dark">
                    {item.label}
                  </span>
                  <span
                    className="flex items-center justify-center w-[22px] h-[22px] rounded-full"
                    style={
                      item.checked
                        ? { background: "#0499F6" }
                        : { background: "#E3E5E5" }
                    }
                  >
                    <img src={check} />
                  </span>
                </div>
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <img src={Hero} className="mt-3 w-full" />
      <div className="grid grid-cols-12 gap-[5px] mt-[5px]">
        <Link
        data-aos="flip-left"
          to="/form/start-business"
          className="col-span-4 flex flex-col flex-shrink-0 gap-1 items-center border border-white rounded-xl px-3 py-1 "
          style={{
            background:
              "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.16) 100%)",
          }}
        >
          <img src={Add} className="w-[39px] h-[39px]" />
          <span className="text-center text-[11px] font-medium leading-[13px] text-dark max-w-[88px]">
            Add a New Company
          </span>
        </Link>
        <Link
        data-aos="flip-left"
        data-aos-delay="100"
          to={"/package"}
          className="col-span-4 flex flex-col flex-shrink-0 gap-1 items-center border border-white rounded-xl px-3 py-1"
          style={{
            background:
              "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.16) 100%)",
          }}
        >
          <img src={Edit} className="w-[39px] h-[39px]" />
          <span className="text-center text-[11px] font-medium leading-[13px] text-dark max-w-[88px]">
            Edit
            <br /> Company
          </span>
        </Link>
        <Link
        data-aos="flip-left"
        data-aos-delay="200"
          to={"/ein"}
          className="col-span-4 flex flex-col flex-shrink-0 gap-1 items-center border border-white rounded-xl px-3 py-1 "
          style={{
            background:
              "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.16) 100%)",
          }}
        >
          <img src={Apply} className="w-[39px] h-[39px]" />
          <span className="text-center text-[11px] font-medium leading-[13px] text-dark max-w-[88px]">
            Apply <br /> for EIN
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-2 mt-[30px]" data-aos="fade-up" data-aos-delay="200" >
        {menus.map((item) => (
            <Link
              to={item.url}
              className="p-2 bg-white cursor-pointer rounded-[8px] border border-white flex items-center gap-[10px]"
              key={item.id}
            >
              <img
                src={item.icon}
                className=" bg-[#F3F5F6] rounded-[8px] "
                style={{
                  boxShadow: "0px 2px 8.7px 0px rgba(206, 205, 205, 0.25)",
                }}
              />
              <span
                className="text-base text-dark font-medium
            "
              >
                {item.title}
              </span>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
