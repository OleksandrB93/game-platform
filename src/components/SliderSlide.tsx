import { SliderSlideProps } from "../types";

interface SliederSlideProps extends SliderSlideProps {
  gameSlider?: boolean;
  heroSlider?: boolean;
  feedbackSlider?: boolean;
}

const SliederSlide = ({
  img,
  alt,
  text,
  gameSlider,
  heroSlider,
  feedbackSlider,
  bage,
  about,
  job,
  fullName,
}: SliederSlideProps) => {
  return (
    <div
      className="max-w-[345px]
                lg:max-w-[1120px]"
    >
      {heroSlider && (
        <div className={`flex justify-center items-center`}>
          <img
            className={`min-w-[345px] bg-center bg-cover lg:max-h-[560px]
                      lg:min-w-[1120px]`}
            src={process.env.PUBLIC_URL + img}
            alt={alt}
          />
          <p className="text-[10px]">{text}</p>
        </div>
      )}
      {gameSlider && (
        <div
          className={`relative justify-center items-center my-12 flex flex-col gap-y-[6px] shadow-md border
           border-[#AECBFF] rounded-[12px] h-[84px] w-[84px]
           hover:border-textAccent hover:bg-outline hover:translate-y-[-1px] transition
           lg:my-5 lg:ml-5 lg:border-[#aecbff] lg:bg-[#d9e4f9] lg:h-[111px] lg:w-[111px]
           `}
        >
          <img
            className={`max-w-[36px] bg-center bg-cover`}
            src={process.env.PUBLIC_URL + img}
            alt={alt}
          />
          <p className="text-[10px]">{text}</p>
          {bage && (
            <div className="absolute z-100 -top-[12px] right-0 flex justify-center items-center w-6 h-6 rounded-full bg-red">
              <p className="text-white">{bage}</p>
            </div>
          )}
        </div>
      )}
      {feedbackSlider && (
        <div
          className={`flex flex-col justify-around items-center rounded-2xl bg-white
                    hover:shadow-sm`}
        >
          <div className="bg-outline w-full  h-auto  rounded-t-2xl flex justify-center items-center">
            <img
              className={`py-[13px] lg:py-8 lg:w-[256px]`}
              src={process.env.PUBLIC_URL + img}
              alt={alt}
            />
          </div>

          <div
            className="text-[16px] pl-4 pr-5 mb-5
                          lg:text-[26px] lg:pl-8"
          >
            <p
              className=" py-4 italic font-semibold h-auto
                          lg:py-6"
            >
              “{about}“
            </p>
            <div className="">
              <p className="text-black mb-2 lg:mb-4">{fullName}</p>
              <p className="text-black">{job}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliederSlide;
