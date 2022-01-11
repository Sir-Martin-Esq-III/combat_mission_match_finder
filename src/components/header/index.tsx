import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase/firebase-config";
import MakeGame from "../makeGame/MakeGame";
import Modal from "../modal";
import { GameType } from "../utils/types";
import Filters from "./filters";

interface Props {}

const Header = (props: Props) => {
  const gameCollectionRef = collection(db, "games");

  const [searchValue, setsearchValue] = useState("");
  const [makeGameRequest, setmakeGameRequest] = useState(false);

  const handleSearchSubmit = () => {
    console.log("search submit");
  };

  const handleMakeGameRequest = (data: any) => {
    //Connect to firestore
    addDoc(gameCollectionRef, data).then((res) => {
      console.log("results: ", res);
    });

    //Add a new document
    // update List
    //Close modal
    setmakeGameRequest(false);
  };
  return (
    <div className="flex fixed top-0 left-0 flex-row  z-10 w-full h-10 justify-between px-16 shadow-md bg-white rounded-b-md">
      <h1>CMMF</h1>
      <div className="flex flex-row">
        <div className="">
          <label htmlFor="search">Search</label>
          <input
            className="bg-gray-300 rounded-md border-0 focus:ring-2 ring-blue-400 "
            type="search"
            name=""
            id="search"
            value={searchValue}
            onChange={(e) => setsearchValue(e.target.value)}
            onKeyDown={(e) => (e.code === "Enter" ? handleSearchSubmit() : "")}
          />
        </div>
        <div onClick={() => setmakeGameRequest(!makeGameRequest)}>
          <p>Make request</p>
          {makeGameRequest && (
            <Modal onClose={() => setmakeGameRequest(false)}>
              <MakeGame gameSubmissionHandler={handleMakeGameRequest} />
            </Modal>
          )}
        </div>
      </div>
      <Filters />
    </div>
  );
};

export default Header;
