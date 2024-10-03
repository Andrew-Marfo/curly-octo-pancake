import './chat-window.css';


const MessageTile = ({ picture, userName, message, time }) => {
    return (
        <div className="message-tile">
            <div className="profile-picture">
                <img src={picture} alt="profile-picture" />
            </div>
            <div className="name-and-nessage-container">
                <h4 className="user-name">{userName}</h4>
                <p className="message">{message}</p>
            </div>
            <h6 className="time">{time}</h6>
        </div>
    );
}

export default MessageTile;