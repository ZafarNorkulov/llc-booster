import SectionTitle from "../../../components/sectionTitle";
import { DatePicker, DatePickerProps, Form, Input, Select } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import PageSwitcher from "../../../components/pageSwitcher";
import Steps from "../../../components/steps";
import Logo from "../../../components/logo";

const Fax = () => {
  dayjs.extend(customParseFormat);
  const dateFormat = "DD.MM.YYYY";
  const customFormat: DatePickerProps["format"] = (value) =>
    `${value.format(dateFormat)}`;
  return (
    <section className="fax">
      <div className="max-container">
       <Steps activeIndex={1} count={2}/>
        <div className="sub-section">
            <Logo />
          <SectionTitle title="Fill the form" />
          <Form size="large">
            <Form.Item  name={"company"} label="Select Company">
              <Select allowClear defaultValue={"1"}>
                <Select.Option value={"1"}>ssss</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name={"company_name"} label="Or enter Company Name">
              <Input type="text" />
              <p className="text-qestin text-xs mt-2 w-[90%]">
                Required unless Company is selected from the list above!
              </p>
            </Form.Item>
            <Form.Item name={"csz"} label="City,State,ZipCode">
              <Input type="text" />
              <p className="text-qestin text-xs mt-2 w-[90%]">
                Required if using a U.S. address. For foreign address: This
                field can be left blank
              </p>
            </Form.Item>
            <Form.Item name={"owner"} label="Name Of Responsible">
              <Input type="text" />
              <p className="text-qestin text-xs mt-2 w-[92%]">
                The name of the person in charge of the company. {"    "}
                This person must be the owner or manager.
              </p>
            </Form.Item>
            <Form.Item name={"is_active"}>
              <div className="flex gap-1 items-center ">
                <input
                  defaultChecked
                  type="checkbox"
                  className="w-[23px] h-[23px] accent-[#16242c]"
                />
                <label htmlFor="" color="[#16242c]" className="text-sm">
                  Is This LLC?
                </label>
              </div>
            </Form.Item>
            <Form.Item name="princip" label="Principal type of activity">
              <Input />
            </Form.Item>
            <Form.Item
              name="princip"
              label="The date the business was started or acquired"
            >
              <DatePicker
                className="w-full text-step"
                defaultValue={dayjs("2015/01/01", dateFormat)}
                format={customFormat}
              />
              <p className="text-qestin text-xs mt-2 w-[90%]">
                The date the business was started or acquired. This may be the
                date of incorporation of the company in the US or the date of
                commencement of operations in the US.
              </p>
            </Form.Item>
          </Form>
        </div>
        <PageSwitcher next="/ein/fax/signature" />
      </div>
    </section>
  );
};

export default Fax;
