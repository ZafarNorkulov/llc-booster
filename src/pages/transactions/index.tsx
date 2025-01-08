import Logo from "../../components/logo";
import SectionTitle from "../../components/sectionTitle";

const TransactionHistory = () => {
  const handleDownload = () => {
    // PDF faylga to'g'ri yo'lni ko'rsating
    const link = document.createElement("a");
    link.href = "/docs/sample.pdf"; // `public` papkasidagi faylga yo'l
    link.download = "sample.pdf"; // Yuklanadigan fayl nomi
    link.click();
  };

  const TransCard = ({
    date,
    company,
    service,
    amount,
  }: {
    date: string;
    company: string;
    service: string;
    amount: number;
  }) => (
    <div className="p-[10px] bg-white rounded-[14px] flex justify-between">
      <div className="flex items-center gap-1">
        <span>Icon</span>
        <div className="flex flex-col  ">
          <span className="text-[10px] leading-3 text-[#979C9E]">{date}</span>
          <h5 className="font-bold text-sm leading-[18px] text-dark">
            {company}
          </h5>
          <p className="font-medium leading-[18px] text-xs text-dark">
            Service: {service}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between text-right">
        <div className="flex gap-1 items-center justify-end">
          <span className="text-[10px] leading-3 text-[#979C9E]">Amount:</span>
          <h4 className="font-bold leading-[21px]">-${amount}</h4>
        </div>
        <div
          onClick={handleDownload}
          className="flex justify-end gap-1 py-[3px] px-[6px]  rounded-full bg-[#FAFAFA]"
        >
       
          <span className="text-[10px] text-dark">Download (PDF)</span>
        </div>
      </div>
    </div>
  );

  return (
    <section>
      <div className="max-container">
          <Logo />
        <SectionTitle title="Transaction history" />
        <div className="flex flex-col gap-2">

        <TransCard
          amount={300}
          company="LLC Booster LLC"
          service="LLC Registration"
          date="December 1, 2023"
        />
        <TransCard
          amount={150}
          company="Dog Market Dog "
          service="EIN Application"
          date="November 25, 2023"
        />
        <TransCard
          amount={300}
          company="Oksana Tropicana Company "
          service="LLC Registration"
          date="November 20, 2023"
        />
        </div>
      </div>
    </section>
  );
};

export default TransactionHistory;
