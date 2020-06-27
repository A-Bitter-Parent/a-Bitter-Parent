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
        this.handleClick = this.handleClick.bind(this);
        // this.handleUserClick = this.handleUserClick.bind(this);
    }

    handleClick() {
        this.setState({
        breakfast: this.state.breakfast ? false : true,
        lunch: this.state.lunch ? false : true,
        dinner: this.state.dinner ? false : true,
        snack: this.state.snack ? false : true,
        });
    }

    render() {
        return (
            <div className="userInput">

                <button onClick={this.handleClick}>Breakfast</button>
                {/* <Breakfast handleBreakfastClick={this.handleBreakfastClick} /> */}
                <button onClick={this.handleClick}>Lunch</button>
                <button onClick={this.handleClick}>Dinner</button>
                <button onClick={this.handleClick}>Snack</button>
                
                {this.state.breakfast ? <Breakfast /> : null}
                {/* {this.state.lunch ? <Lunch /> : null}
                {this.state.dinner ? <Dinner /> : null}
                {this.state.snack ? <Snack /> : null} */}

                {/* {this.state.UserPage ? <UserPage /> : null} */}
                {/* <Breakfast /> */}
            </div>
        )
    }
}

export default UserInput;