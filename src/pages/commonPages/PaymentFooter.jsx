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
const paymentFooter = () => {
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
        <nav>
          <h4 className="footer-title">Help</h4>
          <a href="">Contact us</a>
          <a href="">FAQs</a>
          <a href="">Terms and conditions</a>
          <a href="">privacy policy</a>
          <a href="">sitemap</a>
        </nav>
        <nav>
          <h4 className="footer-title">payment</h4>
          <a href="">About us</a>
          <a href="">Blog</a>
          <a href="">press room</a>
          <a href="">career</a>
        </nav>

        <nav className="left-6">
          <h2 className="mb-5 footer-title">paymet method possible</h2>
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
      <footer className="footer text-white p-4 bg-[#13253F]">
        <p>Copyright 2025 Tour Buddy. All Rights Reserved</p>
        <aside className="flex gap-6 ml-auto ">
          <a href=""><i className="fa-brands fa-facebook-f"></i></a>
          <a href=""><i className="fa-brands fa-twitter"></i></a>
          <a href=""><i className="fa-brands fa-square-instagram"></i></a>
          <a href=""><i className="fa-brands fa-pinterest"></i></a>
    
        </aside>
      </footer>
    </div>
  );
};

export default paymentFooter;
