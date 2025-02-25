import PaymentFooter from "../pages/commonPages/PaymentFooter";
import paymentImage from "../assets/paymentMethodImages/payment.jpg";
import paymentOptions from "../assets/paymentMethodImages/paymentOptions.jpg";

const PaymentPage = () => {
  return (
    <div>
      <h2 className="ml-36 font-bold my-6">Payment</h2>
      <div className="flex flex-col md:flex-row justify-center gap-24 mt-9">
        
        {/* Payment Image Section */}
        <div className="w-full sm:w-64 md:w-72 sm:h-[220px] md:h-[260px] border-2 border-black rounded-3xl mb-6 sm:mb-8 md:mb-0 flex justify-center items-center">
  <img
    className="w-full sm:w-64 md:w-72 h-auto sm:h-[200px] md:h-64 border-2 rounded-3xl"
    src={paymentImage}
    alt="Payment"
  />
</div>


        {/* Form Section */}
        <div className="w-full md:w-auto">
          <h1 className="font-Inria font-semibold">choose payment method</h1>
          <p className="font-bold my-4">Name:</p>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="your name" />
          </label>
          <p className="font-bold my-4">Transaction Id:</p>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              className="grow"
              placeholder="your Transaction Id:"
            />
          </label>
          <p className="font-bold my-4">Phone Number:</p>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="your number" />
          </label>
          <p className="font-bold my-4">Pin Code:</p>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              className="grow"
              placeholder="Give your pin"
            />
          </label>
          <div className="my-10">
            <h1 className="font-bold mb-4">select method:</h1>
            <div className="flex flex-wrap justify-start gap-4">
              <div>
                <button className="btn text-white bg-[#37B1E2] hover:text-black rounded-full px-6 py-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>BKASH
                </button>
              </div>
              <div>
                <button className="btn text-white bg-[#37B1E2] hover:text-black rounded-full px-6 py-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>NAGAD
                </button>
              </div>
              <div>
                <button className="btn text-white bg-[#37B1E2] hover:text-black rounded-full px-6 py-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>UPAY
                </button>
              </div>
              <div>
                <button className="btn text-white bg-[#37B1E2] hover:text-black rounded-full px-6 py-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>VISA
                </button>
              </div>
              <div>
                <button className="btn text-white bg-[#37B1E2] hover:text-black rounded-full px-6 py-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  MasterCard
                </button>
              </div>
              <div>
                <button className="btn text-white bg-[#37B1E2] hover:text-black rounded-full px-6 py-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>others
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Payment Button */}
      <div className="flex justify-center mb-5">
        <button className="mx-auto text-white md:w-[240px] h-[59px] rounded-full btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#13253F]">
          confirm payment
        </button>
      </div>

      {/* Payment Options Image */}
      <div>
        <img
          className="md:w-[823px] md:h-[347px] mx-auto"
          src={paymentOptions}
          alt="Payment Options"
        />
      </div>

      <PaymentFooter />
    </div>
  );
};

export default PaymentPage;
