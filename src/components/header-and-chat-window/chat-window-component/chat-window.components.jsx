import './chat-window.css';
import ChatBackgound from './chat-image-backgorund.jpg'

const ChatWindow = () => {
    return (
        <div className="chat-window">
            <img src={ChatBackgound} alt="chat-background" />
        </div>
    );
}

export default ChatWindow;