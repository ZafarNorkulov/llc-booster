import SectionTitle from "../../../components/sectionTitle";
import Steps from "../../../components/steps";
import { Form, Input, Select } from "antd";
import PageSwitcher from "../../../components/pageSwitcher";
import Logo from "../../../components/logo";

const AddressForm = () => {
  return (
    <section>
      <div className="max-container">
        <Steps activeIndex={4} count={7} />
        <div className="sub-section">
          <Logo />
          <SectionTitle title="Company address" />
          <Form size="large">
            <Form.Item label="Street" name={"street"}>
              <Input />
            </Form.Item>
            <Form.Item label="Address (additional)" name={"address"}>
              <Input />
            </Form.Item>
            <Form.Item label="City" name={"city"}>
              <Input />
            </Form.Item>
            <Form.Item label="City" name={"city"}>
              <Select defaultValue={"florida"}>
                <Select.Option value="florida">Florida</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="ZipCode" name={"zip"}>
              <Input />
            </Form.Item>
          </Form>
          <PageSwitcher next="/form/members" />
        </div>
      </div>
    </section>
  );
};

export default AddressForm;
