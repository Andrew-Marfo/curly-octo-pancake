import './chat-window.css';

const Date = ({ date }) => {
    return (
        <div className="message-date">
            <h5>{date}</h5>
        </div>
    );
}

export default Date;