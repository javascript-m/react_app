import React from 'react';
import './SideBarBtn.css';

const SideBarBtn = () => {
    const sideBarBtnHandler = () => {
        console.log("Page Changed");
    }

    return (
        <button className="sideBarBtn" onClick={sideBarBtnHandler}>AMfds</button>
    );
}

export default SideBarBtn;