import { useState } from "react";
import Logo from "../../../components/logo";
import SectionTitle from "../../../components/sectionTitle";
import { ICardDefinition } from "../../../types/data.models";
import PackageCard from "../../../components/packageCard";
import doc from "../../../assets/icons/register-doc.png";
import home from "../../../assets/icons/register-home.png";
import user from "../../../assets/icons/register-user.png";
import PageSwitcher from "../../../components/pageSwitcher";
import warningWhite from "../../../assets/icons/Vector-white.svg";
import CustomModal from "../../../components/modal";

const RegisterAgent = () => {
  const [modalId, setModalId] = useState<number | null>(null);
  const [packages, setPackages] = useState<ICardDefinition[]>([
    {
      id: 1,
      isActive: true,
      title: "Use My Own Agent",
      cardType: "",
      background: ["#36D1DC", "#5B86E5"],
    },
    {
      id: 2,
      isActive: false,
      title: (
        <div className="inline-flex gap-1">
          <h1 className="text-2xl ">
            Professional agent <br />{" "}
            <span className="inline-flex items-center gap-1">Service</span>
          </h1>
        </div>
      ),
      price: "FREE",
      pro: (
        <div className="flex items-center gap-1">
          <span className="text-xs font-medium">Premium</span>
          <img
            src={warningWhite}
            className="w-4 h-4 cursor-pointer"
            onClick={() => toggleModal(2)}
          />
        </div>
      ),
      cardType: (
        <div className="flex gap-1 items-center">
          <span className="text-base font-medium leading-[35px] text-white">
            for 1 year
          </span>
          <img
            src={warningWhite}
            className="w-4 h-4 cursor-pointer"
            onClick={() => toggleModal(3)}
          />
        </div>
      ),
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

  const toggleModal = (id: number | null) => {
    setModalId((prevId) => (prevId === id ? null : id));
  };
  return (
    <section>
      <div className="max-container">
        <Logo />
        <SectionTitle
          element
          title="Registered Agent"
          onClick={() => toggleModal(1)}
        />
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
        <CustomModal
          open={modalId === 1}
          title="Registered"
          desc="A Registered Agent is an individual or company appointed to receive official documents on behalf of the LLC. They must be available at a registered address during business hours and be located in the same state where the LLC is registered"
          setOpen={() => toggleModal(null)}
        />
        <CustomModal
          open={modalId === 2}
          title="Free for 1 year"
          desc="1 year free from the date of LLC registration, starting from the following years, a fee of $125/year will be charged"
          setOpen={() => toggleModal(null)}
        />
        <CustomModal
          open={modalId === 3}
          title="Own Agent"
          desc="A registered agent can be any individual with the legal right to work in the U.S. or a company that has a physical address (It can’t be a PO Box or PMB) in the state where the LLC is registered and is available during business hours"
          setOpen={() => toggleModal(null)}
        />
      </div>
    </section>
  );
};

export default RegisterAgent;
