import React from 'react';
import ListItem from './ListItem';
import './HistoryList.css';

const HistoryList = () => {
    return (
        <div className="historyList">
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </div>
    );
}

export default HistoryList;