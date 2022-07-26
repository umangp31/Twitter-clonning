import { Link } from "react-router-dom";
import "./MessageRightbar.css";
import { Settings, NewMessage } from "../Assests/Icons";
import IconButton from "../Assests/IconButton";
import { USERIMG } from "../utills/User";
import MessageCard from "./MessageCard";

export default function MessageRightBar() {
  return (
    <div className="MessageRightBar">
      <div className="TopBar">
        <div className="TopBar_left">
          <h4 className="message_title">Messages</h4>
        </div>
        <div className="TopBar_right">
          <IconButton hoverColor="border-color">
            <Settings />
          </IconButton>
          <IconButton hoverColor="border-color">
            <NewMessage />
          </IconButton>
        </div>
      </div>
      <div className="SearchDM">
        <span>
          <input
            className="SearchMsg"
            type="search"
            placeholder="Search Direct Messages"
          />
        </span>
      </div>

      <div className="Chats">
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
    </div>
  );
}
