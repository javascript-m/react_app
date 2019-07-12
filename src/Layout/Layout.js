import React from 'react';
import SideBar from './SideBar/SideBar';
import ToolBar from './ToolBar/ToolBar';

const Layout = () => {
    return (
        <div>
            <ToolBar></ToolBar>
            <SideBar></SideBar>
        </div>
    );
}

export default Layout;