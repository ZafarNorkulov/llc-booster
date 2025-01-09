import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const PageSwitcher = ({
  next,
  onClick,
}: {
  next: string;
  onClick?: () => void;
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between mt-4">
      <Button
        type="link"
        className="rounded-[48px] border-primary text-primary"
        size="large"
        onClick={() => navigate(-1)}
      >
        <ArrowLeftOutlined /> Back
      </Button>
      <Button
        type="primary"
        className="rounded-[48px]"
        onClick={() => {
          if (onClick) {
            onClick();
            navigate(next);
          }
        }}
        size="large"
      >
        Next step
      </Button>
    </div>
  );
};

export default PageSwitcher;
