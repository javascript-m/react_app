import React, {Component} from 'react';
import '../Page.css';
import HistoryList from '../../Components/HistoryList/HistoryList';
import AddMeal from './AddMeal';

class FoodTracker extends Component {
    render() {
        return (
            <div className='page'>
                <AddMeal></AddMeal>
                <div>Stats Comp</div>
                <HistoryList></HistoryList>
            </div>
        );
    }
}

export default FoodTracker;