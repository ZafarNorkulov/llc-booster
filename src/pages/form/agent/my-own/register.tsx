import { Form, Input, Radio, RadioChangeEvent, Select } from "antd";
import { useState } from "react";
import { StringObject } from "../../../../types/data.models";
import PageSwitcher from "../../../../components/pageSwitcher";
import Steps from "../../../../components/steps";
import SectionTitle from "../../../../components/sectionTitle";
import { useNavigate } from "react-router-dom";

const OwnAgentRegister = () => {
  const [radioVal, setRadioVal] = useState("Individual");
  const [formModal, setIsFormModal] = useState<StringObject>({});
  const navigate = useNavigate();

  const radioChange = (e: RadioChangeEvent) => {
    setRadioVal(e.target.value);
  };
  const isIndividual = radioVal === "Individual";
  const [form] = Form.useForm();
  const onFinish = (value: StringObject) => {
    setIsFormModal(value);
  };
  const handleClick = () => {
    form
      .validateFields()
      .then(() => {
        // Agar forma valid bo'lsa, sahifaga o'tadi
        form.submit();
        navigate("/form/professional");
      })
      .catch((errorInfo) => {
        // Agar forma valid bo'lmasa, xatolikni konsolda ko'rsatadi
        console.error("Validate Failed:", errorInfo);
        console.log(formModal);
      });
  };
  return (
    <section>
      <div className="max-container">
        <Steps activeIndex={7} count={7} />
        <div className="sub-section">
          <SectionTitle title="Registered Agent" />
          <Form size="large" form={form} onFinish={onFinish}>
            <span className="text-primary text-base leading-[16px] font-medium">
              Fill based on
            </span>
            <Form.Item className="mt-4">
              <Radio.Group
                className="flex flex-col gap-[6px] "
                defaultValue={"Individual"}
                onChange={radioChange}
              >
                <Radio
                  value="Individual"
                  className="text-sm font-bold text-[#1f2024] p-4 rounded-2xl"
                >
                  Individual
                </Radio>
                <Radio
                  value="Company"
                  className="text-sm font-bold text-[#1f2024] p-4 rounded-2xl"
                >
                  Company
                </Radio>
              </Radio.Group>
            </Form.Item>
            {isIndividual ? (
              <>
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
            <Form.Item label="Address (additional)">
              <Input placeholder="Address" />
            </Form.Item>
            <Form.Item label="City">
              <Input placeholder="FirstCity" />
            </Form.Item>
            <Form.Item label="State">
              <Select placeholder="State">
                {/* {States?.map((item) => (
                  <Select.Option value={item.id}>{item.name}</Select.Option>
                ))} */}
              </Select>
            </Form.Item>
            <Form.Item label="ZipCode">
              <Input placeholder="12345" />
            </Form.Item>
          </Form>
          <PageSwitcher next="/form/professional" onClick={handleClick} />
        </div>
      </div>
    </section>
  );
};

export default OwnAgentRegister;
