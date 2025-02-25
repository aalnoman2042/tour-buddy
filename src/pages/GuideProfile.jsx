import Footer from "../pages/commonPages/Footer";
import guuideImage from '../assets/guideProfile/guideImage.png'
const GuideProfile = () => {
  return (
    <div>
      <div className="flex justify-center gap-9">
        <div>
          <h1>your selected guide</h1>
          <div className="flex">
            <div className="flex">
              <div className="avatar">
                <div className="w-32 rounded">
                  <img src={guuideImage} />
                </div>
              </div>
              <div className="flex">
              <button className="bg-[#7BBCB0] btn  flex justify-center px-5 text-white hover:text-black">Kuakata</button>
              <p className="mx-8">|</p>
                <div className="flex">
                <i className="fa-star fa-solid text-[#ffa432]"></i>
                <i className="fa-solid fa-star text-[#ffa432]"  ></i>
                <i className="fa-solid fa-star text-[#ffa432]" ></i>
                <i className="fa-solid fa-star text-[#ffa432]" ></i>
                <i className="fa-star fa-regular text-[#ffa432]"></i>
                <p className="mx-4">(584 reviews)</p>
                </div>
              </div>
            </div>
            <div>Raihan ahmed</div>
          </div>
        </div>

        <div>
          <button>Hire me</button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default GuideProfile;
