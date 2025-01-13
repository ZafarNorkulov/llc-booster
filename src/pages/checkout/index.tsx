import { useNavigate } from "react-router-dom";
import arrow from "../../assets/icons/arrow-right.svg";
import arrowRight from "../../assets/icons/iconamoon_arrow-up-2.svg";
import { Button } from "antd";

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="max-container">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)}>
            <img src={arrow} />
          </button>
          <h4 className="text-xl leading-[18px] font-bold text-dark">
            Checkout
          </h4>
          <div />
        </div>
        <div className="px-5 py-[30px] rounded-[25px] bg-white mt-4">
          <div className="flex-flex-col gap-1">
            <h5 className="text-base leading-4 text-dark">
              LLC registration service
            </h5>
            <p className="text-mini-app text-sm leading-[22px] ">
              llcbooster_dev_bot
            </p>
          </div>
          <div className="border border-pagination my-[10px]" />
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center justify-between gap-1 text-base leading-[22px] text-mini-app">
              <span>Basic package</span>
              <p>0,00 ₽</p>
            </div>
            <div className="flex items-center justify-between gap-1 text-base leading-[22px] text-mini-app">
              <span>State filing fee</span>
              <p>125,00 ₽</p>
            </div>
            <div className="flex items-center justify-between gap-1 text-base leading-[22px] text-mini-app">
              <span>Virtual address</span>
              <p>22,22 ₽</p>
            </div>
            <div className="flex items-center justify-between gap-1 text-base leading-[22px] text-mini-app">
              <span>Registered agent</span>
              <p>22,22 ₽</p>
            </div>
          </div>
          <div className="border border-pagination my-[10px]" />
          <div className="flex items-center justify-between text-dark text-base font-bold leading-4">
            <h5>Total</h5>
            <h5>169,44 ₽</h5>
          </div>
        </div>
        <div className="flex flex-col px-5 py-[15px] rounded-[25px] bg-white mt-4 gap-[15px]">
          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center justify-between">
              <span className="text-base leading-4 font-medium">
                Payment Method
              </span>
              <img src={arrowRight} />
            </div>
            <div className="border border-pagination" />
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center justify-between">
              <span className="text-base leading-4 font-medium">Name</span>
              <div className="flex items-center gap-[7px]">
                <p className="leading-4 text-mini-app">FGHH</p>
                <img src={arrowRight} />
              </div>
            </div>
            <div className="border border-pagination" />
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center justify-between">
              <span className="text-base leading-4 font-medium">Email</span>
              <div className="flex items-center gap-[7px]">
                <p className="leading-4 text-mini-app">FGH@mail.ru</p>
                <img src={arrowRight} />
              </div>
            </div>
            <div className="border border-pagination" />
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center justify-between">
              <span className="text-base leading-4 font-medium">Phone</span>
              <div className="flex items-center gap-[7px]">
                <p className="leading-4 text-mini-app">8(907)563-44-21</p>
                <img src={arrowRight} />
              </div>
            </div>
            <div className="border border-pagination" />
          </div>
        </div>
        <Button
          type="primary"
          size="large"
          className="h-[48px] rounded-full w-full my-4 "
          onClick={() => navigate("/")}
        >
          Pay 169,44 ₽
        </Button>
      </div>
    </section>
  );
};

export default Checkout;
