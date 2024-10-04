import './chat-list-panel.styles.css';

const ChatListPanel = () => {
    const user = [
        {
            id: 1,
            name: 'Andrew Marfo',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        }
    ];

    const users = [];

    for (let i = 0; i < 11; i++) {
        const newUser = { ...user[0], id: i }
        users.push(newUser);
    }

    return <div className="chat-list-panel-container">
        {users.map(({ id, name, imageUrl }) => {
            return (
                <div key={id} className="user-container">
                    <div className="profile-picture" style={{
                        backgroundImage: `url(${imageUrl})`,
                    }} />
                    <div className="name-and-message-container">
                        <h3 className="user-name">{name}</h3>
                        <p className="message">Lorem ipsum dolor sit.</p>
                    </div>
                </div>
            )
        })}
    </div>
};

export default ChatListPanel