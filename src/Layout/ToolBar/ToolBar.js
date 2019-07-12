import React from 'react';
import './ToolBar.css';
import ToolBarBtn from './ToolBarBtn/ToolBarBtn';

const ToolBar = () => {
    return (
        <div className='toolBar'>
            <ToolBarBtn type="add">Add</ToolBarBtn>
            <ToolBarBtn type="my_profile">My profile</ToolBarBtn>
            <ToolBarBtn type="sfjdskfjd">djdskjfskdjfd</ToolBarBtn>
            <ToolBarBtn type="show">Show</ToolBarBtn>

        </div>
    );
}

export default ToolBar;