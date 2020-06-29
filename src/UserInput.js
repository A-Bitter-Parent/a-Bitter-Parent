import React, { Component } from 'react';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Snack from './Snack';

class UserInput extends Component {
    constructor() {
        super();
        this.state = {
        breakfast: false,
        lunch: false,
        dinner: false,
        snack: false,
        };
        // this.handleClick = this.handleClick.bind(this);
        // this.handleUserClick = this.handleUserClick.bind(this);
    }

    handleBreakfastClick = () => {
        this.setState({
        breakfast: true,
        lunch: false,
        dinner: false,
        snack: false,
        });
    }
    handleLunchClick = () => {
        this.setState({
        breakfast: false,
        lunch: true,
        dinner: false,
        snack: false,
        });
    }
    handleDinnerClick = () => {
        this.setState({
        breakfast: false,
        lunch: false,
        dinner: true,
        snack: false,
        });
    }
    handleSnackClick = () => {
        this.setState({
        breakfast: false,
        lunch: false,
        dinner: false,
        snack: true,
        });
    }

    render() {
        return (
            <div className="userInput">

                <button onClick={this.handleBreakfastClick}>Breakfast</button>
                <button onClick={this.handleLunchClick}>Lunch</button>
                <button onClick={this.handleDinnerClick}>Dinner</button>
                <button onClick={this.handleSnackClick}>Snack</button>
                
                {this.state.breakfast ? <Breakfast /> : null}
                {this.state.lunch ? <Lunch /> : null}
                {this.state.dinner ? <Dinner /> : null}
                {this.state.snack ? <Snack /> : null}
            </div>

                //fats(204), carbs(205), proteins(203), sugars(269), image(photo.thumb), calories(208)
        )
    }
}

export default UserInput;