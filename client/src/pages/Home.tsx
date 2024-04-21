import { useState } from "react";
import {
  FiEdit3,
  MdOutlineMail,
  MdDateRange,
  FaPhoneFlip,
  IoPersonSharp,
  RxCross2,
} from "../utils/icons";
import PersonalInformationPopup from "../components/PersonalInformationPopup";
import { Link } from "react-router-dom";

const Home = () => {
  const [popup, setPopup] = useState(false);
  localStorage.setItem("field", "Sofware Engineer, React developer");

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-[1368px] mx-auto">
        <div className="flex max-[1350px]:flex-col justify-center items-center gap-5">
          <div className="w-full max-w-[689px] min-w-[300px] min-h-[286px] bg-white rounded-lg p-5 max-xs:mx-auto">
            <div
              className="flex justify-end gap-3 items-center mb-2"
              onClick={() => setPopup(!popup)}
            >
              <div className="cursor-pointer flex items-center gap-4">
                <FiEdit3 /> Edit
              </div>
            </div>
            <div className="flex items-center justify-start max-sm:justify-center max-sm:flex-col gap-3 mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <p className="text-xl font-medium">
                {localStorage.getItem("name")}
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 mb-2">
              <MdOutlineMail className="text-xl" />
              <p className="pt-[0.5px]">Email: </p>
              <p className="text-gray-500">
                {localStorage.getItem("userEmail")}
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 mb-2">
              <MdDateRange className="text-xl" />{" "}
              <p className="pt-[1px]">Birth Date:</p>{" "}
              <p className="text-gray-500 text-base pt-[1px]">
                {localStorage.getItem("birthDate") || "- - -"}
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 mb-2">
              <FaPhoneFlip className="text-[15px]" /> <p>Telefon Num:</p>
              <p className="text-gray-500">
                {localStorage.getItem("phoneNumber") || "- - -"}
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 mb-2">
              <IoPersonSharp /> <p>Role:</p>{" "}
              <p className="text-gray-500">
                {localStorage.getItem("field") || " - - -"}
              </p>
            </div>
          </div>
          <div className="w-full  max-w-[402px] bg-white rounded max-xs:mx-auto max-xs:max-w-[689px]">
            <button><Link to="/questionnaire">Questionnaire</Link></button>
          </div>
        </div>
      </div>
      {popup && (
        <div className="w-[100vw] h-[100vh] fixed overflow-y-scroll z-[100] top-0 left-0 bg-transparent flex items-center justify-center">
          <PersonalInformationPopup onClose={() => setPopup(!popup)} onSave={() => {}} />{" "}
        </div>
      )}
    </section>
  );
};

export default Home;
