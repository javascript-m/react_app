import React from 'react';  
import './Popup.css';  

const Popup = (props) => {
    return (
        <div className='popup'>
            <div className='popupInner'>
                <div className='popupUpperBar'>
                    <h1>{props.headline}</h1>
                </div>
                <button onClick={props.close}>Close me</button>
            </div>
        </div>
    );
}
export default Popup;