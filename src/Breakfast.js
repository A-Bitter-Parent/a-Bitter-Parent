import React, { Component } from 'react';
import axios from 'axios';

class Breakfast extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            sugarValue: '',
        }
    }

    handleChange = (event) => {
        event.preventDefault();

        let userInput = this.state.userInput;
        let value = event.target.value;

        userInput = value;

        this.setState({
            userInput: userInput,
        })
    }

    componentDidUpdate() {
        axios({
            url: 'https://trackapi.nutritionix.com/v2/search/instant',
            method: 'POST',
            responseType: 'JSON',
            headers: {
                "Content-Type": "application/json",
                "x-app-id": "b944f3bc",
                "x-app-key": "7d87ed834750e86fd47843d47937c909",
                "x-remote-user-id": "0"
            },
            data: {
                "query": this.state.userInput,
                "detailed": true,
            }
        }).then((response) => {
            // console.log(response.data.common[0].full_nutrients);

            const array = response.data.common[0].full_nutrients;

            // console.log(array)

            const sugarAmount = array.filter(attr_id => attr_id > 268);

            // const found = array1.find(element => element > 10);

            console.log(sugarAmount)

            // this.setState({

            // });
        });
    }

    render() {
        return (
            <div className="breakfast">
                <form className='foodSelector'>
                    <label htmlFor="foodMenu">Select what you would Like</label>
                    <select id='foodMenu' onChange={this.handleChange}>
                        <option value="waffles">Waffles</option>
                        <option value="pancake">Pancake</option>
                        <option value="cereal">Cereal</option>
                        <option value="breakfast sandwich">Breakfast Sandwich</option>
                        <option value="yogurt">Yogurt</option>
                        <option value="fruit salad">Fruit Salad</option>
                        <option value="eggs and bacon">Eggs and Bacon</option>
                        <option value="english muffin">English Muffin</option>
                        <option value="sausage">Sausage</option>
                        <option value="cake">Cake</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Breakfast;