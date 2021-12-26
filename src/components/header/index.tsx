import React, { useState } from "react";
import Modal from "../modal";
import Filters from "./filters";

interface Props {}

const Header = (props: Props) => {
  const [searchValue, setsearchValue] = useState("");
  const [makeGameRequest, setmakeGameRequest] = useState(false);

  const handleSearchSubmit = () => {
    console.log("search submit");
  };

  const handleMakeGameRequest = () => {
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
              <button
                className="rounded-md bg-pink-300 text-white"
                onClick={() => {
                  handleMakeGameRequest();
                }}
              >
                Make game!
              </button>
            </Modal>
          )}
        </div>
      </div>
      <Filters />
    </div>
  );
};

export default Header;
