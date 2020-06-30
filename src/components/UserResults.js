import React, {Component} from 'react'
import UserSuggestion from './UserSuggestion'
import UserFirstChoice from './UserFirstChoice'

class UserResults extends Component {
	render() {
		return (
			<div className="UserResults">
				<div className="userSelection">
					{this.props.results.checkUserChoice ? <UserFirstChoice results={this.props.results} subClick={this.props.subClick}/> : null}
					</div>

					{this.props.results.checkReco ? <UserSuggestion results={this.props.results} /> : null}
					{/* map through and show image, nutrient attributes carbs(205), sugars(269), fat(204), protein(203), calories(208) */}
	
			</div>
	);
	}
}

export default UserResults

