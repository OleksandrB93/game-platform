import ArrowLeftGameIcon from "../CustomIcons/ArrowLeftGameIcon";
import GamepadIcon from "../CustomIcons/GamepadIcon";
import ArrowRightGameIcon from "../CustomIcons/arrowRightGameIcon";
import { GameArrayProps } from "../types";
import Button from "./Button";

const RecommendedGames = ({ title, games }: GameArrayProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-12 ">
      <img className="mb-8" src={process.env.PUBLIC_URL + title} alt="title" />
      <ul className="grid grid-cols-2 gap-4 mb-2">
        {games.map((game) => (
          <li key={game.id} className="relative cursor-pointer">
            <img src={process.env.PUBLIC_URL + game.poster} alt="" />
            {game.bage && (
              <div className="absolute top-1 right-1 w-[86px] flex justify-center items-center bg-red rounded-full font-sm text-white text-[15px]">
                <p className="py-1 px-2">{game.bage}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="w-[345px] flex justify-between mb-8">
        <ArrowLeftGameIcon />
        <ArrowRightGameIcon />
      </div>
      <Button
        title={"Усі Ігри"}
        bg
        stroke={false}
        width="345px"
        icon={<GamepadIcon />}
      />
    </div>
  );
};

export default RecommendedGames;
