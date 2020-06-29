import React, {Component, Fragment} from 'react'

class UserFirstChoice extends Component {
	render() {
		return (
			<Fragment>
				<h2>{this.props.results.userInput}</h2>
				<ul>
					<li>Fat Amount: {this.props.results.usersFood[0]} g</li>
					<li>Calories: {this.props.results.usersFood[1]} kJ</li>
					<li>Sugar: {this.props.results.usersFood[2]} g</li>
					<li>Protein: {this.props.results.usersFood[3]} g</li>
					<li>Carbohydrates: {this.props.results.usersFood[4]} g</li>
				</ul>
				<button onClick={this.props.subClick}>Give me a substitute</button>

			</Fragment>

		)
	}
}

export default UserFirstChoice