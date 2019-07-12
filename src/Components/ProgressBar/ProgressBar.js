import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
    return (
        <div>
            <div className='progress_bar'>
                <div className='progress'></div>
            </div>
            <p className='progress_status'>380/1200</p>
        </div>
    );
}

export default ProgressBar;