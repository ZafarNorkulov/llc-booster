import { useState } from "react";
import Logo from "../../../components/logo";
import SectionTitle from "../../../components/sectionTitle";
import { ICardDefinition } from "../../../types/data.models";
import PackageCard from "../../../components/packageCard";
import doc from "../../../assets/icons/register-doc.png";
import home from "../../../assets/icons/register-home.png";
import user from "../../../assets/icons/register-user.png";
import PageSwitcher from "../../../components/pageSwitcher";

const RegisterAgent = () => {
  const [packages, setPackages] = useState<ICardDefinition[]>([
    {
      id: 1,
      isActive: true,
      title: "Use My Own Agent",
      cardType: "year",
      background: ["#36D1DC", "#5B86E5"],
    },
    {
      id: 2,
      isActive: false,
      title: "Professional agent Service",
      price: "FREE",
      pro: true,
      cardType: "year",
      background: ["#FF5858", "#F857A6"],
    },
  ]);
  const [feedback] = useState([
    {
      id: 1,
      title: "Receives legal summons, notices, and any official documents.",
      icon: doc,
    },
    {
      id: 2,
      title:
        "Provides a reliable address for receiving correspondence, especially if the owners live out of state or abroad.",
      icon: home,
    },
    {
      id: 3,
      title:
        "In many U.S. states, an LLC is required to have a registered agent to maintain its status as an active legal entity.",
      icon: user,
    },
  ]);
  const activeCardId = packages.filter((item) => item.isActive)[0].id;

  return (
    <section>
      <div className="max-container">
        <Logo />
        <SectionTitle element title="Registered Agent" />
        <p className="text-dark text-base font-bold text-center">
          Why a Registered Agent is needed:
        </p>
        <div className="flex flex-col gap-2 mt-4">
          {packages.map((item) => (
            <PackageCard
              key={item.id}
              title={item.title}
              isActive={item.isActive}
              price={item.price}
              pro={item?.pro}
              cardType={item.cardType}
              background={item.background}
              setShowContent={() => {}}
              onClick={() => {
                setPackages((prevPackages) =>
                  prevPackages.map((pkg) =>
                    pkg.id === item.id
                      ? { ...pkg, isActive: true }
                      : { ...pkg, isActive: false }
                  )
                );
              }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {feedback.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-[7px] p-3 bg-white rounded-xl shadow-sm shadow-[rgba(197, 224, 242, 0.49)]"
            >
              <img src={item.icon} className="w-10 h-10" />
              <p className="text-sm text-dark font-medium leading-5">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <PageSwitcher
          next={activeCardId == 1 ? "/form/my-own" : "/form/professional"}
        />
      </div>
    </section>
  );
};

export default RegisterAgent;
