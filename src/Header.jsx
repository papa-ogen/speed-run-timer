import React from "react";
import CloseButton from "./CloseButton";
import { formatSeconds } from "./helpers";

const Header = ({ recordtime }) => {
  return (
    <div className="flex">
      <div className="flex-grow text-xs">
        Prev. record: {formatSeconds(recordtime)}
      </div>
      <CloseButton />
    </div>
  );
};

export default Header;
