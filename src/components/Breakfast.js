import React, { Component } from "react";
import UserResults from "./UserResults";

class Breakfast extends Component {
  render() {
    return (
      <div className="breakfast">
        <form className="foodSelector">
          <label htmlFor="foodMenu">Select what you would Like</label>
          <select id="foodMenu" onChange={this.props.handleChange}>
            <option selected disabled value>
              Choose your food
            </option>
            <option value="oreos">Oreos</option>
            <option value="chocolate waffles">Chocolate Waffles</option>
            <option value="captain crunch cereal">Captain Crunch Cereal</option>
            <option value="nutella sandwich">Nutella Sandwich</option>
            <option value="yogurt">Yogurt</option>
            <option value="muffin">Muffin</option>
            <option value="egg tart">Egg Tart</option>
            <option value="banana bread">Banana Bread</option>
            <option value="breakfast drink">Breakfast Drink</option>
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

export default Breakfast;
