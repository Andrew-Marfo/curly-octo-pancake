import { MdAttachFile } from "react-icons/md";
import { MdOutlineSend } from "react-icons/md";
import { MdInbox } from "react-icons/md";

const ChatInbox = () => {
    return (
        <div className="chat-inbox-container">
            <MdAttachFile className="attach" size={20} color="white" />
            <input type="text" placeholder="Write a message..." />
            <MdInbox className="options" size={20} color="white" />
            <MdOutlineSend className="send" size={20} color="white" />
        </div>
    );
}

export default ChatInbox;