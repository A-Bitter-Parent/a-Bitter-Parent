import React, {Component, Fragment} from 'react'
import firebase from '../firebase'

class DisplaySavedFoods extends Component {

    constructor() {
        super();
        this.state = {
          foods: [],
        };
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        dbRef.on("value", (response) => {
          const newState = [];
          const data = response.val();
          for (let key in data) {
            newState.push({
              food: data[key],
              key: key,
            });
          }
          this.setState({
            foods: newState,
        });
        console.log(this.state.foods);
        });
    }

    deleteActivity = (key) => {
        const dbRef = firebase.database().ref();
        dbRef.child(key).remove();
        console.log("delete pushed");
    };

    render() {
        return (
            <div className="showFoodPairs">
                {this.state.foods.map(({ key, food }) => {
                    return (
                        <Fragment>
                            <div key={key} 
                            className="food">
                                <ul>
                                    <li>{food.food1.userFoodName}</li>
                                    <li>
                                        <ul>
                                            <li>Fat Amount: {food.food1.userFoodOption[0]}</li>
                                            <li>Calories: {food.food1.userFoodOption[1]}</li>
                                            <li>Sugar: {food.food1.userFoodOption[2]}</li>
                                            <li>Protein: {food.food1.userFoodOption[3]}</li>
                                            <li>Carbohydrates: {food.food1.userFoodOption[4]}</li>
                                        </ul>
                                    </li>
                                </ul>

                                <ul>
                                    <li>{food.food2.userRecoName}</li>
                                    <li>
                                        <ul>
                                            <li>Fat Amount: {food.food2.userRecoOption[0]}</li>
                                            <li>Calories: {food.food2.userRecoOption[1]}</li>
                                            <li>Sugar: {food.food2.userRecoOption[2]}</li>
                                            <li>Protein: {food.food2.userRecoOption[3]}</li>
                                            <li>Carbohydrates: {food.food2.userRecoOption[4]}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <button onClick={() => {
                                this.deleteActivity(key);
                                }}>Delete</button>
                        </Fragment>
                    );
                })}

            </div>
        )
    }
}

export default DisplaySavedFoods