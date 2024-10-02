import SideBar from "./components/sidebar-component/sidebar.component";
import ChatListPanel from "./components/chat-list-panel-component/chat-list-panel.component";
import HeaderAndChatWindow from "./components/header-and-chat-window/header-and-chat-window";
import './App.css'

const App = () => {
  return (
    <div className="body-container">
      <SideBar />
      <ChatListPanel />
      <HeaderAndChatWindow/>
    </div>
  );
} 

export default App;  