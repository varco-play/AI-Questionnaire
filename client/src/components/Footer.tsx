import { Link } from "react-router-dom";
import logo from "../assets/image.png";

const Footer = () => {
  return (
    <section className="w-full xs:h-64 max-xs:h-32 relative">
      <div className="w-full h-full absolute">
        <div className="w-fit mx-auto mt-14 max-xs:mt-4">
          <div className="mx-10">
            <div className="flex items-center justify-between gap-10">
              <div className="flex flex-col">
                <h3>Header</h3>
                <Link to={"#"}>Example</Link>
                <Link to={"#"}>Example</Link>
              </div>
              <div className="flex flex-col">
                <h3>Header</h3>
                <Link to={"#"}>Example</Link>
                <Link to={"#"}>Example</Link>
                <Link to={"#"}>Example</Link>
              </div>
              <div className="flex flex-col">
                <h3>Header</h3>
                <Link to={"#"}>Example</Link>
                <Link to={"#"}>Example</Link>
                <Link to={"#"}>Example</Link>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <img src={logo} alt="logo" />
              </div>
              <div className="flex gap-6">
                <Link to={"#"}>instagram</Link>
                <Link to={"#"}>telegram</Link>
                <Link to={"#"}>youtube</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-6 border-t-[1px] border-gray-600 text-gray-600 font-light text-sm">
          <p className="w-fit pt-1 mx-auto">Created by MicroCoders team</p>
        </div>
      </div>
      <div className="w-full h-full bg-footer bg-cover bg-no-repeat"></div>
    </section>
  );
};

export default Footer;
