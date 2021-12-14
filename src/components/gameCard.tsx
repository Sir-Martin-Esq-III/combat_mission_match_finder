import React, { ReactElement } from "react";
import { Games } from "./utils/types";

interface Props {
  game: Games;
  map: string;
  mode: string;
}

export default function GameCard({ game, map, mode }: Props): ReactElement {
  return (
    <div className="bg-green-200 h-fit w-full sm:w-3/4 rounded-lg shadow-md flex flex-col hover:scale-110 hover:cursor-pointer my-5">
      <img
        src="https://cdn.akamai.steamstatic.com/steam/apps/1551160/capsule_616x353.jpg?t=1637075574"
        alt=""
      />
      <p>{`${game} ${map} ${mode}`}</p>
      <p className="text-black">{`Game: ${game}`}</p>
      <p className="text-black">{`Map:  ${map}`}</p>
      <p className="text-black">{`Mode: ${mode}`}</p>
    </div>
  );
}
