import ArrowLeftGameIcon from "../CustomIcons/ArrowLeftGameIcon";
import GamepadIcon from "../CustomIcons/GamepadIcon";
import ArrowRightGameIcon from "../CustomIcons/arrowRightGameIcon";
import { GameArrayProps } from "../types";
import Button from "./Button";

const RecommendedGames = ({ games }: GameArrayProps) => {
  return (
    <div
      className="lg:relative w-full flex flex-col justify-center items-center mb-12 
    lg:bg-[#d9e4f9] lg:rounded-2xl lg:max-w-[1696px] lg:mx-auto lg:py-10 lg:my-8"
    >
      <img
        className="mb-8 hidden lg:block"
        src={process.env.PUBLIC_URL + "/imgs/recommendedGames/recGameLG.png"}
        alt="title"
      />
      <img
        className="mb-8 lg:hidden"
        src={process.env.PUBLIC_URL + "/imgs/recommendedGames/recGame.png"}
        alt="title"
      />

      <ul
        className="grid grid-cols-2 gap-4 mb-2
                    lg:flex lg:gap-x-2 lg:bg-[#d9e4f9]"
      >
        {games.map((game) => (
          <li
            key={game.id}
            className="relative rounded-2xl cursor-pointer hover:translate-y-[-1px] hover:shadow-lg transition"
          >
            <img
              className=" lg:min-w-[195px]"
              src={process.env.PUBLIC_URL + game.poster}
              alt=""
            />
            {game.bage && (
              <div className="absolute top-1 right-1 w-[86px] flex justify-center items-center bg-red rounded-full font-sm text-white text-[15px]">
                <p className="py-1 px-2">{game.bage}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div
        className="w-[345px] flex justify-between mb-8
      lg:absolute top-8 right-[23%] lg:mb-8 lg:justify-end lg:gap-x-4"
      >
        <ArrowLeftGameIcon />
        <ArrowRightGameIcon />
      </div>
      <div className="lg:absolute top-6 right-[2%]">
        <Button
          title={"Усі Ігри"}
          bg
          stroke={false}
          width="345px"
          icon={<GamepadIcon />}
        />
      </div>
    </div>
  );
};

export default RecommendedGames;
