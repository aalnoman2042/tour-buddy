import mastercard from "../../assets/paymentMethodImages/mastercard.png";
import american_express from "../../assets/paymentMethodImages/american_express.png";
import applePay from "../../assets/paymentMethodImages/applePay.png";
import bitPay from "../../assets/paymentMethodImages/bitPay.png";
import dicover from "../../assets/paymentMethodImages/discover.png";
import Gpay from "../../assets/paymentMethodImages/Gpay.png";
import maestro from "../../assets/paymentMethodImages/maestro.png";
import payPal from "../../assets/paymentMethodImages/payPal.png";
import sofert from "../../assets/paymentMethodImages/sofert.png";
import visa from "../../assets/paymentMethodImages/visa.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer text-white  p-10 bg-[#13253F] ">
        <nav>
          <h6 className=" font-nico">tour buddy</h6>
          <select className="select select-bordered join-item text-cyan-100 bg-transparent border-spacing-2  border-cyan-100">
            <option disabled selected className="bg-[#13253F]">
              Australia
            </option>
            <option className="bg-[#13253F]">Bangladesh</option>
            <option className="bg-[#13253F]">Pakistan</option>
            <option className="bg-[#13253F]">Afganistan</option>
          </select>
          <select className="select select-bordered join-item text-cyan-100 bg-transparent border-spacing-2  border-cyan-100">
            <option disabled selected className="bg-[#13253F]">
              U.S. Dollar ($)
            </option>
            <option className="bg-[#13253F]">UK Pound</option>
            <option className="bg-[#13253F]">Banladesh TK</option>
            <option className="bg-[#13253F]">india Rupee</option>
          </select>
        </nav>

        <nav className="left-6"> 
          <div className="grid grid-flow-col grid-rows-2 gap-4">
            <img src={mastercard} alt="" className="w-[40px] h-[26px]" />
            <img src={american_express} alt="" className="w-[40px] h-[26px]" />
            <img src={applePay} alt="" className="w-[40px] h-[26px]" />
            <img src={bitPay} alt="" className="w-[40px] h-[26px]" />
            <img src={dicover} alt="" className="w-[40px] h-[26px]" />
            <img src={Gpay} alt="" className="w-[40px] h-[26px]" />
            <img src={maestro} alt="" className="w-[40px] h-[26px]" /> 
            <img src={payPal} alt="" className="w-[40px] h-[26px]" />
            <img src={sofert} alt="" className="w-[40px] h-[26px]" />
            <img src={visa} alt="" className="w-[40px] h-[26px]" />
          </div>
        </nav>
      </footer>
      <footer className="footer text-base-content p-4 bg-[#0F1E32]">
        <aside className="flex gap-3 ml-auto ">
          <div className="w-8 h-8 bg-[#4B69B1] rounded-full"></div>
          <div className="w-8 h-8 bg-[#37B1E2] rounded-full"></div>
          <div className="w-8 h-8 bg-[#C23772] rounded-full"></div>
          <div className="w-8 h-8 bg-[#E83F3A] rounded-full"></div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
