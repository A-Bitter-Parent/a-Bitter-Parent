import React, { Component } from "react";
import UserResults from "./UserResults";

class Lunch extends Component {
  render() {
    return (
      <div className="lunch">
        <form className="foodSelector">
          <label htmlFor="foodMenu">Select what you would Like</label>
          <select id="foodMenu" onChange={this.props.handleChange}>
            <option disabled defaultValue>
              Choose your food
            </option>
            <option value="chicken sandwich">Chicken Sandwich</option>
            <option value="BLT">BLT</option>
            <option value="cheeseburger">Cheeseburger</option>
            <option value="Ramen">Ramen</option>
            <option value="caesar salad">Caesar Salad</option>
            <option value="dumplings">Dumplings</option>
            <option value="grilled cheese">Grilled Cheese</option>
            <option value="california roll">California Roll</option>
            <option value="tacos">tacos</option>
            <option value="cake">Cake</option>
          </select>
        </form>
        <UserResults
          results={this.props.results}
          subClick={this.props.subClick}
        />
      </div>
    );
  }
}

export default Lunch;
