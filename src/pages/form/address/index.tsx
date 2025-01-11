import SectionTitle from "../../../components/sectionTitle";
import Steps from "../../../components/steps";
import { Form, Input, Select } from "antd";
import PageSwitcher from "../../../components/pageSwitcher";
import Logo from "../../../components/logo";
import warning from "../../../assets/icons/Vector.svg";
import CustomModal from "../../../components/modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StringObject } from "../../../types/data.models";
import { States } from "../../../constants";

const AddressForm = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isFillForm, setIsFillForm] = useState<StringObject>({});

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (value: StringObject) => {
    setIsFillForm(value);
  };
  const handleClick = () => {
    form
      .validateFields()
      .then(() => {
        // Agar forma valid bo'lsa, sahifaga o'tadi
        form.submit();
        sessionStorage.setItem("address", JSON.stringify(isFillForm));
        navigate("/form/package");
      })
      .catch((errorInfo) => {
        // Agar forma valid bo'lmasa, xatolikni konsolda ko'rsatadi
        console.error("Validate Failed:", errorInfo);
      });
  };

  return (
    <section>
      <div className="max-container">
        <Steps activeIndex={4} count={7} />
        <div className="sub-section">
          <Logo />
          <div className="flex items-center justify-center gap-1">
            <SectionTitle title="Company address" />{" "}
            <img
              src={warning}
              className="w-4 h-4 mb-[25px] cursor-pointer"
              alt=""
              onClick={() => setIsOpenModal(true)}
            />
          </div>
          <Form
            size="large"
            form={form}
            initialValues={{ state: "florida" }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Street"
              name={"street"}
              rules={[{ required: true, message: "Required field" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address (additional)"
              name={"address"}
              rules={[{ required: true, message: "Required field" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="City"
              name={"city"}
              rules={[{ required: true, message: "Required field" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="State"
              name={"state"}
              rules={[{ required: true, message: "Required field" }]}
            >
              <Select>
                {States?.map((item) => (
                  <Select.Option key={item.id} value={item.name}>
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="ZipCode"
              name={"zip"}
              rules={[{ required: true, message: "Required field" }]}
            >
              <Input />
            </Form.Item>
          </Form>
          <PageSwitcher next="/form/members" onClick={handleClick} />
          <CustomModal
            open={isOpenModal}
            title="Company address"
            desc="It’s a  physical address for your business (not PO Box) used for official correspondence, tax notices, and legal documents"
            setOpen={setIsOpenModal}
          />
        </div>
      </div>
    </section>
  );
};

export default AddressForm;
