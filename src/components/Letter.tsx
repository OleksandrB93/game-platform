import { useState } from "react";
import PlaneIcon from "../CustomIcons/PlaneIcon";
import Button from "./Button";
import emailjs from "@emailjs/browser";

const Letter = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target }: any) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_76fq3w7",
        "template_6jo6u26",
        {
          from_name: form.name,
          to_name: "Game Platform",
          from_email: form.email,
          to_email: "barabashsan4ik@gmail.com",
          message: form.message,
        },
        "xi2iKAkwv8UkrsXaB"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      className="mb-12 p-5 bg-bg  w-[345px] mx-auto rounded-2xl 
                    lg:w-[553px] lg:h-[584px] lg:ml-0 lg:mt-8 lg:p-10"
    >
      <img
        src={process.env.PUBLIC_URL + "/imgs/letter.png"}
        alt=""
        className="uppercase text-textAccent mx-auto mb-8 lg:hidden"
      />
      <img
        src={process.env.PUBLIC_URL + "/imgs/letterLG.png"}
        alt=""
        className="uppercase text-textAccent mx-auto mb-8 hidden lg:block lg:mb-8"
      />
      <div>
        <form onSubmit={handleSubmit} action="">
          <input
            className="required w-full rounded-xl pl-3 py-2 mb-4 placeholder-black
                    lg:py-4 lg:mb-8"
            placeholder="Ваше ім'я"
            onChange={handleChange}
            type="text"
            name="name"
            value={form.name}
            required
          />
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={form.email}
            required
            className=" required w-full rounded-xl pl-3 py-2 mb-4 placeholder-black
                    lg:py-4 lg:mb-8"
            placeholder="Ваша пошта"
          />
          <textarea
            onChange={handleChange}
            name="message"
            value={form.message}
            required
            className="h-[305px] textarea required w-full rounded-xl pl-3 py-2 mb-4 placeholder-black
                    lg:h-[176px] lg:mb-10 lg:py-4"
            placeholder="Напишіть тут своє повідомлення сервіс: Emailjs"
          ></textarea>
          <Button
            loading={loading}
            type="submit"
            title="Відправити"
            bg
            icon={<PlaneIcon />}
          />
        </form>
      </div>
    </div>
  );
};

export default Letter;
