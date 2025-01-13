import { Select } from "antd";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import check from "../assets/icons/select-check.svg";

interface IOption {
  id: number;
  label: string;
  checked: boolean;
}

const MySelect = ({
  options,
  setOptions,
  defaultValue = false,
  placeholder = "",
}: {
  options: IOption[];
  setOptions: Dispatch<SetStateAction<IOption[]>>;
  defaultValue?: boolean;
  placeholder?: string;
}) => {
  const { Option } = Select;

  // Value state to pass back to the Form
  const [selectedValue, setSelectedValue] = useState<string | undefined>();

  // Initialize the first option as the default value
  useEffect(() => {
    if (options.length > 0 && defaultValue) {
      const firstOption = options[0];
      // Mark the first option as checked
      setOptions((prevOptions) =>
        prevOptions.map((option, index) =>
          index === 0
            ? { ...option, checked: true }
            : { ...option, checked: false }
        )
      );
      setSelectedValue(String(firstOption.id));
    }
  }, []);

  const handleChange = (value: string) => {
    // Update checked state
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === +value
          ? { ...option, checked: true }
          : { ...option, checked: false }
      )
    );

    // Update the selected value
    setSelectedValue(value);
  };

  return (
    <Select
      value={selectedValue}
      onChange={handleChange}
      className="text-slate-500"
      placeholder={placeholder}
      dropdownStyle={{
        boxShadow:
          "0px 9px 28px 8px #0000000D,0px 6px 16px 0px #00000014,0px 3px 6px -4px #0000001F",
      }}
    >
      {options?.map((item) => (
        <Option key={item.id} value={String(item.id)}>
          <div className="flex justify-between">
            <span className="text-sm font-medium font-roboto leading-[22px] text-dark">
              {item.label}
            </span>
            <span
              className="select-icon flex items-center justify-center w-[22px] h-[22px] rounded-full"
              style={{
                background: item.checked ? "#0499F6" : "#E3E5E5",
              }}
            >
              <img src={check} alt="check" />
            </span>
          </div>
        </Option>
      ))}
    </Select>
  );
};

export default MySelect;
