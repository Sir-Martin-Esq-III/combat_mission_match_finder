import React from "react";
import GameCard from "./components/gameCard";
import { Games, GameModes, openGameType } from "./components/utils/types";
import logo from "./logo.svg";

const games: openGameType[] = [
  {
    game: Games.COMBAT_MISSION_BLACK_SEA,
    mode: GameModes.PLAY_BY_EMAIL,
    map: "map",
    gameuuid: "0",
    email: undefined,
    steamUserName: "Sir-Martin-Esq",
  },
  {
    game: Games.COMBAT_MISSION_SHOCK_FORCE_2,
    mode: GameModes.PLAY_BY_EMAIL,
    map: "map",
    gameuuid: "1",
    email: undefined,
    steamUserName: "Sir-Martin-Esq",
  },
  {
    game: Games.COMBAT_MISSION_COLD_WAR,
    mode: GameModes.PLAY_BY_EMAIL,
    map: "map",
    gameuuid: "2",
    email: "test@gmail.com",
    steamUserName: "Sir-Martin-Esq",
  },
  {
    game: Games.COMBAT_MISSION_BLACK_SEA,
    mode: GameModes.REALTIME,
    map: "map",
    gameuuid: "3",
    email: undefined,
    steamUserName: "Sir-Martin-Esq",
  },
  {
    game: Games.COMBAT_MISSION_BLACK_SEA,
    mode: GameModes.PLAY_BY_EMAIL,
    map: "map",
    gameuuid: "4",
    email: undefined,
    steamUserName: "Sir-Martin-Esq",
  },
  {
    game: Games.COMBAT_MISSION_BLACK_SEA,
    mode: GameModes.PLAY_BY_EMAIL,
    map: "map",
    gameuuid: "5",
    email: undefined,
    steamUserName: "Sir-Martin-Esq",
  },
];

function App() {
  return (
    <div className="flex flex-row h-screen">
      <aside className="hidden md:block md:w-1/4 md:m-2 md:bg-gray-200 h-full">
        HELLO
      </aside>
      <div className=" grid xs:grid-cols-1 place-items-center sm:grid-cols-2 md:w-3/4 lg:grid-cols-3">
        {games.map((game, index) => (
          <GameCard key={index} gameInfo={game} />
        ))}
      </div>
    </div>
  );
}

export default App;
