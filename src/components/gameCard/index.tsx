import React, { ReactElement, useState } from "react";
import Modal from "../modal";
import { GameModes, Games } from "../utils/types";
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
    // game: Games;
    // mode: GameModes;
    // map: string;
    // gameuuid: string;
    // email?: string;
    // steamUserName?: string;
    // openGame: boolean;

    game: Games;
    method: GameModes;
    modules: string;
    scenario: string;
    type: string;
    id: string;
    status: boolean;
    gamepw: string;
  };
}

export default function GameCard({ gameInfo }: Props): ReactElement {
  const { game, method, modules, scenario, type, id, status, gamepw } =
    gameInfo;
  const [displayModal, setdisplayModal] = useState(false);

  return (
    <React.Fragment>
      {displayModal && (
        <Modal onClose={() => setdisplayModal(false)}>
          <div
            data-test-id=""
            className="flex flex-col h-1/2 md:flex-row md:h-full"
          >
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/1551160/capsule_616x353.jpg?t=1637075574"
              alt=""
              className="h-full w-full md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
            <div className="flex flex-col w-full md:w-1/3 h-full">
              <div className="flex flex-row m-2">
                <FontAwesomeIcon icon={faGamepad} />
                <p className="text-black">{`Game: ${game}`}</p>
              </div>
              <div className="flex flex-row m-2">
                <FontAwesomeIcon icon={faInfoCircle} />
                <p className="text-black">{`Method: ${method}`}</p>
              </div>
              <div className="flex flex-row m-2">
                <FontAwesomeIcon icon={faMap} />
                <p className="text-black">{`Scenario: ${scenario}`}</p>
              </div>
              {/* {email && (
                <div className="flex flex-row m-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p className="text-black">{`Email: ${email}`}</p>
                </div>
              )} */}
              {/* {steamUserName && (
                <div className="flex flex-row m-2">
                  <FontAwesomeIcon icon={faSteam} />
                  <p className="text-black">{`Steam: ${steamUserName}`}</p>
                </div>
              )} */}
            </div>
          </div>
        </Modal>
      )}
      <div
        className={`bg-green-200 h-fit w-full sm:w-3/4 max-w-sm rounded-lg shadow-md flex flex-col my-5 ${
          !status
            ? "grayscale"
            : "filter-none  hover:scale-110 hover:cursor-pointer"
        }`}
        data-testid="small-card-container"
        onClick={() => (status ? setdisplayModal(true) : "")}
      >
        <img
          src="https://cdn.akamai.steamstatic.com/steam/apps/1551160/capsule_616x353.jpg?t=1637075574"
          alt=""
          data-testid="small-game-card-image"
        />
        <p
          data-testid="small-game-card-game"
          className="text-black"
        >{`Game: ${game}`}</p>
        <p
          data-testid="small-game-card-map"
          className="text-black"
        >{`Scenario: ${scenario}`}</p>
        <p
          data-testid="small-game-card-mode"
          className="text-black"
        >{`Method: ${method}`}</p>
      </div>
    </React.Fragment>
  );
}
