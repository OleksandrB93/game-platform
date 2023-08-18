interface ButtonProps {
  title: string;
  icon: JSX.Element;
  bg?: boolean;
  width?: string;
  stroke?: boolean;
}

const Button = ({ title, icon, bg, width, stroke }: ButtonProps) => {
  return (
    <button
      className={`max-w-[390px] max-h-[56px] mx-auto flex justify-center items-center px-[15.25px] py-[17px] gap-x-2 
      shadow-lg hover:shadow-cyan-500/50 transition
      ${
        width ? `w-widthSm` : "w-[165px]"
      } rounded-2xl ${bg ? "bg-bgAccent" : "bg-bg"} ${
        bg ? "border-0" : "border-[2px] border-textAccent"
      }
      `}
      type="button"
    >
      <p
        className={`text-textAccent text-[18px] font-semibold
      ${stroke ? "text-stroke " : ""}
      `}
      >
        {title}
      </p>
      {icon}
    </button>
  );
};

export default Button;
