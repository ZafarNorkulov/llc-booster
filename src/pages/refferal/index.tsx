import SectionTitle from "../../components/sectionTitle";
import { Button } from "antd";
import copy from "../../assets/icons/copy-2.svg";
import share from "../../assets/icons/share-outline.svg";
import Logo from "../../components/logo";
import { useState } from "react";

const RefferalProgram = () => {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const handleCopy = (text: string) => {
  
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // 2 seconds success message
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        setCopySuccess(false);
      });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "My Companies",
          text: "Check out my companies on this app!",
          url: window.location.href, // Sizning sahifangizning URL manzili
        })
        .then(() => {
          console.log("Successfully shared!");
        })
        .catch((error) => {
          console.error("Error sharing", error);
        });
    } else {
      alert("Share API is not supported in your browser.");
    }
  };
  return (
    <section>
      <div className="max-container">
        <Logo />
        <SectionTitle title="Refferal progam" />
        <div className="bg-white rounded-[25px] flex flex-col items-center justify-center p-[14px] text-dark">
          <h3 className="font-bold text-baseleading-[18px] text-center">
            Invite your friends and earn rewards!
          </h3>
          <p className="text-sm leading-4 text-center mt-3 max-w-[300px]">
            Share your referral link, and both you and your friend will receive
            a $20 bonus when they register a company
          </p>
          <div className="bg-blue-light rounded-[25px] w-full  mt-6 px-[14px] py-4 ">
            <h3 className="text-center text-sm font-semibold leading-[22px]">
              Your Referral Link
            </h3>
            <div className="bg-white mt-3 border border-dashed border-dark rounded-[10px] py-3 px-4 border-spacing-[1px] shadow-md text-sm font-bold leading-4 shadow-[#96838340]">
              <span>https://llcbooster.com/ref/username</span>
            </div>
            <div className="flex mt-3 justify-between">
              <Button
                type="link"
                size="large"
                className="text-color2 text-sm font-semibold leading-4"
                onClick={() =>
                  handleCopy("https://llcbooster.com/ref/username")
                }
              >
                <img src={copy} /> Copy link
              </Button>
              <Button
                type="primary"
                size="large"
                className="text-sm font-medium leading-4"
                onClick={handleShare}
              >
                <img src={share} /> Share referral link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefferalProgram;
