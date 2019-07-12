import React from 'react';
import './ToolBarBtn.css';

/*
    Treba razmisliti koje će sve funkcionalnosti biti dostupne na toolBaru
*/

const ToolBarBtn = (props) => {
    const toolBarBtnHandler = () => {
        switch (props.type) {
            case 'add':
                console.log("Add Button");
                break;
            case 'my_profile':
                console.log("My profile");
                break;
            default:
                console.log("This is default click");
                break;
        }
    }
    
    return (
        <button className="toolBarBtn" onClick={toolBarBtnHandler}>{props.children}</button>
    );
}

export default ToolBarBtn;