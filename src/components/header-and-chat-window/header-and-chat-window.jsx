import Header from './header-component/header.component.jsx'
import ChatWindow
    from './chat-window.components.jsx';

import './header-and-chat-window.styles.css'

const HeaderAndChatWindow = () => {
    return (
        <div className="header-and-chat-container">
            <Header />
            <div className="chat-window-and-others">
                <ChatWindow />
                <div className="call-members-files">
                    <div className="call-options"></div>
                    <div className="members-list"></div>
                    <div className="files"></div>
                </div>
            </div>
        </div>
    );
}

export default HeaderAndChatWindow;