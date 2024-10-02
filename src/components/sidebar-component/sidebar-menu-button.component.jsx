

const MenuButton = ({ icon, className }) => {
    return (
        <div className={`menu-button ${className}`}>
            {icon}
        </div>
    );
}

export default MenuButton;