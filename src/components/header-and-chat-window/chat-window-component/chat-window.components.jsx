import MessageTile from './message-tile.component';
import ChatBackgound from './chat-image-backgorund.jpg'
import Date from './date.component';
import GirlProfilePicture from './girl-profile-picture.jpg';

import './chat-window.css';

const ChatWindow = () => {
    return (
        <div className="chat-window">
            <img src={ChatBackgound} alt="chat-background" />
            <Date date='9 Sept 2024' />
            <MessageTile />
        </div>

    );
}

export default ChatWindow;