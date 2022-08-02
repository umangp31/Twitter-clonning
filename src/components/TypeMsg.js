import "./TypeMsg.css";
import {
  EmojisIcon,
  GIFUploadIcon,
  ImageUploadIcon,
  SendMsg,
} from "../Assests/Icons";
export default function TypeMsg() {
  return (
    <div className="Write">
      <div className="size">
        <ImageUploadIcon />
        <GIFUploadIcon />
      </div>
      <div className="enterMsg">
        <span>
          <input className="input" type="text" placeholder="Start a new message" />
          <EmojisIcon />
        </span>
      </div>
      <div className="send">
        <SendMsg />
      </div>
    </div>
  );
}
