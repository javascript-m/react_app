import React, {Component} from 'react';
import '../Page.css';
import HistoryList from '../../Components/HistoryList/HistoryList';
import Chart from '../../Components/Chart/Chart';
import AddMeal from './AddMeal';

class FoodTracker extends Component {
    render() {
        return (
            <div className='page'>
                <div className='headline'>Food Tracker</div>
                <AddMeal></AddMeal>
                <HistoryList></HistoryList>
                <Chart></Chart>
            </div>
        );
    }
}

export default FoodTracker;