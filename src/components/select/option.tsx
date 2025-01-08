import { ReactNode } from "react";

const MyOption = ({
  children,
  className,
  onClick,
}: {
  children?: ReactNode;
  className?: string;
  onClick?: ()=>void;
}) => {
  return (
    <div
      className={`px-3 py-2 text-sm font-medium font-roboto leading-[22px] text-dark hover:bg-blue-light bg-white ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default MyOption;
