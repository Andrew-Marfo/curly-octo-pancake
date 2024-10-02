import MenuButton from './sidebar-menu-button.component';
import { MdAdd } from 'react-icons/md';

import './sidebar.styles.css';

const SideBar = () => {
    const menuItems = [
        {
            id: 1,
            itemName: 'Work'
        },
        {
            id: 2,
            itemName: 'ICG'
        },
        {
            id: 3,
            itemName: 'SP'
        },
        {
            id: 4,
            itemName: 'BFF'
        },
        {
            id: 5,
            itemName: 'MJ'
        },
        {
            id: 6,
            itemName: 'GI'
        },
    ];
    return (
        <div className="sidebar-container">
            <MenuButton className={'icon'} icon={'icon'} />
            {menuItems.map(({ id, itemName }) => {
                return (
                    <div className="sidebar-menu-item" key={id}>
                        <h5>{itemName}</h5>
                    </div>
                );
            })}
            <MenuButton className={'add-button'} icon={<MdAdd size={25} />} />
        </div>
    );
}

export default SideBar