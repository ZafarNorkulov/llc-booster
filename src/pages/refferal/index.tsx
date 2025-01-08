import SectionTitle from "../../components/sectionTitle";
import { Button } from "antd";

const RefferalProgram = () => {
  return (
    <section>
      <div className="max-container">
        <SectionTitle title="Refferal progam" />
        <div className="bg-white rounded-[25px] flex flex-col items-center justify-center text-dark">
          <h3 className="font-bold text-baseleading-[18px] text-center">
            Invite your friends and earn rewards!
          </h3>
          <p className="text-sm leading-4 text-center mt-3 max-w-[300px]">
            Share your referral link, and both you and your friend will receive
            a $20 bonus when they register a company
          </p>
          <div className="bg-blue-light rounded-[25px] w-full mt-6 px-5 py-4 ">
            <h3 className="text-center text-sm font-semibold leading-[22px]">
              Your Referral Link
            </h3>
            <div className="bg-white mt-3 border border-dashed border-dark rounded-[10px] py-3 px-6 border-spacing-[1px] shadow-md shadow-[#96838340]">
              <span>https://llcbooster.com/ref/username</span>
            </div>
            <div className="flex mt-3 justify-between">
              <Button
                type="link"
                size="large"
                className="text-primary text-sm font-semibold leading-4"
              >
                Icon Copy link
              </Button>
              <Button
                type="primary"
                size="large"
                className="text-sm font-medium leading-4"
              >
                Share referral link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefferalProgram;
