import React, { Component } from "react";
import UserResults from './UserResults'

class BreakfastComp extends Component {
// constructor(props) {
//   super(props);
//   this.props.results = {
//     checkUserChoice: false
//   }

// }

  render() {
    return (
      <div className="breakfast">
        <form className="foodSelector">
          <label htmlFor="foodMenu">Select what you would Like</label>
          <select id="foodMenu" onChange={this.props.handleChange}>
            <option value="waffles">Waffles</option>
            <option value="pancakes">Pancakes</option>
            <option value="cereal">Cereal</option>
            <option value="breakfast sandwich">Breakfast Sandwich</option>
            <option value="yogurt">Yogurt</option>
            <option value="fruit salad">Fruit Salad</option>
            <option value="eggs and bacon">Eggs and Bacon</option>
            <option value="english muffin">English Muffin</option>
            <option value="sausage">Sausage</option>
            <option value="cake">Cake</option>
          </select>
        </form>
        <UserResults results={this.props.results} subClick={this.props.subClick} />
      </div>

    );
  }
}

export default BreakfastComp
