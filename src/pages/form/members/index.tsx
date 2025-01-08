import Steps from "../../../components/steps";
import SectionTitle from "../../../components/sectionTitle";
import { Checkbox, Form, Input, Radio, RadioChangeEvent, Select } from "antd";
import { useState } from "react";
import Warning from "../../../components/icon/warning";
import Logo from "../../../components/logo";
import PageSwitcher from "../../../components/pageSwitcher";

const Members = () => {
  const [founder, setFounder] = useState("1");
  const [mention, setMention] = useState("@");
  const [radioVal, setRadioVal] = useState("Individual");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Faqatgina qiymatni yangilash (boshida @ belgisi qoladi)
    const newValue = e.target.value.startsWith("@")
      ? e.target.value
      : `@${e.target.value}`;
    setMention(newValue);
  };
  const radioChange = (e: RadioChangeEvent) => {
    setRadioVal(e.target.value);
  };
  const isIndividual = radioVal === "Individual";

  return (
    <section className="members">
      <div className="max-container">
        <Steps activeIndex={5} count={7} />
        <div className="sub-section">
          <div className="gradient-bg" />
          <Logo />
          <SectionTitle title="Members" />
          <Form size="large">
            <Form.Item label={"Choose number of founders"}>
              <Select defaultValue={"1"} onChange={(e) => setFounder(e)}>
                <Select.Option value={"1"}>1</Select.Option>
                <Select.Option value={"2"}>2</Select.Option>
              </Select>
            </Form.Item>
            <h3 className="text-[22px] text-dark font-bold leading-[36px]">
              Member №{founder}{" "}
            </h3>
            <Form.Item className="mt-4">
              <Radio.Group
                className="flex flex-col gap-[6px] "
                defaultValue={"Individual"}
                onChange={radioChange}
              >
                <Radio
                  value="Individual"
                  className="flex items-center  p-4 rounded-2xl"
                >
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-[#1f2024]">
                      Individual
                    </span>{" "}
                    <Warning size={16} />
                  </div>
                </Radio>
                <Radio value="Company" className="  p-4 rounded-2xl">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-[#1f2024]">
                      Company
                    </span>
                    <Warning size={16} />
                  </div>
                </Radio>
              </Radio.Group>
            </Form.Item>
            <div className="border border-white border-dashed mb-4" />
            <span className="text-primary text-base leading-[16px] font-medium">
              Fill based on
            </span>
            <Form.Item className="mt-4">
              <Checkbox.Group className="flex flex-col gap-[6px] ">
                {isIndividual ? (
                  <Checkbox
                    value="Individual"
                    className="flex items-center  p-4 rounded-[8px]"
                  >
                    <div className="flex items-center gap-1">
                      <span className="text-base leading-[16px] text-dark">
                        Katerina Sheremet
                      </span>
                    </div>
                  </Checkbox>
                ) : (
                  ""
                )}
                <Checkbox value="Company" className="  p-4 rounded-[8px]">
                  <div className="flex items-center gap-1">
                    <span className="text-base leading-[16px] text-dark">
                      Alabama, Prospekt Mira 1, New York, NY 10012, US.
                    </span>
                  </div>
                </Checkbox>
              </Checkbox.Group>
            </Form.Item>

            <div className="border border-white border-dashed mb-4" />
            {isIndividual ? (
              <>
                <Form.Item label="Title" name={"title"}>
                  <Input
                    value={mention}
                    onChange={handleChange}
                    defaultValue={"@"}
                  />
                  <p className="text-xs text-qestin mt-[6px]">
                    MGR, AMBR, AP or other designated title (s)
                  </p>
                </Form.Item>
                <Form.Item label="First name">
                  <Input placeholder="Oksana" />
                </Form.Item>
                <Form.Item label="Last name">
                  <Input placeholder="Name" />
                </Form.Item>
              </>
            ) : (
              <>
                <Form.Item label="Company name">
                  <Input />
                </Form.Item>
                <Form.Item label="Representative Signing On Behalf Of Entity">
                  <Input />
                </Form.Item>
              </>
            )}

            <Form.Item label={`Street ${!isIndividual ? "Address" : ""}`}>
              <Input placeholder="Text" />
            </Form.Item>
            <Form.Item label="State">
              <Select placeholder="State">
                <Select.Option>Alabama</Select.Option>
                <Select.Option>Alaska</Select.Option>
                <Select.Option>Arizona</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="ZipCode">
              <Input placeholder="12345" />
            </Form.Item>
            <Form.Item label="Percentage of ownership">
              <Select defaultValue={100}>
                <Select.Option value={100}>100%</Select.Option>
              </Select>
            </Form.Item>
          </Form>
          <PageSwitcher
            next="/form/register-agent"
          />
        </div>
      </div>
    </section>
  );
};

export default Members;
