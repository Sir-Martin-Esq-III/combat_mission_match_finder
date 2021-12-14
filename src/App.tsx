import React from "react";
import GameCard from "./components/gameCard";
import { Games } from "./components/utils/types";
import logo from "./logo.svg";

const games = [
  { game: Games.COMBAT_MISSION_BLACK_SEA, mode: "mode", map: "map" },
  { game: Games.COMBAT_MISSION_BATTLE_NORMANDY, mode: "mode", map: "map" },
  { game: Games.COMBAT_MISSION_COLD_WAR, mode: "mode", map: "map" },
  { game: Games.COMBAT_MISSION_SHOCK_FORCE_2, mode: "mode", map: "map" },
];

function App() {
  return (
    <div className="App">
      <div className="grid xs:grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <GameCard game={game.game} mode={game.mode} map={game.map} />
        ))}
      </div>
    </div>
  );
}

export default App;
