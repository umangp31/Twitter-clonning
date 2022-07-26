import React from "react";
import MessageRightBar from "./MessageRightBar";
import MessegeCard from "./MessageCard.css"
// import { Settings, NewMessage } from "../Assests/Icons";
// import IconButton from "../Assests/IconButton";
import { USERIMG } from "../utills/User";
import { Link } from "react-router-dom";

export default function MessageCard() {
  return (
    <div className="MsgPanel">
      <div className="ChatProfile">
        <img src={USERIMG} alt="USERIMG" />
      </div>
      <div className="ChatMsg">
        <Link to="/messages/Umang">SahilCODER</Link>
        <p>Your last msg</p>
      </div>
    </div>
  );
}
