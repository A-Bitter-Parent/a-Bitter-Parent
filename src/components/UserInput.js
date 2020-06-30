import React, { Component } from "react";
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Snack from './Snack';
// import UserResults from "./UserResults";

class UserInput extends Component {
  // this.handleClick = this.handleClick.bind(this);
  // this.handleUserClick = this.handleUserClick.bind(this);

  render() {
    return (
      <div className="userInput">
        {/* <button onClick={this.props.handleBreakfastClick} onChange={this.props.handleChange}>Breakfast</button>
        <button onClick={this.props.handleLunchClick} onChange={this.props.handleChange}>Lunch</button>
        <button onClick={this.props.handleDinnerClick} onChange={this.props.handleChange}>Dinner</button>
        <button onClick={this.props.handleSnackClick} onChange={this.props.handleChange}>Snack</button> */}

        <button onClick={this.props.handleBreakfastClick}>Breakfast</button>
        <button onClick={this.props.handleLunchClick}>Lunch</button>
        <button onClick={this.props.handleDinnerClick}>Dinner</button>
        <button onClick={this.props.handleSnackClick}>Snack</button>


        {this.props.results.breakfast ?
          <Breakfast
            results={this.props.results}
            handleChange={this.props.handleChange}
            subClick={this.props.subClick}
          />
          : null}

        {this.props.results.lunch ?
          <Lunch
            results={this.props.results}
            handleChange={this.props.handleChange}
            subClick={this.props.subClick}
          />
          : null}

        {this.props.results.dinner ?
          <Dinner
            results={this.props.results}
            handleChange={this.props.handleChange}
            subClick={this.props.subClick}
          />
          : null}

        {this.props.results.snack ?
          <Snack
            results={this.props.results}
            handleChange={this.props.handleChange}
            subClick={this.props.subClick}
          />
          : null}
      </div>

      //fats(204), carbs(205), proteins(203), sugars(269), image(photo.thumb), calories(208)
    );
  }
}

export default UserInput;
