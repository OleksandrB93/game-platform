interface ButtonProps {
  title: string;
  icon: JSX.Element;
  bg?: boolean;
  width?: string;
}

const Button = ({ title, icon, bg, width }: ButtonProps) => {
  return (
    <button
      className={`max-w-[390px] max-h-[56px] mx-auto flex justify-center items-center px-[15.25px] py-[17px] gap-x-2 ${
        width ? `w-widthSm` : "w-[165px]"
      } rounded-2xl ${bg ? "bg-bgAccent" : "bg-bg"} ${
        bg ? "border-0" : "border-[2px] border-textAccent"
      }`}
      type="button"
    >
      <p className="text-textAccent text-[18px] font-semibold">{title}</p>
      {icon}
    </button>
  );
};

export default Button;
