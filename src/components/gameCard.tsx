import React, { ReactElement, useState } from "react";
import Modal from "./modal";
import { GameModes, Games } from "./utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faUser,
  faMap,
  faEnvelope,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faSteam } from "@fortawesome/free-brands-svg-icons";

interface Props {
  gameInfo: {
    game: Games;
    mode: GameModes;
    map: string;
    gameuuid: string;
    email?: string;
    steamUserName?: string;
    openGame: boolean;
  };
}

export default function GameCard({ gameInfo }: Props): ReactElement {
  const { game, map, mode, email, steamUserName, openGame } = gameInfo;
  const [displayModal, setdisplayModal] = useState(false);

  return (
    <React.Fragment>
      {displayModal && (
        <Modal onClose={() => setdisplayModal(false)}>
          <div className="flex flex-row h-full">
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/1551160/capsule_616x353.jpg?t=1637075574"
              alt=""
              className="h-full w-1/3 rounded-l-lg"
            />
            <div className="flex flex-col w-1/3 h-full">
              <div className="flex flex-row m-2">
                <FontAwesomeIcon icon={faGamepad} />
                <p className="text-black">{`Game: ${game}`}</p>
              </div>
              <div className="flex flex-row m-2">
                <FontAwesomeIcon icon={faInfoCircle} />
                <p className="text-black">{`Mode: ${mode}`}</p>
              </div>
              <div className="flex flex-row m-2">
                <FontAwesomeIcon icon={faMap} />
                <p className="text-black">{`Map: ${map}`}</p>
              </div>
              {email && (
                <div className="flex flex-row m-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p className="text-black">{`Email: ${email}`}</p>
                </div>
              )}
              {steamUserName && (
                <div className="flex flex-row m-2">
                  <FontAwesomeIcon icon={faSteam} />
                  <p className="text-black">{`Steam: ${steamUserName}`}</p>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
      <div
        className={`bg-green-200 h-fit w-full sm:w-3/4 rounded-lg shadow-md flex flex-col my-5 ${
          !openGame
            ? "grayscale"
            : "filter-none  hover:scale-110 hover:cursor-pointer"
        }`}
        onClick={() => (openGame ? setdisplayModal(true) : "")}
      >
        <img
          src="https://cdn.akamai.steamstatic.com/steam/apps/1551160/capsule_616x353.jpg?t=1637075574"
          alt=""
        />
        <p className="text-black">{`Game: ${game}`}</p>
        <p className="text-black">{`Map:  ${map}`}</p>
        <p className="text-black">{`Mode: ${mode}`}</p>
      </div>
    </React.Fragment>
  );
}
