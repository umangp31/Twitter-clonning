import { useState } from "react";
import IconButton from "../Assests/IconButton";
import { DownArrowIcon, UpArrowIcon } from "../Assests/Icons";
import MessageCard from "./MessageCard";
function MessageModal() {
    const [isMessagesopen, setIsMessagesopen] = useState(false);
    const showModal = () => {
        setIsMessagesopen(isMessagesopen => !isMessagesopen)
    }
    return (
        <div className="messageModal"
            style={{
                minHeight: isMessagesopen ? "75vh" : "7vh"
            }}
        >
            <div className="messageModal_header">
                <span>Messages</span>
                <div className="icons" onClick={showModal}>
                    <IconButton hoverColor="border_color" >
                        {
                            isMessagesopen ? (<DownArrowIcon />) : (<UpArrowIcon />)
                        }
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default MessageModal