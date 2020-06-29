import React, {Component} from 'react'

class UserResults extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		}
	// 	 } 
	render() {
		return (
			<div className="UserResults">
				<div className="userSelection">
					<h2>{this.props.results.userInput}</h2>
					

					<ul>
						<li>Fat Amount: {this.props.results.usersFood[0]} g</li>
						<li>Calories: {this.props.results.usersFood[1]} kJ</li>
						<li>Sugar: {this.props.results.usersFood[2]} g</li>
						<li>Protein: {this.props.results.usersFood[3]} g</li>
						<li>Carbohydrates: {this.props.results.usersFood[4]} g</li>
					</ul>
					{/* map through and show image, nutrient attributes carbs(205), sugars(269), fat(204), protein(203), calories(208) */}
				</div>
				<div className="userSuggestion">
					<h2>{this.props.results.userInput}</h2>
					<ul>
						<li>Fat Amount: {this.props.results.recommendedFood[0]} g</li>
						<li>Calories: {this.props.results.recommendedFood[1]} kJ</li>
						<li>Sugar: {this.props.results.recommendedFood[2]} g</li>
						<li>Protein: {this.props.results.recommendedFood[3]} g</li>
						<li>Carbohydrates: {this.props.results.recommendedFood[4]} g</li>
					</ul>

				</div>
			</div>
	);
	}
}

export default UserResults

