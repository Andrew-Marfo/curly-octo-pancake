import SideBar from "./components/sidebar-component/sidebar.component";
import ChatListPanel from "./components/chat-list-panel-component/chat-list-panel.component";

import './App.css'

const App = () => {
  return (
    <div className="body-container">
      <SideBar />
      <ChatListPanel/>
    </div>
  );
} 

export default App;  