import React, { Component } from "react";
// import Breakfast from './Breakfast';
// import Lunch from './Lunch';
// import Dinner from './Dinner';
// import Snack from './Snack';
import BreakfastComp from "./BreakfastComp";
import UserResults from "./UserResults";

class UserInput extends Component {
  // constructor(props) {
  //     super(props);

  //     };
  // this.handleClick = this.handleClick.bind(this);
  // this.handleUserClick = this.handleUserClick.bind(this);

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="userInput">
        <button onClick={this.props.handleBreakfastClick}>Breakfast</button>
        {/* <button onClick={this.handleLunchClick}>Lunch</button>
                <button onClick={this.handleDinnerClick}>Dinner</button>
                <button onClick={this.handleSnackClick}>Snack</button> */}

        {this.props.results.breakfast ? <BreakfastComp results={this.props.results} handleChange={this.props.handleChange} subClick={this.props.subClick}/> : null}
        {/* {this.state.lunch ? <Lunch /> : null}
                {this.state.dinner ? <Dinner /> : null}
                {this.state.snack ? <Snack /> : null} */}
      </div>

      //fats(204), carbs(205), proteins(203), sugars(269), image(photo.thumb), calories(208)
    );
  }
}

export default UserInput;
