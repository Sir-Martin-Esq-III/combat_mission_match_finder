import React, { useState } from "react";
import { GameModes, Games, GameType, GameTypes } from "../utils/types";

interface Props {
  gameSubmissionHandler: (data: any) => any;
}

const options = {
  games: Object.values(Games),
  modes: Object.values(GameModes),
  types: Object.values(GameTypes),
};
const MakeGame = ({ gameSubmissionHandler }: Props) => {
  const [currentGame, setCurrentGame] = useState<string>(options.games[0]);
  const [currentGameMode, setcurrentGameMode] = useState<string>(
    options.modes[0]
  );

  const [currentGameType, setcurrentGameType] = useState<string>(
    options.types[0]
  );
  const [currentScenario, setCurrentScenario] = useState("");
  const [currentGameEmail, setCurrentGameEmail] = useState("");
  const [currentGameDiscord, setCurrentGameDiscord] = useState("");
  const [currentGamePW, setCurrentGamePW] = useState("");

  const formatData = () => {
    return {
      game: currentGame,
      method: currentGameMode,
      modules: "None",
      scenario: "Quick Battle",
      status: true,
      type: currentGameType,
      gamepw: currentGamePW,
    };
  };
  return (
    <div className="px-5 md:px-15 py-10">
      <form
        className="flex flex-col space-y-5"
        onSubmit={(e) => gameSubmissionHandler(formatData())}
      >
        <div className="flex flex-col md:flex-row">
          <label className=" md:w-1/3">Game?</label>
          <select
            value={currentGame}
            onChange={(e) => setCurrentGame(e.target.value)}
          >
            {options.games.map((gameName) => (
              <option key={gameName} value={gameName}>
                {gameName}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col md:flex-row">
          <label className="md:w-1/3">GameMode?</label>
          <select
            value={currentGameMode}
            onChange={(e) => setcurrentGameMode(e.target.value)}
          >
            {options.modes.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col md:flex-row">
          <label className="md:w-1/3">GameType?</label>
          <select
            value={currentGameType}
            onChange={(e) => setcurrentGameType(e.target.value)}
          >
            {options.types.map((types) => (
              <option key={types} value={types}>
                {types}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col md:flex-row">
          <label className="md:w-1/3">Email Address?</label>
          <input
            onChange={(e) => {
              setCurrentGameEmail(e.target.value);
            }}
            value={currentGameEmail}
            className="bg-gray-300 "
            type="email"
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <label className=" md:w-1/3">Discord ID?</label>
          <input
            onChange={(e) => {
              setCurrentGameDiscord(e.target.value);
            }}
            value={currentGameDiscord}
            className="bg-gray-300 "
            type="Text"
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <label className="md:w-1/3">Password?</label>
          <input
            onChange={(e) => {
              setCurrentGamePW(e.target.value);
            }}
            value={currentGamePW}
            className="bg-gray-300 "
            type="password"
          />
        </div>
        <button
          className="bg-green-300 rounded-xl w-1/3 md:w-1/3 grid place-items-center hover:text-green-600 hover:bg-white"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default MakeGame;
