import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../../assets/icons/arrow-right.svg";
import SectionTitle from "../../../components/sectionTitle";
import americanBank from "../../../assets/icons/american-bank.svg";
import citigroup from "../../../assets/icons/citigroup.svg";
import elOk from "../../../assets/icons/el_ok.svg";
import PageSwitcher from "../../../components/pageSwitcher";

interface ICard {
  id: number;
  is_active: boolean;
  icon: string;
  title: string;
}

const BusinessBank = () => {
  const navigate = useNavigate();

  const [cards, setCards] = useState<ICard[]>([
    {
      id: 1,
      is_active: true,
      icon: americanBank,
      title: "Bank of America",
    },
    {
      id: 2,
      is_active: false,
      icon: citigroup,
      title: "Citigroup Inc. 9",
    },
  ]);

  return (
    <section>
      <div className="max-container !max-w-[319px]">
        <button onClick={() => navigate(-1)} className="mb-6">
          <img src={arrow} />
        </button>
        <SectionTitle title="Setting up Small Business Banking" />
        <div className="flex flex-col gap-2">
          {cards.map((card) => (
            <div className="card p-[14px] bg-white rounded-[14px] border border-[#0499F6]">
              <div
                className="header flex justify-between items-center bg-gradient-to-l rounded-xl px-3 py-[6px] from-[#5B86E5] to-[#36D1DC]"
                onClick={() => {
                  setCards((prevCards) =>
                    prevCards.map((pkg) =>
                      pkg.id === card.id
                        ? { ...pkg, is_active: true }
                        : { ...pkg, is_active: false }
                    )
                  );
                }}
              >
                <div className="flex items-center gap-[5px]">
                  <div
                    className="w-8 h-8 flex items-center justify-center  rounded-full bg-white"
                    style={{
                      boxShadow:
                        "-1.119px 0.559px 3.664px 0px rgba(70, 149, 218, 0.58) inset, 0.42px -0.14px 1.175px 0px rgba(31, 113, 195, 0.25) inset, 0px 0.917px 0.55px 0px rgba(25, 52, 116, 0.27)",
                    }}
                  >
                    <img src={card.icon} />
                  </div>
                  <div className="flex flex-col text-white">
                    <h3 className="text-base font-semibold leading-3">
                      {card.title}
                    </h3>
                    <p className="text-xs leading-4 text-[#FFFFFFCC]">
                      with qualifying activiteies
                    </p>
                  </div>
                </div>
                <div
                  className={`w-5 h-5 flex items-center justify-center rounded-full border ${
                    card.is_active
                      ? "border-[#006FFD] bg-primary"
                      : "border-white"
                  } `}
                >
                  {card?.is_active ? (
                    <span className="block w-2 h-2 bg-white rounded-full" />
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="content flex flex-col gap-[13px] mt-[6px] bg-[#fafafa] rounded-xl p-[13px]">
                <div className="flex items-center gap-[7px]">
                  <img src={elOk} />
                  <h5>Suitable for non-residents</h5>
                </div>
                <div className="border border-dashed border-pagination" />
                <div className="flex items-center gap-[7px]">
                  <img src={elOk} />
                  <h5>Online account opening</h5>
                </div>
                <div className="border border-dashed border-pagination" />
                <div className="flex items-center gap-[7px]">
                  <img src={elOk} />
                  <h5>-$500 bonus</h5>
                </div>
              </div>
              <a className="text-primary text-sm underline">View Details</a>
            </div>
          ))}
        </div>
        <p className="text-questin text-center mt-4 mx-[14px] text-xs">
          By clicking Select, you authorize Bank of America, N.A. to contact you
          to discuss small business products and services.
        </p>
        <div className="border border-[#979C9E] border-dashed my-4" />
        <a className="text-primary text-sm underline w-full text-center block mb-8">
          No, thanks
        </a>
        <PageSwitcher next="/form/free-accountant" />
      </div>
    </section>
  );
};

export default BusinessBank;
