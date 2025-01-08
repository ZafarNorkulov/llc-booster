import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { Link, useNavigate } from "react-router-dom";

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
      <Link to={next} onClick={onClick}>
        <Button type="primary" className="rounded-[48px]" size="large">
          Next step
        </Button>
      </Link>
    </div>
  );
};

export default PageSwitcher;
