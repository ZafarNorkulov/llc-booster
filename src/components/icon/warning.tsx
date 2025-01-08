const Warning = ({
  size,
  onClick,
}: {
  size?: number;
  onClick?: () => void;
}) => {
  return (
    <p
      className={`${
        size ? `w-[${size}px] h-[${size}px]` : "w-[20px] h-[20px]"
      } flex items-center justify-center text-white rounded-full bg-[#D8DDE0]`}
      onClick={onClick}
      style={{
        width: size ? `${size}px` : "20px",
        height: size ? `${size}px` : "20px",
      }}
    >
      !
    </p>
  );
};

export default Warning;
