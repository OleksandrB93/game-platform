import PlaneIcon from "../CustomIcons/PlaneIcon";
import Button from "./Button";

const Letter = () => {
  return (
    <div className="mb-12 p-5 bg-outline w-[345px] mx-auto rounded-2xl ">
      <img
        src={process.env.PUBLIC_URL + "/imgs/letter.png"}
        className="uppercase text-textAccent mx-auto mb-8"
      />
      <div>
        <input
          type="text"
          className="required w-full rounded-xl pl-3 py-2 mb-4 placeholder-black"
          placeholder="Ваше ім'я"
        />
        <input
          type="text"
          className=" required w-full rounded-xl pl-3 py-2 mb-4 placeholder-black"
          placeholder="Ваша пошта"
        />
        <textarea
          className="h-[305px] textarea required w-full rounded-xl pl-3 py-2 mb-4 placeholder-black"
          onChange={() => {}}
          name="message"
          value={""}
          placeholder="message"
          required
        ></textarea>
      </div>
      <Button title="Відправити" bg icon={<PlaneIcon />} />
    </div>
  );
};

export default Letter;
