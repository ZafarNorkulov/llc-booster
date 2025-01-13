import SectionTitle from "../../../components/sectionTitle";
import { useState } from "react";
import { Form, Input } from "antd";
import PageSwitcher from "../../../components/pageSwitcher";
import Steps from "../../../components/steps";
import CustomModal from "../../../components/modal";
import Logo from "../../../components/logo";
import warning from "../../../assets/icons/Vector.svg";
import { useNavigate } from "react-router-dom";
import MySelect from "../../../components/select";
import { TSelectData } from "../../../types/data.models";


const StartBusiness = () => {
  const [state, setState] = useState<TSelectData[]>([
    {
      id: 1,
      label: "Alabama",
      checked: false,
    },
    {
      id: 2,
      label: "Alaska",
      checked: false,
    },
    {
      id: 3,
      label: "Arizona",
      checked: false,
    },
  ]);
  const [organizations, setOrganizations] = useState<TSelectData[]>([
    {
      id: 1,
      label: "LLC",
      checked: false,
    },
    {
      id: 2,
      label: "S-Corporation",
      checked: false,
    },
    {
      id: 3,
      label: "C-Corporation",
      checked: false,
    },
  ]);
  const [openModal, setOpenModal] = useState(false);
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onFinish = () => {
    form
      .validateFields()
      .then(() => {
        // Agar forma valid bo'lsa, sahifaga o'tadi
        form.submit();
        navigate("/form/company-info");
      })
      .catch((errorInfo) => {
        // Agar forma valid bo'lmasa, xatolikni konsolda ko'rsatadi
        console.error("Validate Failed:", errorInfo);
      });
  };

  return (
    <section className=" start-business">
      <div className="max-container">
        <Steps activeIndex={1} count={7} />
        <div className="min-h-[calc(100vh-72px)] sub-section">
          <Logo />
          <SectionTitle title="Start your business with confidence" />
          <Form form={form} size="large" layout="vertical">
            <Form.Item
              name="state"
              hasFeedback
              rules={[{ required: true, message: "Required filed!" }]}
              validateStatus={
                form.getFieldError("state").length > 0 ? "error" : ""
              }
            >
              <MySelect placeholder="State" options={state} setOptions={setState} />
            </Form.Item>
            <Form.Item
              hasFeedback
              name={"organization"}
              rules={[{ required: true, message: "Required filed!" }]}
              validateStatus={
                form.getFieldError("organization").length > 0 ? "error" : ""
              }
            >
              <MySelect placeholder="Organization type" options={organizations} setOptions={setOrganizations} />
            </Form.Item>
            <Form.Item
              name={"business"}
              label={
                <div className="flex items-center gap-1">
                  <span>Business purpose</span>
                  <img
                    src={warning}
                    className="w-4 h-4"
                    onClick={() => setOpenModal(true)}
                  />
                </div>
              }
              rules={[{ required: true, message: "Required field" }]}
              validateStatus={
                form.getFieldError("business").length > 0 ? "error" : ""
              }
            >
              <Input type="text" />
            </Form.Item>
          </Form>
          <PageSwitcher next={"/form/company-info"} onClick={onFinish} />
        </div>
        <CustomModal
          open={openModal}
          setOpen={setOpenModal}
          abs={false}
          title="Buisness progress"
          desc="Just describe your business in your own words. For example, “Real estate” or ‘Financial services"
        />
      </div>
    </section>
  );
};

export default StartBusiness;
