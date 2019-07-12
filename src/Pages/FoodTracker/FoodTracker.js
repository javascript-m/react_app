import React, {Component} from 'react';
import './FoodTracker.css';
import HistoryList from '../../Components/HistoryList/HistoryList';

class FoodTracker extends Component {
    render() {
        return (
            <div className='foodTrackerPage'>
                <div>Add Meal Comp</div>
                <div>Stats Comp</div>
                <HistoryList></HistoryList>
            </div>
        );
    }
}

export default FoodTracker;