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
          <div className="flex flex-col md:flex-row gap-6 md:gap-9 shadow-xl my-10 p-6 md:p-9 rounded-lg w-full max-w-4xl mx-auto">
  {/* Image Section */}
  <div className="flex justify-center md:justify-start">
    <div className="avatar">
      <div className="w-24 md:w-32 rounded">
        <img src={guuideImage} alt="Guide" />
      </div>
    </div>
  </div>

  {/* Details Section */}
  <div className="flex-1">
    <div className="flex flex-wrap items-center gap-4">
      <button className="bg-[#7BBCB0] btn px-6 md:px-10 py-2 rounded-3xl text-white hover:text-black">
        Kuakata
      </button>
      <div className="flex items-center">
        <i className="fa-solid fa-star text-[#ffa432]"></i>
        <i className="fa-solid fa-star text-[#ffa432]"></i>
        <i className="fa-solid fa-star text-[#ffa432]"></i>
        <i className="fa-solid fa-star text-[#ffa432]"></i>
        <i className="fa-regular fa-star text-[#ffa432]"></i>
        <p className="ml-2">(584 reviews)</p>
      </div>
    </div>

    <p className="mt-2 font-semibold text-lg text-center md:text-left">
      Raihan Ahmed
    </p>

    {/* Details Section */}
    <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-4">
      <p className="text-sm flex items-center">
        <i className="fa-regular fa-clock mr-2"></i> 2 hours
      </p>
      <p className="text-sm flex items-center">
        <i className="fa-solid fa-car-side mr-2"></i> Transport
      </p>
      <p className="text-sm flex items-center">
        <i className="fa-solid fa-people-group mr-2"></i> Family Plan
      </p>
      <p><i className="fa-solid fa-phone-volume"></i>
        +880182937879</p>
    </div>
    <div className="my-4">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59257.68239994782!2d90.12686369778997!3d21.834181761714756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aa7d1b38a082bd%3A0xce33209b2416f816!2sKuakata!5e0!3m2!1sen!2sbd!4v1740494971091!5m2!1sen!2sbd" width="100" height="100" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>

  {/* Price Section */}
  <div className="text-center md:text-right">
    <p className="text-lg text-[#7BBCB0] font-semibold">
      Tk 250.00
      <br />
      <span className="font-thin text-sm">per person</span>
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
    <i className="fa-solid fa-language"></i> Proficiency in: English, Bangla, and French. <br /> Guided: Nearly
      20 individuals.
    </p>
  </div>
</div>

      {/* customer review */}
      <div>
      <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-20 w-full mx-4 sm:mx-0">

{/* Customer Review Title */}
<div className="w-full sm:w-1/4 text-center sm:text-left sm:order-1">
  <p className="font-bold font-Volkhov text-lg sm:text-xl">Customer Review</p>
</div>

{/* Progress Bars Section */}
<div className="w-full sm:w-3/4 max-w-md sm:order-2">
  
  {/* Safety Rating (Will Be First on Mobile) */}
  <div className="order-1 sm:order-none">
    <p className="flex justify-between items-center mt-2">
      Safety
      <span>4.0</span>
    </p>
    <progress className="progress progress-warning w-full" value="85" max="100"></progress>
  </div>

  {/* Other Ratings */}
  <p className="flex justify-between items-center mt-2">
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
