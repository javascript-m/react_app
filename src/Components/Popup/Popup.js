import React from 'react';  
import './Popup.css';

const Popup = (props) => {
    return (
        <div className='popup'>
            <div className='popupInner'>
                <div className='popupUpperBar'>
                    <div>{props.headline}</div>
                    <button onClick={props.close}><i className="fa fa-times" aria-hidden="true"></i></button>
                </div>
                <div className='popupData'>{props.children}</div>
                <button className='popupBtn'>{props.btnText}</button>
            </div>
        </div>
    );
}
export default Popup;