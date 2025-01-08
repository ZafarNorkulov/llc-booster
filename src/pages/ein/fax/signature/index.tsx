import { useRef, useState } from "react";
import PageSwitcher from "../../../../components/pageSwitcher";
import SectionTitle from "../../../../components/sectionTitle";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "antd";
import Steps from "../../../../components/steps";
import Logo from "../../../../components/logo";

const Signature = () => {
  const sigCanvas = useRef<SignatureCanvas | null>(null);
  const [strokes, setStrokes] = useState<any[]>([]);

  const clearSignature = () => {
    sigCanvas?.current?.clear();
  };

  const handleEndStroke = () => {
    if (sigCanvas.current) {
      const currentStrokes = sigCanvas.current.toData();
      console.log(currentStrokes);
      setStrokes(currentStrokes);
    }
  };
  const undo = () => {
    if (strokes.length > 0 && sigCanvas.current) {
      const newStrokes = strokes.slice(0, -1);
      setStrokes(newStrokes);
      sigCanvas.current.fromData(newStrokes);
    }
  };

  return (
    <section>
      <div className="max-container">
        <Steps activeIndex={2} count={2} />
        <div className="sub-section">
          <Logo />
          <SectionTitle title="Signature" />
          <SignatureCanvas
            ref={sigCanvas}
            penColor="#16242C"
            onEnd={handleEndStroke}
            canvasProps={{
              className:
                "sigCanvas w-full h-[250px] border border-[#E3E5E5] rounded-xl mt-[30px]",
            }}
          />
          <div className="flex justify-between mt-2">
            <Button
              onClick={clearSignature}
              type="text"
              className="bg-[#96969E] text-white"
            >
              Clear
            </Button>
            <p className="text-xs text-center max-w-[128px] text-qestin">
              Leave your signature in the area above
            </p>
            <Button type="primary" onClick={undo}>
              Undo
            </Button>
          </div>
        </div>
        <PageSwitcher  next="/my-companies" />
      </div>
    </section>
  );
};

export default Signature;
