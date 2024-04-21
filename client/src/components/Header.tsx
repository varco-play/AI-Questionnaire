import logo from "../assets/image.png";

const Header = () => {
  return (
    <header>
      <div className="bg-blue-600 w-full h-8">
        <h2 className="w-fit h-8 pt-[4px] mx-auto text-white">
          The AI questionnaire personal for your profile
        </h2>
      </div>
      <div className="mx-16">
        <div className="mx-auto max-w-[1450px] min-w-[300px] h-[60px] flex justify-between items-center">
          <div className="w-[17%]">
            <img className="cursor-pointer" src={logo} alt="LOGO" />
          </div>
          <div className="flex items-center mt-4">
            <div className="border flex items-center border-gray-100 bg-white rounded-md mr-16 max-xs:hidden px-4 h-9 text-md cursor-pointer">
              <img
                className="w-[22px] mr-[4.5px]"
                src="https://itskills.uz/static/media/enFlag.2302bfbb83bae20d73d5153f9bf38593.svg"
                alt=""
              />
              <select>
                <option value="engl" defaultChecked>
                  ENG
                </option>
              </select>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="rounded-full w-10 h-10 bg-gray-200"></div>
              <span className="max-xs:hidden">Name</span>
            </div>
          </div>
        </div>
      </div>
      <img src="" alt="" />
    </header>
  );
};

export default Header;
