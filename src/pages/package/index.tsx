import PackageCard from "../../components/packageCard";
import SectionTitle from "../../components/sectionTitle";
import PageSwitcher from "../../components/pageSwitcher";
import { useState } from "react";
import { ICardDefinition } from "../../types/data.models";
import Background from "../../components/background";
import Logo from "../../components/logo";
import contentA from "../../assets/icons/contentA.svg";
import contentX from "../../assets/icons/contentX.svg";

const Package = () => {
  const [packages, setPackages] = useState<ICardDefinition[]>([
    {
      id: 1,
      isActive: true,
      title: "Starter",
      desc: "Includes everything you need to launch your business",
      cardType: "free",
      price: "0",
      showContent: false,
      content: [
        {
          id: 1,
          text: "Rush filing (1 day)",
          isActive: true,
        },
        {
          id: 2,
          text: "Employer ID Number (EIN). Fee self-submission through our service",
          isActive: true,
        },
        {
          id: 3,
          text: "Operating agreement",
          isActive: true,
        },
        {
          id: 4,
          text: "Business Tax Consulation",
          isActive: true,
        },
        {
          id: 5,
          text: "Free 1 st Year Registered Agent Service! (then 123$/years)",
          isActive: false,
        },
        {
          id: 6,
          text: "Specialized support",
          isActive: false,
        },
        {
          id: 7,
          text: "Free first 3 months for business address + virtual mailbox (then $29/month)",
          isActive: false,
        },
        {
          id: 8,
          text: "Assistance with business account opening",
          isActive: false,
        },
        {
          id: 9,
          text: "BOI Report",
          isActive: false,
        },
      ],
      background: ["#36D1DC", "#5B86E5"],
    },
    {
      id: 2,
      isActive: false,
      title: "Non-Resident",
      desc: "Perfect for non-residents: business address and virtual mailbox included",
      cardType: "free",
      price: "64",
      showContent: false,
      content: [
        {
          id: 1,
          text: "Rush filing (1 day)",
          isActive: true,
        },
        {
          id: 2,
          text: "Employer ID Number (EIN). Fee self-submission through our service",
          isActive: true,
        },
        {
          id: 3,
          text: "Operating agreement",
          isActive: true,
        },
        {
          id: 4,
          text: "Business Tax Consulation",
          isActive: true,
        },
        {
          id: 5,
          text: "Free 1 st Year Registered Agent Service! (then 123$/years)",
          isActive: true,
        },
        {
          id: 6,
          text: "Specialized support",
          isActive: true,
        },
        {
          id: 7,
          text: "Free first 3 months for business address + virtual mailbox (then $29/month)",
          isActive: true,
        },
        {
          id: 8,
          text: "Assistance with business account opening",
          isActive: true,
        },
        {
          id: 9,
          text: "BOI Report",
          isActive: false,
        },
      ],
      background: ["#1CD8D2", "#93EDC7"],
    },
    {
      id: 3,
      isActive: false,
      rec: true,
      title: "Premium",
      desc: "Perfect for non-residents: business address and virtual mailbox included",
      cardType: "free",
      price: "64",
      showContent: false,
      content: [
        {
          id: 1,
          text: "Rush filing (1 day)",
          isActive: true,
        },
        {
          id: 2,
          text: "Employer ID Number (EIN). Fee self-submission through our service",
          isActive: true,
        },
        {
          id: 3,
          text: "Operating agreement",
          isActive: true,
        },
        {
          id: 4,
          text: "Business Tax Consulation",
          isActive: true,
        },
        {
          id: 5,
          text: "Free 1 st Year Registered Agent Service! (then 123$/years)",
          isActive: true,
        },
        {
          id: 6,
          text: "Specialized support",
          isActive: true,
        },
        {
          id: 7,
          text: "Free first 3 months for business address + virtual mailbox (then $29/month)",
          isActive: true,
        },
        {
          id: 8,
          text: "Assistance with business account opening",
          isActive: true,
        },
        {
          id: 9,
          text: "BOI Report",
          isActive: true,
        },
      ],
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
      <Background type="left" top={205} />
      <Background type="left" top={702} />
      <div className="max-container">
        <Logo />
        <SectionTitle title="Choose Your Package" />

        <div className="mt-5 flex flex-col gap-2">
          {packages?.map((item) => (
            <PackageCard
              key={item.id}
              desc={item.desc}
              rec={item.rec}
              price={item.price}
              onClick={() => {
                setPackages((prevPackages) =>
                  prevPackages.map((pkg) =>
                    pkg.id === item.id
                      ? { ...pkg, isActive: true }
                      : { ...pkg, isActive: false }
                  )
                );
              }}
              isActive={item.isActive}
              cardType={item.cardType}
              title={item?.title}
              showContent={item.showContent}
              setShowContent={() => toggleContent(item.id)}
              content={
                <>
                  {item?.content?.map((content) => (
                    <div className="flex gap-3 items-center" key={content.id}>
                      <div className="w-8 h-8 p-2 flex-shrink-0 flex items-center justify-center rounded-full bg-[#E8EDFB]">
                        <img
                          src={content.isActive ? contentA : contentX}
                          alt=""
                        />
                      </div>

                      <p
                        className={`text-sm ${
                          content.isActive ? "text-dark" : "text-[#A0ABBB]"
                        }  leading-4 font-roboto text-medium`}
                      >
                        {content?.text}
                      </p>
                    </div>
                  ))}
                </>
              }
              background={item.background}
            />
          ))}
        </div>
        <div className="mt-[32px]" />
        <PageSwitcher next="/ein"  />
      </div>
    </section>
  );
};

export default Package;
