import { Link } from "react-router-dom";
import "./MessageRightbar.css";
import { Settings, NewMessage } from "../Assests/Icons";
import IconButton from "../Assests/IconButton";
import { USERIMG } from "../utills/User";

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
        <div className="MsgPanel">
          <div className="ChatProfile">
            <img src={USERIMG} alt="USERIMG" />
          </div>
          <div className="ChatMsg">
            <Link to="/messages/Sahil">SahilCODER</Link>
          </div>
        </div>
        <div className="MsgPanel">
          <div className="ChatProfile">
            <img src={USERIMG} alt="USERIMG" />
          </div>
          <div className="ChatMsg">
            <Link to="/messages/Umang">UmangJSMASTER</Link>
          </div>
        </div>
        <div className="MsgPanel">
          <div className="ChatProfile">
            <img src={USERIMG} alt="USERIMG" />
          </div>
          <div className="ChatMsg">
            <Link to="/messages/harsh">HarshSER</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
