import React, {Component} from 'react';
import '../Page.css';
import HistoryList from '../../Components/HistoryList/HistoryList';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';

class FoodTracker extends Component {
    render() {
        return (
            <div className='page'>
                <div>Add Meal Comp</div>
                <div>Stats Comp</div>
                <HistoryList></HistoryList>
                <ProgressBar></ProgressBar>
            </div>
        );
    }
}

export default FoodTracker;