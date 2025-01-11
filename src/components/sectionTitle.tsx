import warning from "../assets/icons/Vector.svg";

const SectionTitle = ({
  title,
  element,
  onClick,
}: {
  title: string;
  element?: boolean;
  onClick?: () => void;
}) => {
  if (!element) {
    return (
      <h2 className="text-[28px] leading-[32px] font-bold text-center mb-[30px]">
        {title}
      </h2>
    );
  } else {
    return (
      <div className="flex gap-1 items-center justify-center mb-[30px]">
        <h2 className="text-[28px] leading-[32px] font-bold text-center ">
          {title}
        </h2>
        <img
          src={warning}
          className="w-[19px] h-[19px] cursor-pointer"
          onClick={onClick}
        />
      </div>
    );
  }
};

export default SectionTitle;
