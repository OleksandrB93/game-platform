import PlaneIcon from "../CustomIcons/PlaneIcon";
import Button from "./Button";

const Letter = () => {
  return (
    <div
      className="mb-12 p-5 bg-[#d9e4f9]  w-[345px] mx-auto rounded-2xl 
                    lg:w-[553px] lg:h-[584px] lg:ml-0 lg:mt-8 lg:p-10"
    >
      <img
        src={process.env.PUBLIC_URL + "/imgs/letter.png"} alt=""
        className="uppercase text-textAccent mx-auto mb-8 lg:hidden"
      />
      <img
        src={process.env.PUBLIC_URL + "/imgs/letterLG.png"} alt=""
        className="uppercase text-textAccent mx-auto mb-8 hidden lg:block lg:mb-8"
      />
      <div>
        <input
          type="text"
          className="required w-full rounded-xl pl-3 py-2 mb-4 placeholder-black
                    lg:py-4 lg:mb-8"
          placeholder="Ваше ім'я"
        />
        <input
          type="text"
          className=" required w-full rounded-xl pl-3 py-2 mb-4 placeholder-black
                    lg:py-4 lg:mb-8"
          placeholder="Ваша пошта"
        />
        <textarea
          className="h-[305px] textarea required w-full rounded-xl pl-3 py-2 mb-4 placeholder-black
                    lg:h-[176px] lg:mb-10 lg:py-4"
          onChange={() => {}}
          name="message"
          value={""}
          placeholder="Напишіть тут своє повідомлення"
          required
        ></textarea>
      </div>
      <Button title="Відправити" bg icon={<PlaneIcon />} />
    </div>
  );
};

export default Letter;
