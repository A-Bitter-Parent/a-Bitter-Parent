import React, {Component, Fragment} from 'react'
import UserSuggestion from './UserSuggestion'
import UserFirstChoice from './UserFirstChoice'

class UserResults extends Component {
	render() {
		return (
			<Fragment>
				{this.props.results.checkUserChoice ? (
				<div className="button">
					<button className="subBtn" onClick={this.props.subClick}>
					Give me a substitute
					</button>
				</div>
				) : null}
				<div className="userResults">
	
					<div className="userSelection">
						{this.props.results.checkUserChoice ? (
							<UserFirstChoice
								results={this.props.results}
								subClick={this.props.subClick}
							/>
						) : null}
					</div>
	
					{this.props.results.checkReco ? (
						<UserSuggestion
							handleSave={this.props.handleSave}
							results={this.props.results}
						/>
					) : null}
					{/* map through and show image, nutrient attributes carbs(205), sugars(269), fat(204), protein(203), calories(208) */}
				</div>
				</Fragment>
		);
	}
}

export default UserResults

