import "./TypeMsg.css";
import { GIFUploadIcon, ImageUploadIcon, SendMsg } from "../Assests/Icons";
export default function TypeMsg() {
  return (
    <div className="Write">
      <div className="size">
        <ImageUploadIcon />
        <GIFUploadIcon />
      </div>
      <div className="enterMsg">
        <input type="text" placeholder="Start a new message" />
      </div>
      <div className="send">
        <SendMsg />
      </div>
    </div>
  );
}
