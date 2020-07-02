import React, {Component, Fragment} from 'react'

class UserFirstChoice extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<h2>{this.props.results.userInput}</h2>
					<ul>
						<li><span>Fat Amount: </span>{this.props.results.usersFood[0]}g</li>
						<li><span>Calories:</span> {this.props.results.usersFood[1]}kJ</li>
						<li><span>Sugar: </span>{this.props.results.usersFood[2]}g</li>
						<li><span>Protein: </span>{this.props.results.usersFood[3]}g</li>
						<li><span>Carbohydrates:</span> {this.props.results.usersFood[4]}g</li>
					</ul>
					<img src={this.props.results.userImage} alt={this.props.results.userImageAlt} />
				</div>

				<button className="subBtn" onClick={this.props.subClick}>Give me a substitute</button>

			</Fragment>

		)
	}
}

export default UserFirstChoice