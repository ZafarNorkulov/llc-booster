import Steps from "../../../components/steps";
import SectionTitle from "../../../components/sectionTitle";
import PackageCard from "../../../components/packageCard";
import { useState } from "react";
import { ICardDefinition } from "../../../types/data.models";
import PageSwitcher from "../../../components/pageSwitcher";
import Logo from "../../../components/logo";

const CompanyPackage = () => {
  const [packages, setPackages] = useState<ICardDefinition[]>([
    {
      id: 1,
      isActive: true,
      title: "Use My Own Address",
      cardType: "free",
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
      content: [],
      background: ["#36D1DC", "#5B86E5"],
    },
    {
      id: 2,
      isActive: false,
      rec: true,
      title: "Professional Business Address",
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
      cardType: "month",
      showContent: false,
      content: [],
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

  return (
    <section>
      <div className="max-container">
        <Steps activeIndex={4} count={7} />
          <Logo />
        <SectionTitle title="Company address" />
        <div className="flex flex-col gap-2">
          {packages?.map((item) => (
            <PackageCard
              key={item.id}
              onClick={() => {
                setPackages((prevPackages) =>
                  prevPackages.map((pkg) =>
                    pkg.id === item.id
                      ? { ...pkg, isActive: true }
                      : { ...pkg, isActive: false }
                  )
                );
              }}
              reverse={true}
              isActive={item.isActive}
              cardType={item.cardType}
              title={item?.title}
              type={true}
              desc={item.desc}
              small={true}
              price={item.price}
              showContent={item.showContent}
              setShowContent={() => toggleContent(item.id)}
              content={<></>}
              background={item.background}
            ></PackageCard>
          ))}
        </div>
        <PageSwitcher  next="/form/members" />
      </div>
    </section>
  );
};

export default CompanyPackage;
