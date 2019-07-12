import React from 'react';
import SideBar from './SideBar/SideBar';
import ToolBar from './ToolBar/ToolBar';
import FoodTracker from '../Pages/FoodTracker/FoodTracker';

import './Layout.css';

const Layout = () => {
    return (
        <div>
            <ToolBar></ToolBar>
           <div className='upperScreen'>
                <SideBar></SideBar>
                <FoodTracker></FoodTracker>
           </div>
        </div>
    );
}

export default Layout;