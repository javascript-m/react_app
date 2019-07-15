import React from 'react';  
import './Popup.css';  

const Popup = (props) => {
    return (
        <div className='popup'>
            <div className='popupInner'>
                <div className='popupUpperBar'>
                    <div>{props.headline}</div>
                    <button onClick={props.close}>Close me</button>
                </div>
            </div>
        </div>
    );
}
export default Popup;