import React, { Component } from "react";
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Snack from './Snack';
// import UserResults from "./UserResults";

class UserInput extends Component {

  render() {
    return (
      <div className="userInput">

        <div className="userOptions">
          <button onClick={this.props.handleBreakfastClick}>Breakfast</button>
          <button onClick={this.props.handleLunchClick}>Lunch</button>
          <button onClick={this.props.handleDinnerClick}>Dinner</button>
          <button onClick={this.props.handleSnackClick}>Snack</button>
        </div>


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
