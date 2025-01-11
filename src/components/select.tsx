import { Select } from "antd";
import { Dispatch, SetStateAction, useState } from "react";

interface IOption {
  id: number;
  label: string;
  value: string;
  checked: boolean;
}
const MySelect = ({
  defaultValue,
  options,
  setOptions,
}: {
  defaultValue?: string | undefined;
  options: IOption[];
  setOptions: Dispatch<SetStateAction<IOption[]>>;
}) => {
  const { Option } = Select;
  const [tempSelectedValue, setTempSelectedValue] = useState<string>(
    String(options[0].id)
  );

  const handleChange = (value: string) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === +value
          ? { ...option, checked: true }
          : { ...option, checked: false }
      )
    );
    setTempSelectedValue(value);
  };

  return (
    <Select
      value={tempSelectedValue}
      onChange={handleChange}
      defaultValue={defaultValue}
      placeholder="Language"
      className="text-slate-500"
      dropdownStyle={{
        boxShadow:
          "0px 9px 28px 8px #0000000D,0px 6px 16px 0px #00000014,0px 3px 6px -4px #0000001F",
      }}
    >
      {options?.map((item) => (
        <Option key={item.id}>
          <span className="text-sm font-medium font-roboto leading-[22px] text-dark">
            {item.label}
          </span>
        </Option>
      ))}
    </Select>
  );
};

export default MySelect;
