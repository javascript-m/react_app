import React, {Component} from 'react';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import Popup from '../../Components/Popup/Popup';

import './AddMeal.css';

class AddMeal extends Component {
    state = {
        showPopup: false
    }; 
    
    openPopup = () => {
        this.setState ({
            showPopup: true
        })
    }

    closePopup = () => {
        this.setState ({
            showPopup: false
        })
    }

    render() {
        return (
            <div>
                <ProgressBar></ProgressBar>
                <button onClick={this.openPopup} className='addMealBtn'>ADD MEAL</button>

                {this.state.showPopup ?
                    <Popup
                        headline='Add a Meal'
                        close={this.closePopup}
                        btnText='Add'>
                            <div className='popupTime'>
                                <div>Time: </div>
                                <input type='time' value='10:50'></input>
                            </div>
                            <div className='popupCalories'>
                                <div>Calories (kcal): </div>
                                <input type='number'></input>
                            </div>
                    </Popup>
                : null}  
            </div>
        );
    }
}

export default AddMeal;