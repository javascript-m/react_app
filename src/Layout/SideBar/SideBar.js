import React from 'react';
import './SideBar.css';
import SideBarBtn from './SideBarBtn/SideBarBtn';

const SideBar = () => {
    return (
        <div className='sideBar'>
            <SideBarBtn><i className="fa fa-cutlery" aria-hidden="true"></i></SideBarBtn>
            <SideBarBtn></SideBarBtn>
            <SideBarBtn></SideBarBtn>
        </div>
    );
}

export default SideBar;