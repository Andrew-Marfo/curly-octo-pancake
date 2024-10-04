import './chat-window.css';


const MessageTile = ({ messageItem }) => {
    const { imageUrl, name, message, time } = messageItem;
    return (
        <div className="message-tile">
            <div className="profile-picture">
                <img src={imageUrl} alt="profile-picture" />
            </div>
            <div className="name-and-nessage-container">
                <h4 className="user-name">{name}</h4>
                <p className="message">{message}</p>
            </div>
            <h6 className="time">{time}</h6>
        </div>
    );
}

export default MessageTile;