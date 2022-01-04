import { collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import GameCard from "./components/gameCard";
import Header from "./components/header";
import { Games, GameModes, GameType } from "./components/utils/types";
import { db } from "./firebase/firebase-config";
import logo from "./logo.svg";

function App() {
  const gameCollectionRef = collection(db, "games");
  const [games, setgames] = useState<GameType[]>([]);

  useEffect(() => {
    const getGames = async () => {
      const data = await getDocs(gameCollectionRef);
      let formatData: any = await data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setgames(formatData);
      console.log(formatData);
    };

    getGames();
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className=" my-12 grid xs:grid-cols-1 place-items-center sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4">
        {games.map((game) => (
          <GameCard key={game.id} gameInfo={game} />
        ))}
      </div>
    </div>
  );
}

export default App;
