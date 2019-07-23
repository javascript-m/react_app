import React from 'react';
import SideBar from './SideBar/SideBar';
import ToolBar from './ToolBar/ToolBar';
import FoodTracker from '../Pages/FoodTracker/FoodTracker';

import './Layout.css';

const Layout = () => {
    return (
        <div className='layout'>
            <div className='upperScreen'>
                    <SideBar></SideBar>
                    <FoodTracker></FoodTracker>
            </div>
            <ToolBar></ToolBar>
        </div>
    );
}

export default Layout;