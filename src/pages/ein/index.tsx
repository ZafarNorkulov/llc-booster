import { useState } from "react";
import SectionTitle from "../../components/sectionTitle";
import { Button, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo";

const Ein = () => {
  const [selectedRadio, setSelectedradio] = useState<string>("option1");
  const navigate = useNavigate();
  const chooseEin = () => {
    if (selectedRadio === "option1") {
      navigate("/ein/fax");
    } else {
      navigate("/ein/online");
    }
  };
  return (
    <section className="ein">
      <div className="max-container">
        <Logo />
        <SectionTitle title="Apply for EIN" />
        <div className="flex flex-col gap-2">
          <Radio.Group
            defaultValue={selectedRadio}
            className="flex flex-col gap-[9px]"
            onChange={(e) => setSelectedradio(e.target.value)}
            value={selectedRadio}
          >
            <Radio
              value="option1"
              className="border rounded-[16px] border-white px-5 py-4 w-full gap-x-[22px]"
            >
              <div className="flex flex-col gap-[7px]">
                <h1 className="font-bold text-base text-dark">
                  Apply for EIN via Fax
                </h1>
                <p className="text-sm leading-[18px] font-medium text-qestin">
                  This option is for foreign applicants or those without an
                  SSN/ITIN
                </p>
              </div>
            </Radio>
            <Radio
              value="option2"
              className="flex border border-white rounded-[16px] px-[18px] py-4 w-full"
            >
              <div className="flex flex-col gap-[7px] ml-[22px]">
                <h1 className="font-bold text-base text-dark">
                  Apply for EIN Online
                </h1>
                <p className=" text-sm leading-[18px] font-medium text-questin">
                  This option is available for US residents or applicants with
                  an SSN/ITIN. You will be redirected to the IRS website
                </p>
              </div>
            </Radio>
          </Radio.Group>
          <Button
            size="large"
            type="primary"
            onClick={chooseEin}
            className="w-full"
          >
            Choose
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Ein;
