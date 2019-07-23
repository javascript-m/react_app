import React from 'react';
import './SideBarBtn.css';

const SideBarBtn = (props) => {
    const sideBarBtnHandler = () => {
        console.log("Page Changed");
    }

    return (
        <button className="sideBarBtn" onClick={sideBarBtnHandler}>{props.children}</button>
    );
}

export default SideBarBtn;