import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Games, GameModes } from "../utils/types";
import GameCard from "./index";
let props: any;
beforeAll(() => {
  props = {
    gameInfo: {
      game: Games.COMBAT_MISSION_BLACK_SEA,
      mode: GameModes.PLAY_BY_EMAIL,
      map: "map",
      gameuuid: "0",
      email: undefined,
      steamUserName: "Sir-Martin-Esq",
      openGame: true,
    },
  };
});

describe("Game card", () => {
  it("loads items correctly and renders the correct information", async () => {
    const container = await render(<GameCard {...props} />);

    const smallCard = await container.findByTestId("small-card-container");
    const smImage = await container.findByTestId("small-game-card-image");
    const smGame = await container.findByTestId("small-game-card-game");
    const smMap = await container.findByTestId("small-game-card-map");
    const smMode = await container.findByTestId("small-game-card-mode");

    expect(smallCard).toBeTruthy();
    expect(smImage).toBeTruthy();
    expect(smGame).toBeTruthy();
    expect(smMap).toBeTruthy();
    expect(smMode).toBeTruthy();
    expect(await container.queryByTestId("modal-content-container")).toBeNull();

    //expect(smImage)
    expect(smGame.textContent).toBe(`Game: ${props.gameInfo.game}`);
    expect(smMap.textContent).toBe(`Map: ${props.gameInfo.map}`);
    expect(smMode.textContent).toBe(`Mode: ${props.gameInfo.mode}`);
  });

  it("renders the modal when you click on the card", () => {
    render(<GameCard {...props} />);

    expect(screen.queryByTestId("modal-content-container")).toBeFalsy();
    fireEvent.click(screen.getByTestId("small-card-container"));

    expect(screen.findByTestId("modal-content-container")).toBeTruthy();
  });
});
