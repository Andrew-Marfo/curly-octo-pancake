import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineSettings, MdOutlineNotifications } from "react-icons/md";
import UserProfilePicture from './user-image.jpg'

import './header.styles.css';

const Header = () => {
    return (
        <div className="header-container">
            <h2 className="header-title">ICG chat</h2>
            <div className="search-buttons-and-profile-container">
                <div className="search-container">
                    <FaMagnifyingGlass size={15} color="white" />
                    <input type="text" className="header-search-box" placeholder="Search" />
                </div>
                <div className="header-button">
                    <MdOutlineSettings size={20} color="white" />
                </div>
                <div className="header-button">
                    <MdOutlineNotifications size={20} color="white" />
                </div>
                <div className="user-profile">
                    <img src={UserProfilePicture} alt="Profile-picture" />
                </div>
            </div>
        </div>
    );
}

export default Header;