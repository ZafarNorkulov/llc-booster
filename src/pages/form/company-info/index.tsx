import { useState } from "react";
import SectionTitle from "../../../components/sectionTitle";
import { Button, Form, Input, Select } from "antd";
import PageSwitcher from "../../../components/pageSwitcher";
import Steps from "../../../components/steps";
import Logo from "../../../components/logo";
import warning from "../../../assets/icons/Vector.svg";
import CustomModal from "../../../components/modal";

const CompanyInfo = () => {
  const [form] = Form.useForm();
  const [showCompany, setShowCompany] = useState<string[]>([]);
  const [modalId, setModalId] = useState<number | null>(null);

  const handleValuesChange = () => {
    const values = form.getFieldsValue(); // Formadagi barcha qiymatlarni oling
    if (values.comp_info && values.designator) {
      const data = [values.comp_info, values.designator];
      setShowCompany(data);
    } else {
      setShowCompany([]);
    }
  };

  const toggleModal = (id: number | null) => {
    setModalId((prevId) => (prevId === id ? null : id)); // Bir modal ochilsa, boshqasini yopish
  };

  return (
    <section>
      <div className="max-container min-h-screen">
        <Steps activeIndex={2} count={7} />
        <div className="sub-section flex flex-col justify-between min-h-[calc(100vh-72px)] ">
          <div>
            <Logo />
            <SectionTitle title="Company information" />

            <Form
              size="large"
              form={form}
              onValuesChange={handleValuesChange}
              layout="vertical"
            >
              <Form.Item
                name={"comp_info"}
                rules={[{ required: true, message: "Required field" }]}
                label={
                  <div
                    className="flex items-center gap-1"
                    onClick={() => toggleModal(1)}
                  >
                    <span>Company name</span>
                    <img src={warning} className="w-4 h-4 cursor-pointer" />
                  </div>
                }
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={"designator"}
                rules={[{ required: true, message: "Required field" }]}
                label={
                  <div
                    className="flex items-center gap-1"
                    onClick={() => toggleModal(2)}
                  >
                    <span>Designation</span>
                    <img src={warning} className="w-4 h-4" />
                  </div>
                }
              >
                <Select placeholder="Choose a designator">
                  <Select.Option value={"LLC"}>
                    <div className="flex justify-between items-center">
                      <span>LLC</span>
                    </div>
                  </Select.Option>
                </Select>
              </Form.Item>
              {/* <Button title="111"  type="primary"/> */}
            </Form>
            {showCompany.length ? (
              <div className="flex flex-col gap-4 w-full justify-center items-center mt-[30px]">
                <p className="text-sm text-dark text-center max-w-[200px]">
                  The official name of your company will be displayed as
                </p>
                <div className="bg-white rounded-[10px] flex flex-col gap-[5px] p-[10px] w-full">
                  <Button
                    size="large"
                    className="border-error text-error text-sm font-medium w-full"
                  >
                    {showCompany[0]} {showCompany[1]}
                  </Button>
                  <Button
                    size="large"
                    className="border-error text-white bg-error text-sm font-medium w-full"
                  >
                    Check for uniqueness
                  </Button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <CustomModal
            open={modalId === 1}
            title="Company name"
            desc="Enter desired company name, you can check its availability afterward"
            setOpen={() => toggleModal(null)}
          />
          <CustomModal
            open={modalId === 2}
            title="Designation"
            desc="As required by the state, it is necessary to include a designation in the company name. Please select one of the provided options"
            setOpen={() => toggleModal(null)}
          />
          <PageSwitcher next={"/form/contact"} />
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
