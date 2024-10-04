import { MdAttachFile } from "react-icons/md";
import { MdSend } from "react-icons/md";
import { MdInbox } from "react-icons/md";

const ChatInbox = () => {
    return (
        <div className="chat-inbox-container">
            <img src={MdAttachFile} alt="Attachment" />
            <input type="Write a message..." />
            <img src={MdInbox} alt="Inbox" />
            <img src={MdSend} alt="Send" />
        </div>
    );
}

export default ChatInbox;