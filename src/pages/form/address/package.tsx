import Steps from "../../../components/steps";
import SectionTitle from "../../../components/sectionTitle";
import PackageCard from "../../../components/packageCard";
import { useEffect, useRef, useState } from "react";
import { ICardDefinition, StringObject } from "../../../types/data.models";
import PageSwitcher from "../../../components/pageSwitcher";
import Logo from "../../../components/logo";
import CustomModal from "../../../components/modal";
import warningWhite from "../../../assets/icons/Vector-white.svg";
import homeIcon from "../../../assets/icons/my-own.svg";
import probusiness from "../../../assets/icons/pro-business.svg";
import privacy from "../../../assets/icons/Illustration-privacy.svg";
import maintain from "../../../assets/icons/Illustration-maintain.svg";
import location from "../../../assets/icons/Illustration-location.svg";
import permanet from "../../../assets/icons/Illustration-permanet.svg";
import ConfirmModal from "../../../components/modal/confirmModal";

const CompanyPackage = () => {
  const [modalId, setModalId] = useState<number | null>(null);
  const [activePckId, setActivePckId] = useState<number | null>(null);
  const [formModal, setFormModal] = useState<StringObject>({});
  const [open, setOpen] = useState<boolean>(false);
  const [cards] = useState([
    {
      icon: privacy,
      title: "Privacy protection for your data",
    },
    {
      icon: maintain,
      title:
        "Maintaining a physical presence, even if you’re not physically there",
    },
    {
      icon: location,
      title: "A physical address for your company (not a PO Box)",
    },
    {
      icon: permanet,
      title: "Permanent digital access to your mail anywhere in the world",
    },
  ]);

  const [packages, setPackages] = useState<ICardDefinition[]>([
    {
      id: 1,
      isActive: true,
      icon: homeIcon,
      title: (
        <>
          <div className="inline-flex items-center gap-1">
            <h1 className="whitespace-pre-wrap">Use My Own Address</h1>
            <img
              src={warningWhite}
              className="w-4 h-4 cursor-pointer"
              onClick={() => toggleModal(2)}
            />
          </div>
        </>
      ),
      cardType: "+State Fee",
      desc: [
        {
          id: 1,
          text: " Use your personal or business address",
          isActive: true,
        },
        {
          id: 2,
          text: " Ensure it meets state requirements",
          isActive: true,
        },
      ],
      showContent: false,
      background: ["#36D1DC", "#5B86E5"],
    },
    {
      id: 2,
      isActive: false,
      icon: probusiness,
      rec: true,
      title: (
        <div className="inline-flex gap-1">
          <h1 className="text-lg ">
            Professional Business <br />{" "}
            <span className="inline-flex items-center gap-1">
              Address
              <img
                src={warningWhite}
                className="w-4 h-4 cursor-pointer"
                onClick={() => toggleModal(3)}
              />
            </span>
          </h1>
        </div>
      ),
      desc: [
        {
          id: 1,
          text: "Many people use a professional business address to keep their personal address private",
          isActive: true,
        },
        {
          id: 2,
          text: "This serves as the principal office address from which the company operates",
          isActive: true,
        },
        {
          id: 3,
          text: "Virtual Mail Service",
          isActive: true,
        },
      ],
      price: "29",
      cardType: "/month",
      showContent: false,
      content: (
        <div>
          <div
            className=" max-w-[270px] mx-auto
          "
          >
            <h4 className="text-base text-center mx-auto px-[11px] leading-[18px] text-white font-medium ">
              This will be your principal company address:
            </h4>
            <div className="bg-white p-[14px] leading-4 mt-4 border border-dashed border-dark text-sm font-semibold rounded-[10px]">
              2761 NW 82nd Ave, Doral, FL 33122
            </div>
            <h4 className="text-base text-center mx-auto mt-8 leading-[18px] text-white font-medium ">
              Our professional business address service includes:
            </h4>
          </div>
          <div className="grid grid-cols-12 gap-2 mt-[18px]">
            {cards?.map((item, i) => (
              <div
                key={i}
                className="col-span-6 p-[10px] h-[143px] flex flex-col rounded-xl gap-[18px] bg-[#F9F5FF]"
              >
                <img src={item.icon} className="w-[33px] h-[33px]" />
                <h5 className="text-xs leading-4 text-[#090A0A] font-semibold">
                  {item.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      ),
      background: ["#FF5858", "#F857A6"],
    },
  ]);

  const toggleContent = (id: number) => {
    setPackages((prevPackages) =>
      prevPackages.map(
        (pkg) =>
          pkg.id === id
            ? { ...pkg, showContent: !pkg.showContent }
            : { ...pkg, showContent: false } // Boshqa kartalarni yopish
      )
    );
  };
  const toggleModal = (id: number | null) => {
    setModalId((prevId) => (prevId === id ? null : id));
  };
  useEffect(() => {
    const activePack = packages.filter((el) => el.isActive).map((it) => it.id);
    setActivePckId(activePack[0]);
    const address = sessionStorage.getItem("address") ?? "";
    const parseAddress = address !== "" ? JSON.parse(address) : "";
    setFormModal(parseAddress);
    if (address) {
      setOpen(true);
    }
  }, []);

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    console.log(formModal);
  }, [setOpen]);

  return (
    <section>
      <div className="max-container">
        <Steps activeIndex={4} count={7} />
        <Logo />
        <SectionTitle
          title="Company address"
          element
          onClick={() => toggleModal(1)}
        />{" "}
        <div className="flex flex-col gap-2">
          {packages?.map((item) => (
            <PackageCard
              key={item.id}
              onClick={() => {
                setPackages((prevPackages) => {
                  const updatedPackages = prevPackages.map((pkg) =>
                    pkg.id === item.id
                      ? { ...pkg, isActive: true }
                      : { ...pkg, isActive: false }
                  );

                  const activePackageId = item.id;
                  setActivePckId(activePackageId);

                  return updatedPackages;
                });
              }}
              reverse={true}
              icon={item.icon}
              isActive={item.isActive}
              cardType={item.cardType}
              title={item?.title}
              type={true}
              desc={item.desc}
              small={true}
              price={item.price}
              showContent={item.showContent}
              setShowContent={() => toggleContent(item.id)}
              content={item?.content}
              background={item.background}
            ></PackageCard>
          ))}
        </div>
        <PageSwitcher
          next={activePckId == 1 ? "/form/package/address" : "/form/members"}
        />
        {/* Modals */}
        <CustomModal
          open={modalId === 1}
          title="Company address"
          desc={
            "You will have the ability to opt out of texts after your order has been fulfilled"
          }
          setOpen={() => toggleModal(null)}
        />
        <CustomModal
          open={modalId === 2}
          title="Use My Own Address"
          desc={
            "A personal address becomes public, as business address information is available in public records"
          }
          setOpen={() => toggleModal(null)}
        />
        <CustomModal
          open={modalId === 3}
          title="Professional Business Address"
          desc={
            "Here’s a more polished English version: «Keeping your personal address confidential, use our virtual address service"
          }
          setOpen={() => toggleModal(null)}
        />
        {/* For form Modal */}
        <ConfirmModal
          open={open}
          setFormModal={setFormModal}
          enter="/form/members"
          reEnter="/form/package/address"
        />
      </div>
    </section>
  );
};

export default CompanyPackage;
