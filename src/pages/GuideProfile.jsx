import Footer from "../pages/commonPages/Footer";
import guuideImage from "../assets/guideProfile/guideImage.png";
import customerGirl from '../assets/guideProfile/customerGirlImage.jpg'
import customerBoy from '../assets/guideProfile/customerBoyImage.jpg'


const GuideProfile = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center gap-9 ">
        <div className="w-full md:w-auto">
          <h1 className="font-bold mt-28">Your Selected Guide:</h1>
          <div>
            <div className="flex flex-col md:flex-row gap-9 shadow-xl my-10 p-9 rounded-lg">
              {/* image section */}
              <div className="avatar">
                <div className="w-32 rounded">
                  <img src={guuideImage} alt="Guide" />
                </div>
              </div>
              {/* details section */}
              <div className="ml-4">
                <div className="flex">
                  <button className="bg-[#7BBCB0] btn flex justify-center px-10 rounded-3xl text-white hover:text-black">
                    Kuakata
                  </button>
                  <div className="flex items-center ml-8">
                    <i className="fa-solid fa-star text-[#ffa432]"></i>
                    <i className="fa-solid fa-star text-[#ffa432]"></i>
                    <i className="fa-solid fa-star text-[#ffa432]"></i>
                    <i className="fa-solid fa-star text-[#ffa432]"></i>
                    <i className="fa-regular fa-star text-[#ffa432]"></i>
                    <p className="ml-4">(584 reviews)</p>
                  </div>
                </div>

                <p className="mt-2 font-semibold text-lg">Raihan Ahmed</p>

                {/* Moved the Details Below Raihan Ahmed */}
                <div className="mt-2 space-y-1 flex gap-7">
                  <p className="text-sm">
                    <i className="fa-regular fa-clock"></i> 2 hours
                  </p>
                  <p className="text-sm">
                    <i className="fa-solid fa-car-side"></i> Transport
                  </p>
                  <p className="text-sm">
                    <i className="fa-solid fa-people-group"></i> Family Plan
                  </p>
                </div>
              </div>
              {/* tk section */}
              <div>
                <p className="text-lg text-[#7BBCB0] font-semibold">
                  Tk 250.00 <br />
                  <p className="font-thin text-sm flex justify-end">
                    per person
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full md:w-auto">
          <button className="bg-[#13253F] px-20 py-4 text-white rounded-3xl font-nico text-center">
            Hire Me
          </button>
        </div>
      </div>
      {/* 2nd section */}
      <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-96 my-28 items-center text-center sm:text-left">
  
  {/* Rating Section */}
  <div className="order-1 sm:order-none">
    <div className="flex flex-col sm:flex-row gap-5 items-center">
      <h1 className="font-bold text-7xl">4.0</h1>
      <p className="font-light">14 Reviews</p>
    </div>
    <div className="flex justify-center sm:justify-start items-center mt-2">
      <i className="fa-solid fa-star text-lg text-[#ffa432]"></i>
      <i className="fa-solid fa-star text-[#ffa432]"></i>
      <i className="fa-solid fa-star text-[#ffa432]"></i>
      <i className="fa-solid fa-star text-[#ffa432]"></i>
      <i className="fa-regular fa-star text-[#ffa432]"></i>
    </div>
  </div>

  {/* Proficiency Section */}
  <div className="bg-[#E6E6E6] rounded-3xl order-2 sm:order-none mt-5 sm:mt-0">
    <p className="text-center p-6">
      Proficiency in: English, Bangla, and French. <br /> Guided: Nearly
      20 individuals.
    </p>
  </div>
</div>

      {/* customer review */}
      <div>
  <div className="flex flex-col sm:flex-row justify-center gap-20">

  {/* Customer Review Title */}
  <div className="w-1/4 sm:order-1">
    <p className="font-bold font-Volkhov">Customer Review</p>
  </div>

  {/* Progress Bars Section */}
  <div className="w-3/4 max-w-md sm:order-2">
    <p className="flex justify-between items-center">
      Guide
      <span>4.8</span>
    </p>
    <progress className="progress progress-warning w-full" value="90" max="100"></progress>

    <p className="flex justify-between items-center mt-2">
      Transportation
      <span>3.0</span>
    </p>
    <progress className="progress progress-warning w-full" value="60" max="100"></progress>

    <p className="flex justify-between items-center mt-2">
      Value For Money
      <span>4.5</span>
    </p>
    <progress className="progress progress-warning w-full" value="80" max="100"></progress>

    {/* Safety Rating will be first on mobile */}
    <p className="flex justify-between items-center mt-2 sm:order-1">
      Safety
      <span>4.0</span>
    </p>
    <progress className="progress progress-warning w-full" value="85" max="100"></progress>
  </div>

</div>


  {/* Reviews Section */}
  <div className="mt-6 w-10/12 mx-auto">
  {/* First Review */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center my-4">
    <div className="flex">
      <div className="border-white border-4">
        <div className="avatar">
          <div className="ring-white shadow-2xl mx-3 ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img src={customerGirl} />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <i className="fa-solid fa-star text-lg text-[#ffa432]"></i>
          <i className="fa-solid fa-star text-[#ffa432]"></i>
          <i className="fa-solid fa-star text-[#ffa432]"></i>
          <i className="fa-solid fa-star text-[#ffa432]"></i>
          <i className="fa-regular fa-star text-[#ffa432]"></i>
          <br />
        </div>
        <div className="flex items-center">
          <p className="mr-2">Arlene McCoy</p>
          <i className="fa-solid fa-check-double text-[#7BBCB0]"></i>
        </div>
      </div>
    </div>
    <div>
      <p className="text-end">helpful? <a className="text-[#7BBCB0]" href="">yes</a></p>
      <h2 className="font-bold">Good tour, really well organised</h2>
      <br />
      <p>
        Amazing Guide ! <br />
        Our tour guide in Kuakata was fantastic! They showed us the best spots for sunrise and sunset, shared fascinating local stories, and made the
        <br />
        trip smooth and enjoyable. Their friendly attitude and attention to detail truly made our visit unforgettable. Highly recommend!
      </p>
    </div>
  </div>

  {/* Second Review */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center my-4">
    <div className="flex">
      <div className="border-white border-4">
        <div className="avatar">
          <div className="ring-white shadow-2xl mx-3 ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img src={customerBoy} />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <i className="fa-solid fa-star text-lg text-[#ffa432]"></i>
          <i className="fa-solid fa-star text-[#ffa432]"></i>
          <i className="fa-solid fa-star text-[#ffa432]"></i>
          <i className="fa-solid fa-star text-[#ffa432]"></i>
          <i className="fa-regular fa-star text-[#ffa432]"></i>
          <br />
        </div>
        <div className="flex items-center">
          <p className="mr-2">Jenny Wilson</p>
          <i className="fa-solid fa-check-double text-[#7BBCB0]"></i>
        </div>
      </div>
    </div>
    <div>
      <p className="text-end">helpful? <a className="text-[#7BBCB0]" href="">yes</a></p>
      <h2 className="font-bold">Informative but disappointed not seeing the Changing of the Guards</h2>
      <br />
      <p>
        Fantastic Experience! <br />
        Our visit to Kuakata was unforgettable, thanks to our amazing guide. They were knowledgeable, friendly, and went above and beyond to
        <br />
        ensure we enjoyed every moment. From exploring the beach to learning about local culture, everything was perfect. Highly recommended!
      </p>
    </div>
  </div>
</div>

</div>
<div className="flex justify-center items-center h-screen">
  <a className="text-[#7BBCB0] underline  text-center my-8" href="">
    View More Comments
  </a>
</div>


      <Footer />
    </div>
  );
};

export default GuideProfile;
