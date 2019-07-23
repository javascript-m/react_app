import React from 'react';
import SideBar from './SideBar/SideBar';
import ToolBar from './ToolBar/ToolBar';
import FoodTracker from '../Pages/FoodTracker/FoodTracker';

import './Layout.css';
import LogIn from '../Pages/Registration/LogIn';
import SignUp from '../Pages/Registration/SignUp';

const Layout = () => {
    return (
        <div className='layout'>
            <SignUp></SignUp>
            <div className='upperScreen'>
                    <SideBar></SideBar>
                    <FoodTracker></FoodTracker>
            </div>
            <ToolBar></ToolBar>
        </div>
    );
}

export default Layout;