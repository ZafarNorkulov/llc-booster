import { Select } from "antd";
import { Dispatch, SetStateAction, useEffect } from "react";
import check from "../assets/icons/select-check.svg";
import { TSelectData } from "../types/data.models";

const MySelect = ({
  options,
  setOptions,
  defaultValue = false,
  placeholder = "",
  selectText,
  value,
  onChange,
}: {
  options: TSelectData[];
  setOptions: Dispatch<SetStateAction<TSelectData[]>>;
  defaultValue?: boolean;
  placeholder?: string;
  selectText?: string;
  value?: string;
  onChange?: (value: string) => void;
}) => {
  const { Option } = Select;

  useEffect(() => {
    if (options.length > 0 && defaultValue) {
      const firstOption = options[0];
      setOptions((prevOptions) =>
        prevOptions.map((option, index) =>
          index === 0
            ? { ...option, checked: true }
            : { ...option, checked: false }
        )
      );
      onChange?.(String(firstOption.id));
    }
  }, []);

  const handleChange = (value: string) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === +value
          ? { ...option, checked: true }
          : typeof option.checked === "string"
          ? option
          : { ...option, checked: false }
      )
    );
    onChange?.(value);
  };

  return (
    <Select
      value={value}
      onChange={handleChange}
      className="text-slate-500"
      placeholder={placeholder}
      dropdownRender={(menu) => (
        <div>
          <div className="py-[7px] px-3 text-sm leading-[22px] font-roboto text-mini-app">
            {selectText}
          </div>
          {menu}
        </div>
      )}
      dropdownStyle={{
        padding: 0,
        boxShadow:
          "0px 9px 28px 8px #0000000D,0px 6px 16px 0px #00000014,0px 3px 6px -4px #0000001F",
      }}
    >
      {options?.map((item) => (
        <Option
          key={item.id}
          value={String(item.id)}
          disabled={typeof item.checked === "string"}
        >
          <div className="flex justify-between">
            <span className="text-sm font-medium font-roboto leading-[22px] text-dark">
              {item.label}
            </span>
            {typeof item.checked === "boolean" ? (
              <span
                className="select-icon flex items-center justify-center w-[22px] h-[22px] rounded-full"
                style={{
                  background: item.checked ? "#0499F6" : "#E3E5E5",
                }}
              >
                <img src={check} alt="check" />
              </span>
            ) : (
              <span className="text-xs font-roboto leading-[22px] text-mini-app">
                {item.checked}
              </span>
            )}
          </div>
        </Option>
      ))}
    </Select>
  );
};

export default MySelect;
