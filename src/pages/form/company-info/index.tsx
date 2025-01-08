import  { useState } from "react";
import SectionTitle from "../../../components/sectionTitle";
import { Button, Form, Input, Select } from "antd";
import PageSwitcher from "../../../components/pageSwitcher";
import Steps from "../../../components/steps";
import Logo from "../../../components/logo";

const CompanyInfo = () => {
 
  const [form] = Form.useForm();
  const [showCompany, setShowCompany] = useState<string[]>([]);

  const handleValuesChange = () => {
    const values = form.getFieldsValue(); // Formadagi barcha qiymatlarni oling
    if (values.comp_info && values.designator) {
      const data = [values.comp_info, values.designator];
      setShowCompany(data);
    } else {
      setShowCompany([]);
    }
  };

  return (
    <section>
      <div className="max-container min-h-screen">
        <Steps activeIndex={2} count={7} />
        <div className="sub-section flex flex-col justify-between min-h-[calc(100vh-72px)] ">
          <div>
              <Logo />
            <SectionTitle title="Company information" />

            <Form size="large" form={form} onValuesChange={handleValuesChange}>
              <Form.Item
                name={"comp_info"}
                label={
                  <div>
                    <span>Company name</span> Icon
                  </div>
                }
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={"designator"}
                label={
                  <div>
                    <span>Designation</span> Icon
                  </div>
                }
              >
                <Select placeholder="Choose a designator">
                  <Select.Option value={"LLC"}>
                    <div className="flex justify-between items-center">
                      <span>LLC</span>i
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

          <PageSwitcher  next="/form/contact" />
        </div>
       
      </div>
    </section>
  );
};

export default CompanyInfo;
