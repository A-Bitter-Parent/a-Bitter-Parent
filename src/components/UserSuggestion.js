import React, {Component} from 'react'

class UserSuggestion extends Component {

	render() {
		return (
			<div className="UserSuggestion">
				<h2>{this.props.results.recoFoodTitle}</h2>
				<ul>
					<li>Fat Amount: {this.props.results.recommendedFood[0]} g</li>
					<li>Calories: {this.props.results.recommendedFood[1]} kJ</li>
					<li>Sugar: {this.props.results.recommendedFood[2]} g</li>
					<li>Protein: {this.props.results.recommendedFood[3]} g</li>
					<li>Carbohydrates: {this.props.results.recommendedFood[4]} g</li>
				</ul>
				<img src={this.props.results.recoImage} alt={this.props.results.recoImageAlt} />
				{/* <button onClick={this.props.handleSave}>Save selection</button> */}
			</div>
		)
	}
}

export default UserSuggestion