import { Form, Input } from "antd";
import SectionTitle from "../../../components/sectionTitle";
import Steps from "../../../components/steps";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import "react-phone-input-2/lib/material.css";
import PageSwitcher from "../../../components/pageSwitcher";
import Logo from "../../../components/logo";
import warning from "../../../assets/icons/Vector.svg";
import CustomModal from "../../../components/modal";

const ContactPerson = () => {
  const [phone, setPhone] = useState("");
  const [mention, setMention] = useState<string>("");
  const [modalId, setModalId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.startsWith("@")
      ? e.target.value
      : `@${e.target.value}`;
    setMention(newValue);
  };

  const toggleModal = (id: number | null) => {
    setModalId((prevId) => (prevId === id ? null : id)); // Bir modal ochilsa, boshqasini yopish
  };
  return (
    <section>
      <div className="max-container min-h-screen">
        <Steps activeIndex={3} count={7} />
        <div className="sub-section">
          <Logo />
          <SectionTitle
            title="Contact Person"
            element
            onClick={() => toggleModal(1)}
          />{" "}
          <Form size="large" layout="vertical">
            <Form.Item
              name={"first_name"}
              label={
                <div className="flex items-center gap-1">
                  <span>First Name</span>
                  <img src={warning} className="w-4 h-4 cursor-pointer" />
                </div>
              }
            >
              <Input allowClear id="firs-name" />
            </Form.Item>
            <Form.Item name={"last_name"} label={"Last Name"}>
              <Input allowClear />
            </Form.Item>
            <Form.Item name={"mail"} label={"E-mail"}>
              <Input type="email" allowClear />
            </Form.Item>
            <Form.Item
              name={"Cell phone"}
              label={
                <div
                  className="flex items-center gap-1"
                  onClick={() => toggleModal(2)}
                >
                  <span>Cell phone</span>
                  <img src={warning} className="w-4 h-4 cursor-pointer" />
                </div>
              }
            >
              <PhoneInput
                country={"ru"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputStyle={{ padding: "7px 11px 7px 50px", border: "none",width:"100%" }}
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
          <PageSwitcher next="/package" />
          <CustomModal
            open={modalId === 1}
            title="Contact Person"
            desc="The contact person can be anyone (not necessarily a company founder) whom we can reach out to regarding your order or with special offers"
            setOpen={() => toggleModal(null)}
          />
          <CustomModal
            open={modalId === 2}
            title="Cell phone "
            desc="You will have the ability to opt out of texts after your order has been fulfilled"
            setOpen={() => toggleModal(null)}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPerson;
