import MoreCircle from "../CustomIcons/MoreCircle";
import { SliderSlideProps } from "../types";
import Button from "./Button";

interface SliederSlideProps extends SliderSlideProps {
  gameSlider?: boolean;
  heroSlider?: boolean;
  feedbackSlider?: boolean;
}

const SliederSlide = ({
  img,
  img2x,
  imgLG,
  imgLG2x,
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
          <picture>
            <source
              media="(max-width:1919px)"
              srcSet={`${process.env.PUBLIC_URL}${img} 1x, ${process.env.PUBLIC_URL}${img2x} 2x`}
            />
            <img
              className={`min-w-[345px] bg-center bg-cover lg:max-h-[560px]
                      lg:min-w-[1120px]`}
              src={`${process.env.PUBLIC_URL}${imgLG}`}
              srcSet={`${process.env.PUBLIC_URL}${imgLG2x} 2x`}
              alt={alt}
            />
          </picture>
          <div className="hidden lg:block  absolute z-50  bottom-[30%] right-[-5%]">
            <Button title="Детальніше" icon={<MoreCircle />} bg stroke={true} />
          </div>
        </div>
      )}
      {gameSlider && (
        <div
          className={`relative justify-center items-center my-12 flex flex-col gap-y-[6px] shadow-md border
           border-bgSecond rounded-[12px] h-[84px] w-[84px]
           hover:border-textAccent hover:bg-outline transition
           lg:my-5 lg:ml-5 lg:border-bgSecond lg:bg-bg lg:h-[111px] lg:w-[111px]
           `}
        >
          <img
            className={`w-9 lg:w-12 bg-center bg-cover`}
            src={process.env.PUBLIC_URL + img}
            alt={alt}
          />
          <p className="text-[10px] lg:text-[14px]">{text}</p>
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
            <picture>
              <source
                media="(max-width:1919px)"
                srcSet={`${process.env.PUBLIC_URL}${img} 1x, ${process.env.PUBLIC_URL}${img2x} 2x`}
              />
              <img
                className={`py-[13px] lg:py-8 lg:w-[256px]`}
                src={`${process.env.PUBLIC_URL}${imgLG}`}
                srcSet={`${process.env.PUBLIC_URL}${imgLG2x} 2x`}
                alt={alt}
              />
            </picture>
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
