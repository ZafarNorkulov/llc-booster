import Logo from "../../components/logo";
import SectionTitle from "../../components/sectionTitle";
import doc from "../../assets/icons/documents.svg";
import { useState } from "react";
import calendar from "../../assets/icons/calendar.svg";
import copy from "../../assets/icons/copy.svg";
import download from "../../assets/icons/download.svg";
import support from "../../assets/icons/bx_support.svg";
import process from "../../assets/icons/process.svg";

const MyCompanies = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  return (
    <section>
      <div className="max-container">
        <Logo />
        <SectionTitle title="My companies" />
        <div className="flex flex-col gap-2">
          {/* card 1 */}
          <div className="p-2 bg-white flex flex-col gap-2 rounded-xl">
            <h3
              className="company-name  text-base leading-[22px] bg-[#1BB566] py-[10px] px-3 rounded-lg text-white font-bold"
              onClick={() => setActiveCard(1)}
            >
              LLC BOOSTER LLC
            </h3>
            <div className="flex gap-2">
              <div className="pt-[10px] pb-4 rounded-lg flex flex-col justify-center items-center border border-[#E3E5E5] w-[50%]">
                <h5 className="text-qestin font-medium">State:</h5>
                <span className="text-dark font-medium">Florida</span>
              </div>
              <button className="pt-[10px] pb-4 rounded-lg flex flex-col justify-center items-center border border-[#E3E5E5] w-[50%]">
                <h5 className="text-qestin font-medium">Status:</h5>
                <span className="bg-[#1BB566] p-1 rounded-[10px] text-white text-sm font-medium">
                  Registered
                </span>
              </button>
            </div>
            <div className="border-dashed border border-[#E3E5E5] mt-[7px] mb-4" />
            <div className="px-3 py-[6px] bg-[#E3EDF9] w-max flex gap-[6px] rounded-[16px]">
              <input type="file" className="hidden" id="file" />
              <label
                htmlFor="file"
                className="text-sm flex gap-[6px] leading-[20px] text-color2 font-medium"
              >
                <img src={doc} />
                Documents
              </label>
            </div>
            <div
              className={`content transition-opacity duration-300 mt-2 ${
                activeCard === 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className={activeCard === 1 ? "flex flex-col gap-2" : "hidden"}
              >
                <div className="flex items-center  justify-between bg-gray gap-[7px] rounded-xl border border-pagination px-3 py-[10px]">
                  <div className="flex items-center gap-[7px]">
                    <img src={calendar} />
                    <p className="text-sm font-roboto text-dark opacity-50">
                      Date of Registration:
                    </p>
                  </div>
                  <span className="text-primary text-base font-roboto">
                    December 4, 2023
                  </span>
                </div>

                <div className="flex flex-col bg-gray rounded-xl border border-pagination px-3 py-[10px]">
                  <div className="flex items-center gap-[7px]">
                    <img src={copy} />
                    <p className="text-sm font-roboto text-dark opacity-50">
                      Available Documents:
                    </p>
                  </div>
                  <div className="flex flex-col gap-[9px]">
                    <div className="flex items-center justify-between mt-6 gap-3">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium font-roboto text-dark leading-none">
                          Certificate of Formation:
                        </span>
                        <span className="text-sm font-medium font-roboto text-dark leading-none">
                          In Process
                        </span>
                      </div>
                      <button className="flex gap-1 text-xs font-roboto text-color2">
                        <img src={download} className="w-[14px] h-[14px]" />
                        <p>Download (PDF)</p>
                      </button>
                    </div>
                    <div className="border border-pagination border-dashed" />
                    <div className="flex items-center justify-between mt-6 gap-3">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium font-roboto text-dark leading-none">
                          EIN Confirmation:
                        </span>
                        <span className="text-sm font-medium font-roboto text-dark leading-none">
                          In Process
                        </span>
                      </div>
                      <button className="flex gap-1 text-xs font-roboto text-color2">
                        <img src={download} className="w-[14px] h-[14px]" />
                        <p>Download (PDF)</p>
                      </button>
                    </div>
                    <div className="border border-pagination border-dashed" />
                    <div className="flex items-center justify-between mt-6 gap-3">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium font-roboto text-dark leading-none">
                          Operating Agreement:
                        </span>
                        <span className="text-sm font-medium font-roboto text-dark leading-none">
                          In Process
                        </span>
                      </div>
                      <button className="flex gap-1 text-xs font-roboto text-color2">
                        <img src={download} className="w-[14px] h-[14px]" />
                        <p>Download (PDF)</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center bg-gray rounded-xl border border-pagination gap-2 px-4 py-[11px]">
                  <img src={support} className="w-6 h-6" />
                  <span className="text-dark opacity-50 text-sm font-roboto">
                    Contact Support
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-2 bg-white flex flex-col gap-2 rounded-xl">
            <h3
              className="company-name  text-base leading-[22px] bg-[#80B0CE] py-[10px] px-3 rounded-lg text-white font-bold"
              onClick={() => setActiveCard(2)}
            >
              OKSANA TROPICANA COMPANY
            </h3>
            <div className="flex gap-2">
              <div className="pt-[10px] pb-4 rounded-lg flex flex-col justify-center items-center border border-[#E3E5E5] w-[50%]">
                <h5 className="text-qestin font-medium">State:</h5>
                <span className="text-dark font-medium">Florida</span>
              </div>
              <div className="pt-[10px] pb-4 rounded-lg flex flex-col justify-center items-center border border-[#E3E5E5] w-[50%]">
                <h5 className="text-qestin font-medium">Status:</h5>
                <span className="bg-[#80B0CE] p-1 rounded-[10px] text-white text-sm font-medium">
                  Paid (Processing)
                </span>
              </div>
            </div>
            <div
              className={`contetn transition-opacity duration-300 ${
                activeCard === 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className={activeCard === 2 ? "flex flex-col gap-2" : "hidden"}
              >
                <div className="border border-dashed border-pagination" />
                <div className="flex items-start gap-2 p-4 border border-pagination rounded-xl bg-gray">
                  <img src={process} />
                  <div>
                    <h3 className="text-color2 text-lg font-roboto font-bold leading-[21px]">
                      Your company is being processed
                    </h3>
                    <div className="max-w-[230px] mt-[22px]">
                      <p className="text-dark text-sm font-roboto ">
                        Estimated completion: 3–5 business days
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-4 border border-pagination rounded-xl bg-gray">
                  <img src={copy} />
                  <div>
                    <h3 className="text-color2 text-lg font-roboto font-bold leading-[21px]">
                      Documents will be available soon:
                    </h3>
                    <div className="flex flex-col gap-[6px] max-w-[230px] mt-[22px]">
                      <p className="text-dark text-sm font-roboto ">
                        Certificate of Formation: In Process
                      </p>
                      <div className="border border-pagination border-dashed " />
                      <p className="text-dark text-sm font-roboto ">
                        EIN Confirmation: In Process
                      </p>
                      <div className="border border-pagination border-dashed " />
                      <p className="text-dark text-sm font-roboto ">
                        Operating Agreement: In Process
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center bg-gray rounded-xl border border-pagination gap-2 px-4 py-[11px]">
                  <img src={support} className="w-6 h-6" />
                  <span className="text-color2 font-medium font-roboto">
                    Contact Support
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card3 */}
          <div className="p-2 bg-white flex flex-col gap-2 rounded-xl">
            <h3 className="company-name  text-base leading-[22px] bg-[#979C9E] py-[10px] px-3 rounded-lg text-white font-bold">
              DOG MARKET DOG
            </h3>
            <div className="flex gap-2">
              <div className="pt-[10px] pb-4 rounded-lg flex flex-col justify-center items-center border border-[#E3E5E5] w-[50%]">
                <h5 className="text-qestin font-medium">State:</h5>
                <span className="text-dark font-medium">Florida</span>
              </div>
              <div className="pt-[10px] pb-4 rounded-lg flex flex-col justify-center items-center border border-[#E3E5E5] w-[50%]">
                <h5 className="text-qestin font-medium">Status:</h5>
                <span className="bg-[#979C9E] p-1 rounded-[10px] text-white text-sm font-medium">
                  Draft (Incomplete)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCompanies;
