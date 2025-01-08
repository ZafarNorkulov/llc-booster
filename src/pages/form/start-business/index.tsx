import SectionTitle from "../../../components/sectionTitle";
import { useState } from "react";
import { Form, Input, Select } from "antd";
import PageSwitcher from "../../../components/pageSwitcher";
import Steps from "../../../components/steps";
import CustomModal from "../../../components/modal";
import Logo from "../../../components/logo";

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
  const onFinish = () => {};
  return (
    <section className=" start-business">
      <div className="max-container">
        <Steps activeIndex={1} count={7} />
        <div className="min-h-[calc(100vh-72px)] sub-section">
            <Logo />
          <SectionTitle title="Start your business with confidence" />
          <Form form={form} size="large">
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
                      {item.status ? "i" : "a"}
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
                      {item.status ? "i" : "a"}
                    </div>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name={"business"}
              label={
                <div>
                  <span>Business purpose</span>
                  <span onClick={() => setOpenModal(true)}>!</span>
                </div>
              }
              rules={[{ required: true, message: "Required field" }]}
            >
              <Input type="text" />
            </Form.Item>
          </Form>
          <PageSwitcher
            next="/form/company-info"
            onClick={onFinish}
          />
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
