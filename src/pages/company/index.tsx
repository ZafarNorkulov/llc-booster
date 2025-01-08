import Logo from "../../components/logo";
import SectionTitle from "../../components/sectionTitle";

const MyCompanies = () => {
  return (
    <section>
      <div className="max-container">
          <Logo />
        <SectionTitle title="My companies" />
        {/* card 1 */}
        <div className="p-2 bg-white flex flex-col gap-2">
          <h3 className="company-name  text-base leading-[22px] bg-[#1BB566] py-[10px] px-3 rounded-lg text-white font-bold">
            LLC BOOSTER LLC
          </h3>
          <div className="flex gap-2">
            <div className="pt-[10px] pb-4 rounded-lg flex flex-col justify-center items-center border border-[#E3E5E5] w-[50%]">
              <h5 className="text-qestin font-medium">State:</h5>
              <span className="text-dark font-medium">Florida</span>
            </div>
            <div className="pt-[10px] pb-4 rounded-lg flex flex-col justify-center items-center border border-[#E3E5E5] w-[50%]">
              <h5 className="text-qestin font-medium">Status:</h5>
              <span className="bg-[#1BB566] p-1 rounded-[10px] text-white text-sm font-medium">
                Registered
              </span>
            </div>
          </div>
          <div className="border-dashed border border-[#E3E5E5]"/>
          <div className="px-3 py-[6px] bg-[#E3EDF9] w-max flex gap-[6px] rounded-[16px]">
            <input type="file" className="hidden"id="file" />
            <label htmlFor="file" className="text-sm leading-[20px] text-primary font-medium">Documents</label>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-2 bg-white flex flex-col gap-2">
          <h3 className="company-name  text-base leading-[22px] bg-[#80B0CE] py-[10px] px-3 rounded-lg text-white font-bold">
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
         
        </div>

        {/* Card3 */}
        <div className="p-2 bg-white flex flex-col gap-2">
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
    </section>
  );
};

export default MyCompanies;
