import Facebook from "../CustomIcons/FacebookIcon";
import InstaIcon from "../CustomIcons/InstaIcon";

const OurContacts = () => {
  return (
    <div
      className="mt-8 mb-12 p-5 bg-bg w-[345px] mx-auto rounded-2xl 
                lg:w-[1111px] lg:p-10 lg:mr-0"
    >
      <img
        src={process.env.PUBLIC_URL + "/imgs/contacts.png"} alt=""
        className=" text-textAccent mx-auto mb-4 lg:hidden"
      />
      <img
        src={process.env.PUBLIC_URL + "/imgs/contactsLG.png"} alt=""
        className=" text-textAccent mx-auto mb-4 hidden lg:block lg:mb-8"
      />

      <div className="lg:flex gap-x-8 text-textLink">
        <div>
          <div className="mb-4 lg:mb-8">
            <p className="text-sm mb-2 lg:text-xl">Адреса:</p>
            <p className="text-md italic font-semibold lg:text-2xl">
              Українаб 74000 <br /> м.Львів, Пл. Петрушевича,1
            </p>
          </div>
          <div className="mb-4 lg:mb-8">
            <p className="text-sm mb-2 lg:text-xl">Тедефон:</p>
            <address>
              <a
                className="text-md font-semibold lg:text-2xl"
                href="tel:+380970123456"
              >
                +380970123456
              </a>
            </address>
          </div>
          <div className="mb-4 lg:mb-8">
            <p className="text-sm mb-2 lg:text-xl">Поштова скринька:</p>
            <address>
              <a
                className="text-md font-semibold text-textAccent lg:text-2xl"
                href="mailto:gamesua@icloud.com"
              >
                gamesua@icloud.com
              </a>
            </address>
          </div>
          <div className="lg:text-2xl text-textAccent italic font-bold">
            <div className="flex justify-start items-center mb-4 gap-x-2 lg:mb-8">
              <Facebook />
              <p>@gamesua</p>
            </div>
            <div className="flex justify-start items-center mb-4 gap-x-2">
              <InstaIcon />
              <p>@gamesua</p>
            </div>
          </div>
        </div>
        <div>
          <iframe
            className="rounded-2xl lg:w-[666px] lg:h-[440px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.5824943858297!2d24.03360844123899!3d49.83151173185356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add5d618a32c7%3A0x36eff77011f1f236!2z0L_Quy4g0J_QtdGC0YDRg9GI0LXQstC40YfQsCwgMSwg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwNQ!5e0!3m2!1sru!2sua!4v1692226791557!5m2!1sru!2sua"
            width="305"
            height="305"
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OurContacts;
