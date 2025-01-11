import SectionTitle from "../../../components/sectionTitle";
import { useEffect, useState } from "react";
import { Form, Input, Select } from "antd";
import PageSwitcher from "../../../components/pageSwitcher";
import Steps from "../../../components/steps";
import CustomModal from "../../../components/modal";
import Logo from "../../../components/logo";
import warning from "../../../assets/icons/Vector.svg";
import { useNavigate } from "react-router-dom";

interface TState {
  id: number;
  title: string;
  status: boolean;
}

const StartBusiness = () => {
  const [state, setState] = useState<TState[]>([
    {
      id: 1,
      title: "Alabama",
      status: false,
    },
    {
      id: 2,
      title: "Alaska",
      status: false,
    },
    {
      id: 3,
      title: "Arizona",
      status: false,
    },
  ]);
  const [organizations, setOrganizations] = useState<TState[]>([
    {
      id: 1,
      title: "LLC",
      status: false,
    },
    {
      id: 2,
      title: "S-Corporation",
      status: false,
    },
    {
      id: 3,
      title: "C-Corporation",
      status: false,
    },
  ]);
  const [openModal, setOpenModal] = useState(false);
  const [form] = Form.useForm();
  const [selectedState, setSelectedState] = useState<TState | null>(null);
  const [selectedOrg, setSelectedOrg] = useState<TState | null>(null);
  const handleSelectState = (value: TState) => {
    setSelectedState(value);
    const elements = [...state];
    elements.forEach((el) => {
      el.status = false;
    });
    const check_elements = elements?.map((item) =>
      item.id === value.id
        ? { ...item, status: true }
        : { ...item, status: false }
    );

    setState(check_elements);
  };
  const handleSelectOrg = (value: TState) => {
    setSelectedOrg(value);
    const elements = [...organizations];
    elements.forEach((el) => {
      el.status = false;
    });
    const check_orgs = elements?.map((item) =>
      item.id === value.id
        ? { ...item, status: true }
        : { ...item, status: false }
    );

    setOrganizations(check_orgs);
  };
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
  useEffect(() => {
    if (selectedState && selectedState?.title) {
      const myState = selectedState.title;

      sessionStorage.setItem("state", myState);
    }
  }, [selectedState]);
  useEffect(() => {
    if (selectedOrg && selectedOrg?.title) {
      const myOrg = selectedOrg?.title;
      sessionStorage.setItem("organization_type", myOrg);
    }
  }, [selectedOrg]);

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
              <Select
                className="w-full "
                placeholder="State"
                value={selectedState?.title}
              >
                {state.map((item) => (
                  <Select.Option key={item.id}>
                    <div
                      className="select flex justify-between items-center"
                      onClick={() => handleSelectState(item)}
                    >
                      <span className="text-sm font-medium leading-[22px] text-dark">
                        {item.title}
                      </span>
                      {/* {item.status ? "i" : "a"} */}
                    </div>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              hasFeedback
              name={"organization"}
              rules={[{ required: true, message: "Required filed!" }]}
              validateStatus={
                form.getFieldError("organization").length > 0 ? "error" : ""
              }
            >
              <Select
                className="w-full "
                placeholder="Organization type"
                value={selectedOrg?.title}
              >
                {organizations.map((item) => (
                  <Select.Option key={item.id}>
                    <div
                      className="flex justify-between items-center "
                      onClick={() => handleSelectOrg(item)}
                    >
                      <span className="text-sm font-medium leading-[22px] text-dark">
                        {item.title}
                      </span>
                      {/* {item.status ? "i" : "a"} */}
                    </div>
                  </Select.Option>
                ))}
              </Select>
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
