import React, { Component } from "react";
import UserResults from "./UserResults";

class Lunch extends Component {
  render() {
    return (
      <div className="lunch">
        <form className="foodSelector">
          <label htmlFor="foodMenu">Select what you would Like</label>
          <select id="foodMenu" onChange={this.props.handleChange}>
          <option selected disabled defaultValue>
              Choose your food
            </option>
            <option value="teriyaki steak">Teriyaki Steak</option>
            <option value="jelly sandwich">Jelly Sandwich</option>
            <option value="baconator">Baconator</option>
            <option value="thai noodles">Thai Noodles</option>
            <option value="vanilla ice cream">Caesar Salad</option>
            <option value="apple dumplings">Apple Dumplings</option>
            <option value="grilled peach">Grilled Peaches</option>
            <option value="mochi">Mochi</option>
            <option value="pork bbq burrito">Pork BBQ Burrito</option>
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
