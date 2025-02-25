import mastercard from "../../assets/paymentMethodImages/mastercard.png";
import american_express from "../../assets/paymentMethodImages/american_express.png";
import applePay from "../../assets/paymentMethodImages/applePay.png";
import bitPay from "../../assets/paymentMethodImages/bitPay.png";
import discover from "../../assets/paymentMethodImages/discover.png";
import Gpay from "../../assets/paymentMethodImages/Gpay.png";
import maestro from "../../assets/paymentMethodImages/maestro.png";
import payPal from "../../assets/paymentMethodImages/payPal.png";
import sofert from "../../assets/paymentMethodImages/sofert.png";
import visa from "../../assets/paymentMethodImages/visa.png";

const Footer = () => {
  return (
    <div>
      {/* Main Footer */}
      <footer className="bg-[#13253F] text-white p-6 md:p-10">
        <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Brand & Country Selection */}
          <nav>
            <h6 className="font-nico text-xl">Tour Buddy</h6>
            <div className="mt-4 space-y-2">
              <select className="select select-bordered text-cyan-100 bg-transparent border-cyan-100 w-full md:w-auto">
                <option disabled selected>Australia</option>
                <option>Bangladesh</option>
                <option>Pakistan</option>
                <option>Afghanistan</option>
              </select> <br />
              <select className="select select-bordered text-cyan-100 bg-transparent border-cyan-100 w-full md:w-auto">
                <option disabled selected>U.S. Dollar ($)</option>
                <option>UK Pound</option>
                <option>Bangladesh Taka</option>
                <option>Indian Rupee</option>
              </select>
            </div>
          </nav>

          {/* Payment Methods - Responsive Grid */}
          <nav className="flex justify-center md:justify-end lg:justify-start">
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4">
              <img src={mastercard} alt="MasterCard" className="w-10 h-7" />
              <img src={american_express} alt="American Express" className="w-10 h-7" />
              <img src={applePay} alt="Apple Pay" className="w-10 h-7" />
              <img src={bitPay} alt="BitPay" className="w-10 h-7" />
              <img src={discover} alt="Discover" className="w-10 h-7" />
              <img src={Gpay} alt="Google Pay" className="w-10 h-7" />
              <img src={maestro} alt="Maestro" className="w-10 h-7" />
              <img src={payPal} alt="PayPal" className="w-10 h-7" />
              <img src={sofert} alt="Sofert" className="w-10 h-7" />
              <img src={visa} alt="Visa" className="w-10 h-7" />
            </div>
          </nav>
        </div>
      </footer>

      {/* Social Media Section */}
      <footer className="bg-[#0F1E32] text-white p-4">
        <aside className="flex justify-center md:justify-end gap-3">
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
