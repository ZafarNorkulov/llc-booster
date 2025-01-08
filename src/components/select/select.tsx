import { DownOutlined } from "@ant-design/icons";
import { ReactNode, useState, useRef, useEffect } from "react";

const MySelect = ({
  children,
  placeholder,
  selectedOption,
}: {
  children: ReactNode;
  placeholder?: string;
  selectedOption: string;
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setFocus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={`w-full flex justify-between gap-2 px-4 py-3 border  ${
          focus ? "border-primary" : "border-pagination"
        } bg-white rounded-xl`}
        onClick={() => setFocus(!focus)}
      >
        <div className="w-full text-dark text-base leading-4 text-medium">
          {selectedOption || placeholder}
        </div>
        <DownOutlined />
      </div>
      <div
        className={`absolute ${
          !focus ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500 ease bg-white left-0 top-[62px] right-0 shadow-md rounded-xl`}
      >
        <div className="font-roboto px-3 py-2 text-[#96969E]">
          State of Formation
        </div>
        {children}
      </div>
    </div>
  );
};

export default MySelect;
