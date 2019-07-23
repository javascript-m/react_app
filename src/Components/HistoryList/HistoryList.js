import React from 'react';
import ListItem from './ListItem';
import './HistoryList.css';

const HistoryList = () => {
    return (
        <div>
            <div className='pageSubtitle'>My meals</div>
            <div className='historyList'>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </div>
            <a className='moreListItems' href='https://www.youtube.com/'>More</a>
        </div>
    );
}

export default HistoryList;