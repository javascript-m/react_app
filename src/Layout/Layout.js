import React from 'react';
import SideBar from './SideBar/SideBar';
import ToolBar from './ToolBar/ToolBar';
import FoodTracker from '../Pages/FoodTracker/FoodTracker';

import './Layout.css';

const Layout = () => {
    return (
        <div>
            <ToolBar></ToolBar>
           <div>
                <SideBar></SideBar>
                <div className='page'>
                    <FoodTracker></FoodTracker>
                </div>
           </div>
        </div>
    );
}

export default Layout;