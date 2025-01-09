import { Form, Input } from "antd";
import SectionTitle from "../../../components/sectionTitle";
import Steps from "../../../components/steps";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import "react-phone-input-2/lib/material.css";
import PageSwitcher from "../../../components/pageSwitcher";
import Logo from "../../../components/logo";

const ContactPerson = () => {
  const [phone, setPhone] = useState("");
  const [mention, setMention] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 
    const newValue = e.target.value.startsWith("@")
      ? e.target.value
      : `@${e.target.value}`;
    setMention(newValue);
  };
  return (
    <section >
      <div className="max-container min-h-screen">
        <Steps activeIndex={3} count={7} />
        <div className="sub-section">
            <Logo />
          <SectionTitle title="Contact Person" />{" "}
          <Form size="large">
            <Form.Item
              name={"first_name"}
              label={
                <div className="flex">
                  <span>First Name</span>!
                </div>
              }
            >
              <Input allowClear />
            </Form.Item>
            <Form.Item name={"last_name"} label={"Last Name"}>
              <Input allowClear />
            </Form.Item>
            <Form.Item name={"mail"} label={"E-mail"}>
              <Input type="email" allowClear />
            </Form.Item>
            <Form.Item name={"Cell phone"} label={"E-mail"}>
              <PhoneInput
                country={"ru"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputStyle={{ padding: "7px 11px 7px 50px", border: "none" }}
              />
            </Form.Item>
            <div className="flex gap-[10px]  ">
              <input
                defaultChecked
                type="checkbox"
                className="w-[23px] h-[23px] accent-[#16242c]"
              />
              <label htmlFor="" color="#5D5D5D" className="text-xs">
                I consent to receiving SMS text message and phone calls from
                booster LLC
              </label>
            </div>
            <Form.Item label="Telegram username OR phone" className="mt-3">
              <Input
                value={mention}
                onChange={handleChange}
                defaultValue={"@"}
              />
              <p className="text-xs text-qestin mt-[6px]">
                Starts with @. For example: @username
              </p>
            </Form.Item>
          </Form>
          <span className="text-lg leading-5 text-color2 max-w-[180px] mx-auto block text-center">
            We’ll keep your information private
          </span>
          <PageSwitcher  next="/form/package" />
        </div>
      </div>
    </section>
  );
};

export default ContactPerson;
