import React, { useContext, useState } from "react";
import GameCard from "./components/gameCard";
import Header from "./components/header";
import { Games, GameModes, GameType } from "./components/utils/types";
import logo from "./logo.svg";

const games: GameType[] = [
  {
    game: Games.COMBAT_MISSION_BLACK_SEA,
    mode: GameModes.PLAY_BY_EMAIL,
    map: "map",
    gameuuid: "0",
    email: undefined,
    steamUserName: "Sir-Martin-Esq",
    openGame: true,
  },
  {
    game: Games.COMBAT_MISSION_SHOCK_FORCE_2,
    mode: GameModes.PLAY_BY_EMAIL,
    map: "map",
    gameuuid: "1",
    email: undefined,
    steamUserName: "Sir-Martin-Esq",
    openGame: true,
  },
  {
    game: Games.COMBAT_MISSION_COLD_WAR,
    mode: GameModes.PLAY_BY_EMAIL,
    map: "map",
    gameuuid: "2",
    email: "test@gmail.com",
    steamUserName: "Sir-Martin-Esq",
    openGame: true,
  },
  {
    game: Games.COMBAT_MISSION_BLACK_SEA,
    mode: GameModes.REALTIME,
    map: "map",
    gameuuid: "3",
    email: undefined,
    steamUserName: "Sir-Martin-Esq",
    openGame: false,
  },
  {
    game: Games.COMBAT_MISSION_BLACK_SEA,
    mode: GameModes.PLAY_BY_EMAIL,
    map: "map",
    gameuuid: "4",
    email: undefined,
    steamUserName: "Sir-Martin-Esq",
    openGame: true,
  },
  {
    game: Games.COMBAT_MISSION_BLACK_SEA,
    mode: GameModes.PLAY_BY_EMAIL,
    map: "map",
    gameuuid: "5",
    email: undefined,
    steamUserName: "Sir-Martin-Esq",
    openGame: false,
  },
];

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className=" my-12 grid xs:grid-cols-1 place-items-center sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4">
        {games.map((game, index) => (
          <GameCard key={index} gameInfo={game} />
        ))}
      </div>
    </div>
  );
}

export default App;
