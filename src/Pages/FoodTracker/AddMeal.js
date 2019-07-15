import React, {Component} from 'react';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import Popup from '../../Components/Popup/Popup';

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
                    />
                : null}  
            </div>
        );
    }
}

export default AddMeal;