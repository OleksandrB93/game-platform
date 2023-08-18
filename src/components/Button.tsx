interface ButtonProps {
  title: string;
  icon: JSX.Element;
  bg?: boolean;
  width?: string;
  stroke?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  loading?: boolean;
}

const Button = ({
  title,
  icon,
  bg,
  width,
  stroke,
  type,
  loading,
}: ButtonProps) => {
  return (
    <button
      className={`max-w-[390px] max-h-[56px] mx-auto flex justify-center items-center px-[15.25px] py-[17px] gap-x-2 
      shadow-lg hover:shadow-cyan-500/50 transition
      ${width ? `w-widthSm` : "w-[165px]"} rounded-2xl ${
        bg ? "bg-bgAccent" : "bg-bg"
      } ${bg ? "border-0" : "border-[2px] border-textAccent"}
      `}
      type={type}
    >
      {type === "submit" ? (
        <div className="flex gap-x-2">
          <p
            className={`text-textAccent text-[18px] font-semibold ${
              stroke ? "text-stroke " : ""
            }`}
          >
            {loading ? "Sending..." : "Відправити"}
          </p>
          {icon}
        </div>
      ) : (
        <div className="flex justify-center items-center gap-x-2">
          <p
            className={`text-textAccent text-[18px] font-semibold ${
              stroke ? "text-stroke " : ""
            }`}
          >
            {title}
          </p>
          {icon}
        </div>
      )}
    </button>
  );
};

export default Button;
