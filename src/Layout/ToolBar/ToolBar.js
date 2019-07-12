import React from 'react';
import './ToolBar.css';
import ToolBarBtn from './ToolBarBtn/ToolBarBtn';

const ToolBar = () => {
    return (
        <div>
            {/*Nemoj dirat typeove*/}
            <ToolBarBtn type='add' icon="fsdjfdsk">Add</ToolBarBtn>
            <ToolBarBtn type='my_profile'>My Profile</ToolBarBtn>
            <ToolBarBtn type='dgdfk'>Nesto trece</ToolBarBtn>
        </div>
    );
}

export default ToolBar;