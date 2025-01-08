import { Button, Select } from "antd";
import { useState } from "react";
import Logo from "../components/logo";
import Hero from "../assets/banner.png";
import Add from "../assets/icons/add.png";
import Edit from "../assets/icons/edit.png";
import Apply from "../assets/icons/apply.png";
import Company from "../assets/icons/F-Square Stack.svg";

interface IOption {
  label: string;
  value: string;
  checked: boolean;
}

const Home = () => {
  const [selectedValue, setSelectedValue] = useState<string>("EN");
  const [tempSelectedValue, setTempSelectedValue] = useState<string>("EN");
  const [options] = useState<IOption[]>([
    { label: "English (EN)", value: "EN", checked: false },
    { label: "Uzbek (UZ)", value: "UZ", checked: false },
    { label: "Russian (RU)", value: "RU", checked: false },
  ]);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false); // Initially keep dropdown open
  const [menus] = useState([
    {
      id: 1,
      title: "My companies",
      icon: Company,
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
    setTempSelectedValue(extractedValue); // Update temporary selected value
  };
  const { Option } = Select;

  const handleSave = () => {
    setSelectedValue(tempSelectedValue); // Save selected value
    setDropdownOpen(false); // Close dropdown after saving
  };

  return (
    <div className="home max-container w-full bg-blue-100">
      <div className=" flex justify-between items-center w-full">
        <div></div>
        <Logo />
        <Select
          defaultValue={selectedValue}
          placeholder="Language"
          onChange={handleChange}
          value={tempSelectedValue} // Bind tempSelectedValue
          className="text-slate-500"
          open={dropdownOpen} // Control dropdown visibility
          onDropdownVisibleChange={(open) => setDropdownOpen(open)} // Update visibility state
          dropdownRender={(menu) => (
            <div className="">
              {menu}
              <Button
                type="primary"
                size="large"
                className="w-full"
                onClick={handleSave} // Save on button click
              >
                Save
              </Button>
            </div>
          )}
        >
          {options?.map((item) => (
            <Option key={item.value} value={item.value}>
              <div className="flex justify-between ">{item.label}</div>
            </Option>
          ))}
        </Select>
      </div>
      <img src={Hero} className="mt-3 w-full" />
      <div className="grid grid-cols-12 gap-[5px] mt-[5px]">
        <div
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
        </div>
        <div
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
        </div>
        <div
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
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {menus.map((item) => (
          <div className="p-2 bg-white rounded-[8px] border border-white flex items-center gap-[10px]">
            <img
              src={item.icon}
              className=" bg-[#F3F5F6] rounded-[8px] "
              style={{
                boxShadow: "0px 2px 8.7px 0px rgba(206, 205, 205, 0.25)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
