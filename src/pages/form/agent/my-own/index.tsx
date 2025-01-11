import { useState } from "react";
import SectionTitle from "../../../../components/sectionTitle";
import Steps from "../../../../components/steps";
import mandatory from "../../../../assets/icons/mandatory.png";
import privacy from "../../../../assets/icons/privacy.png";
import risk from "../../../../assets/icons/risk.png";
import address from "../../../../assets/icons/address-same.png";
import { Radio } from "antd";
import PageSwitcher from "../../../../components/pageSwitcher";

type Card = {
  id: number;
  icon: string;
  title: string;
  desc: string;
  background: string;
  maxWidth: string;
};

const OwnAgent = () => {
  const [cards] = useState<Card[]>([
    {
      id: 1,
      icon: mandatory,
      title: "Mandatory availability",
      desc: "Receives legal summons, notices, and any official documents.",
      background: "#E6E2EB",
      maxWidth: "155px",
    },
    {
      id: 2,
      icon: privacy,
      title: "Privacy limitations",
      desc: "The agent’s address is public information, which may reduce privacy, especially if it’s the owner’s home address",
      background: "#DBE9E0",
      maxWidth: "155px",
    },
    {
      id: 3,
      icon: risk,
      title: "Risk of missing important documents",
      desc: "If the agent fails to receive critical legal documents, this could lead to fines, legal issues, or even loss of the company’s good standing",
      background: "#EBE3DC",
      maxWidth: "227px",
    },
    {
      id: 4,
      icon: address,
      title: "Address inthe same state",
      desc: "The registered agent must have a physical address in the LLC’s state of registration",
      background: "#EBE1E0",
      maxWidth: "155px",
    },
  ]);

  return (
    <section className="own-agent">
      <div className="max-container">
        <Steps activeIndex={7} count={7} />

        <div className="sub-section">
          <div className="px-5 mt-10">
            <SectionTitle title="What you need to know if you use your own agent" />
          </div>
          <div className="flex flex-col gap-2">
            {cards.map((item) => (
              <div
                key={item.id}
                className={`card flex flex-col gap-[14px] p-[11px] pb-[15px] rounded-[14px]`}
                style={{
                  background: `${item.background}`,
                  boxShadow: "0px 10px 18px 0px #132C4A0A",
                }}
              >
                <div
                  className={`flex items-center gap-2`}
                  style={{ maxWidth: item.maxWidth }}
                >
                  <img src={item.icon} className="w-[43px] h-[40px]" />
                  <h4 className="text-sm font-bold text-dark leading-4">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs leading-4 text-[#1A1919]">{item.desc}</p>
              </div>
            ))}
            <div className="px-10 mt-[26px]">
              <h3 className="text-xl leading-6 text-dark font-bold text-center ">
                Are you confident you can meet all state requirements?
              </h3>
            </div>
            <Radio.Group
              className="flex flex-col gap-[6px] mt-4"
              defaultValue={"Individual"}
            >
              <Radio
                value="Individual"
                className="text-sm leading-4 font-bold p-4 rounded-2xl"
              >
                  I’m confident, I would like to use my own agent
              </Radio>
              <Radio value="Company" className="text-sm leading-4 font-bold p-4 rounded-2xl">
                Assign LLC Booster as my registered agent FREE for 1 year
              </Radio>
            </Radio.Group>
            <PageSwitcher next="/form/my-own/register"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnAgent;
