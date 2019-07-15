import React from 'react';
import './ToolBar.css';
import ToolBarBtn from './ToolBarBtn/ToolBarBtn';

const ToolBar = () => {
    return (
        <div className='toolBar'>
            <ToolBarBtn type="add"><i className="fa fa-plus" aria-hidden="true"></i>
            </ToolBarBtn>
            <ToolBarBtn type="my_profile"><i className="fa fa-user" aria-hidden="true"></i>
            </ToolBarBtn>
            <ToolBarBtn type="home"><i className="fa fa-home" aria-hidden="true"></i></ToolBarBtn>
            <ToolBarBtn type="settings"><i className="fa fa-cog" aria-hidden="true"></i>
            </ToolBarBtn>
        </div>
    );
}

export default ToolBar;