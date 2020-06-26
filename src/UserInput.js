import React, { Component } from 'react';
import Breakfast from './Breakfast';

class UserInput extends Component {
    constructor() {
        super();
        this.state = {
        breakfast: false,
        lunch: false,
        dinner: false,
        snack: false,
        };
        this.handleBreakfastClick = this.handleBreakfastClick.bind(this);
        // this.handleUserClick = this.handleUserClick.bind(this);
    }

    handleBreakfastClick() {
        this.setState({
        breakfast: this.state.breakfast ? false : true,
        lunch: false,
        dinner: false,
        snack: false,
        });
    }

    render() {
        return (
            <div className="userInput">

                <button onClick={this.handleBreakfastClick}>Breakfast</button>
                {/* <Breakfast handleBreakfastClick={this.handleBreakfastClick} /> */}
                <button>Lunch</button>
                <button>Dinner</button>
                <button>Snack</button>
                
                {this.state.breakfast ? <Breakfast /> : null}

                {/* {this.state.UserPage ? <UserPage /> : null} */}
                {/* <Breakfast /> */}
            </div>
        )
    }
}

export default UserInput;