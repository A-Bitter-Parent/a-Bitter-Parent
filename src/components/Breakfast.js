import React, { Component } from "react";
import UserResults from "./UserResults";

class Breakfast extends Component {
  render() {
    return (
      <div className="breakfast">
        <form className="foodSelector">
          <label htmlFor="foodMenu">Select what you would Like</label>
          <select id="foodMenu" onChange={this.props.handleChange}>
            <option selected defaultValue>
              Choose your food
            </option>
            <option value="Oreos">Oreos</option>
            <option value="eggos">Eggos</option>
            <option value="cereal">Cereal</option>
            <option value="breakfast sandwich">Breakfast Sandwich</option>
            <option value="yogurt">Yogurt</option>
            <option value="Muffin">Muffin</option>
            <option value="eggs and bacon">Eggs and Bacon</option>
            <option value="Banana Bread">Banana Bread</option>
            <option value="sausage">Sausage</option>
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
