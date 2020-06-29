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
	
					</ul>
					{/* <img src={this.props.results.userInput.photo.thumb}/> */}
					{/* map through and show image, nutrient attributes carbs(205), sugars(269), fat(204), protein(203), calories(208) */}
				</div>
				<div className="userSuggestion"></div>
			</div>
	);
	}
}

export default UserResults

