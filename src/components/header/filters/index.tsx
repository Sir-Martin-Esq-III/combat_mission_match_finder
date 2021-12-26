import React, { useState } from "react";

interface Props {}

const currentFilters = [{ name: "Game" }, { name: "Mode" }];

const Filters = (props: Props) => {
  const [showFilterDropdown, setshowFilterDropdown] = useState(false);
  return (
    <div>
      <p
        onClick={() => {
          setshowFilterDropdown(!showFilterDropdown);
        }}
      >
        + add filters
      </p>
      {showFilterDropdown && (
        <div className="absolute flex flex-row bg-red-500 left-0 h-24 w-full">
          {currentFilters.map((filter) => (
            <div className="mx-5">{filter.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filters;
