import Steps from "../../../components/steps";
import SectionTitle from "../../../components/sectionTitle";
import { Checkbox, Form, Input, Radio, RadioChangeEvent, Select } from "antd";
import { useEffect, useRef, useState } from "react";
import Logo from "../../../components/logo";
import PageSwitcher from "../../../components/pageSwitcher";
import warning from "../../../assets/icons/Vector.svg";
import CustomModal from "../../../components/modal";
import { StringObject } from "../../../types/data.models";
import ConfirmModal from "../../../components/modal/confirmModal";
import { States } from "../../../constants";
import { useNavigate } from "react-router-dom";

const Members = () => {
  const [founder, setFounder] = useState("1");
  const [mention, setMention] = useState("@");
  const [radioVal, setRadioVal] = useState("Individual");
  const [modalId, setModalId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [formModal, setIsFormModal] = useState<StringObject>({});

  const navigate = useNavigate();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Faqatgina qiymatni yangilash (boshida @ belgisi qoladi)
    const newValue = e.target.value.startsWith("@")
      ? e.target.value
      : `@${e.target.value}`;
    setMention(newValue);
  };
  const radioChange = (e: RadioChangeEvent) => {
    setRadioVal(e.target.value);
  };
  const isIndividual = radioVal === "Individual";

  const toggleModal = (id: number | null) => {
    setModalId((prevId) => (prevId === id ? null : id));
  };

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);

  const [form] = Form.useForm();
  const onFinish = (value: StringObject) => {
    setIsFormModal(value);
  };
  const handleClick = () => {
    form
      .validateFields()
      .then(() => {
        // Agar forma valid bo'lsa, sahifaga o'tadi
        form.submit();
        if (radioVal === "Company") {
          setOpenConfirm(true);
        } else {
          navigate("/form/register-agent");
        }
      })
      .catch((errorInfo) => {
        // Agar forma valid bo'lmasa, xatolikni konsolda ko'rsatadi
        console.error("Validate Failed:", errorInfo);
        console.log(formModal);
      });
  };

  return (
    <section className="members">
      <div className="max-container">
        <Steps activeIndex={5} count={7} />
        <div className="sub-section">
          <div className="gradient-bg" />
          <Logo />
          <div className="flex items-center justify-center gap-1">
            <SectionTitle title="Members" />
            <img
              src={warning}
              className="w-4 h-4 mb-[25px] cursor-pointer"
              alt=""
              onClick={() => setOpen(true)}
            />
          </div>
          <Form size="large" form={form} onFinish={onFinish}>
            <Form.Item
              label={
                <div className="flex items-center gap-1">
                  <span>Choose number of founders</span>
                  <img
                    src={warning}
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => toggleModal(1)}
                  />
                </div>
              }
            >
              <Select defaultValue={"1"} onChange={(e) => setFounder(e)}>
                <Select.Option value={"1"}>1</Select.Option>
                <Select.Option value={"2"}>2</Select.Option>
              </Select>
            </Form.Item>
            <h3 className="text-[22px] text-dark font-bold leading-[36px]">
              Member №{founder}{" "}
            </h3>
            <Form.Item className="mt-4">
              <Radio.Group
                className="flex flex-col gap-[6px] "
                defaultValue={"Individual"}
                onChange={radioChange}
              >
                <Radio
                  value="Individual"
                  className="flex items-center  p-4 rounded-2xl"
                >
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-[#1f2024]">
                      Individual
                    </span>{" "}
                    <img
                      src={warning}
                      className="w-4 h-4 cursor-pointer"
                      onClick={() => toggleModal(2)}
                    />
                  </div>
                </Radio>
                <Radio value="Company" className="p-4 rounded-2xl">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-[#1f2024]">
                      Company
                    </span>
                    <img
                      src={warning}
                      className="w-4 h-4 cursor-pointer"
                      onClick={() => toggleModal(3)}
                    />
                  </div>
                </Radio>
              </Radio.Group>
            </Form.Item>
            <div className="border border-white border-dashed mb-4" />
            <span className="text-primary text-base leading-[16px] font-medium">
              Fill based on
            </span>
            <Form.Item className="mt-4">
              <Checkbox.Group className="flex flex-col gap-[6px] ">
                {isIndividual ? (
                  <Checkbox
                    value="Individual"
                    className="flex items-center  p-4 rounded-[8px]"
                  >
                    <div className="flex items-center gap-1">
                      <span className="text-base leading-[16px] text-dark">
                        Katerina Sheremet
                      </span>
                    </div>
                  </Checkbox>
                ) : (
                  ""
                )}
                <Checkbox value="Company" className="  p-4 rounded-[8px]">
                  <div className="flex items-center gap-1">
                    <span className="text-base leading-[16px] text-dark">
                      Alabama, Prospekt Mira 1, New York, NY 10012, US.
                    </span>
                  </div>
                </Checkbox>
              </Checkbox.Group>
            </Form.Item>

            <div className="border border-white border-dashed mb-4" />
            {isIndividual ? (
              <>
                <Form.Item label="Title" name={"title"}>
                  <Input
                    value={mention}
                    onChange={handleChange}
                    defaultValue={"@"}
                  />
                  <p className="text-xs text-qestin mt-[6px]">
                    MGR, AMBR, AP or other designated title (s)
                  </p>
                </Form.Item>
                <Form.Item label="First name">
                  <Input placeholder="Oksana" />
                </Form.Item>
                <Form.Item label="Last name">
                  <Input placeholder="Name" />
                </Form.Item>
              </>
            ) : (
              <>
                <Form.Item label="Company name">
                  <Input />
                </Form.Item>
                <Form.Item label="Representative Signing On Behalf Of Entity">
                  <Input />
                </Form.Item>
              </>
            )}

            <Form.Item label={`Street ${!isIndividual ? "Address" : ""}`}>
              <Input placeholder="Text" />
            </Form.Item>
            <Form.Item label="State">
              <Select placeholder="State">
                {States?.map((item) => (
                  <Select.Option value={item.id}>{item.name}</Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="ZipCode">
              <Input placeholder="12345" />
            </Form.Item>
            <Form.Item label="Percentage of ownership">
              <Select defaultValue={100}>
                <Select.Option value={100}>100%</Select.Option>
              </Select>
            </Form.Item>
          </Form>
          <PageSwitcher next="/form/register-agent" onClick={handleClick} />
          {/* Modals */}
          <CustomModal
            open={modalId == 1}
            title="Founders"
            desc="The owner in an LLC is a person or entity holding an equity interest in the company. Owners can be either individuals or legal entities. They have the right to receive profits generated by the company, proportional to their ownership share, and participate in major decision-making unless the operating agreement delegates these powers to a hired manager virtual address service"
            setOpen={() => toggleModal(null)}
          />
          <CustomModal
            open={modalId == 2}
            title="Individual"
            desc="Select it Member is a person"
            setOpen={() => toggleModal(null)}
          />
          <CustomModal
            open={modalId == 3}
            title="Company"
            desc="Select it Member is a company"
            setOpen={() => toggleModal(null)}
          />
          <ConfirmModal
            open={openConfirm}
            setFormModal={setIsFormModal}
            enter="/form/register-agent"
            onClick={() => {
              setOpenConfirm(false);
            }}
          />

          {/* For title Modal */}

          <div
            className={`${
              open ? "" : "hidden"
            } fixed bg-[#00000069] top-0 left-0 bottom-0 right-0 overflow-y-scroll z-10 flex justify-center items-center`}
          >
            <div
              className={`max-container w-full ${open ? "modal" : "scale-0"}`}
            >
              <div
                ref={modalRef}
                className={`content mt-[50vh] p-[23px] relative rounded-[19px] bg-white flex flex-col items-center`}
              >
                {/* icon */}
                <div
                  className={`rounded-full 
                       w-[80px] h-[80px] p-[15px] shadow-md absolute -translate-x-1/2 left-1/2 top-0 -translate-y-1/2
                     
                   bg-white `}
                >
                  <div className="bg-[#E6F7FF5C] rounded-full flex justify-center items-center p-[14px]">
                    <img src={warning} />
                  </div>
                </div>
                <div className="flex flex-col mt-[30px] gap-[10px] text-dark mb-[21px]">
                  <h3 className="text-xl text-center leading-[27px] font-bold text-[#202020]">
                    Title
                  </h3>
                  <p className="text-base leading-[18px] ">
                    A title in an LLC represents the position or role a person
                    holds within the company, reflecting their responsibilities
                    and authority.
                  </p>
                  <h4>The primary titles include:</h4>
                  <ul className="text-base flex flex-col  leading-[18px]">
                    <li>
                      1. Member (MBR) - an LLC participant who holds an
                      ownership interest in the company. Participates in
                      decision-making if the company is member-managed.
                    </li>
                    <li>
                      2. Authorized Member (AMBR) - an authorized participant
                      who can officially represent the LLC.
                    </li>
                    <li>
                      3. Manager (MGR) - a manager who oversees the day-to-day
                      operations of the LLC if the members choose to delegate
                      management.
                    </li>
                    <li>
                      4. Authorized Person (AP) - an authorized individual who
                      is not necessarily a member or manager but has the right
                      to file documents and represent the company.
                    </li>
                  </ul>
                  <p className="text-base leading-[18px]">
                    Other titles may also be used as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
