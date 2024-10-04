import MessageTile from './message-tile.component';
import ChatBackgound from './chat-image-backgorund.jpg'
import Date from './date.component';
import GirlProfilePicture from './girl-profile-picture.jpg';
import UserProfilePicture from '../header-component/user-image.jpg';

import './chat-window.css';

const ChatWindow = () => {

    const messages = [
        {
            id: 0,
            name: 'Island Yves',
            message: 'Hi there, this is just a ui. I\'m still learning the framework',
            imageUrl: UserProfilePicture,
            time: '6:35pm',
        },
        {
            id: 1,
            name: 'Precious Mountain',
            message: 'I\'m also a graduate who just finished college and will start nss very soon.',
            imageUrl: GirlProfilePicture,
            time: '6:45pm',
        },
    ]

    return (
        <div className="chat-window">
            <img src={ChatBackgound} alt="chat-background" />
            <Date date='9 Sept 2024' />
            {messages.map((message) => {
                return (
                    <MessageTile key={message.id} messageItem={message} />
                );
            })}
        </div>

    );
}

export default ChatWindow;