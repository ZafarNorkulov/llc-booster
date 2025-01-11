import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const PageSwitcher = ({
  next,
  onClick,
}: {
  next: string;
  onClick?: () => void;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex justify-between mt-4">
      <Button
        type="link"
        className="rounded-[48px] h-[48px] border-primary text-primary"
        size="large"
        onClick={() => navigate(-1)}
      >
        <ArrowLeftOutlined /> Back
      </Button>
      <Button
        type="primary"
        className="rounded-[48px] h-[48px]"
        onClick={() => {
          if (onClick) {
            onClick();
          } else if (next && !onClick) {
            navigate(next);
          } else {
            navigate(location.pathname);
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
