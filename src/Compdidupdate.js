const Compdidupdate = () => {
	componentDidUpdate(prevProps, prevState) {
		if (prevState.userInput !== this.state.userInput) {
			axios({
				url: 'https://trackapi.nutritionix.com/v2/search/instant',
				method: 'POST',
				responseType: 'JSON',
				headers: {
					"Content-Type": "application/json",
					"x-app-id": "2f61b616",
					"x-app-key": "3c2af909b8bc091e21372b59a9e4b835",
					"x-remote-user-id": "0"
				},
				data: {
					"query": this.state.userInput,
					"detailed": true,
				}
			}).then((response) => {
				const nutObj = response.data.common[0].full_nutrients;
				let sugarAmount;
				for (let i=0; i<nutObj.length; i++) {
					if (nutObj[i].attr_id === 269) {
						sugarAmount =  nutObj[i].value
					}
				}
				this.setState({
					// sugarValue: sugarAmount
					setSugarValue(sugarAmount)
				})
				console.log(this.state.sugarValue);
			});
		}
		if  (prevState.sugarValue !== this.state.sugarValue) {
			if (this.state.sugarValue >= 10) {
				axios({
					url: 'https://trackapi.nutritionix.com/v2/search/instant',
					method: 'POST',
					responseType: 'JSON',
					headers: {
						"Content-Type": "application/json",
						"x-app-id": "2f61b616",
						"x-app-key": "3c2af909b8bc091e21372b59a9e4b835",
						"x-remote-user-id": "0"
					},
					data: {
						"query": 'vegetables || fruits || grains || protein',
						"detailed": true,
						"full_nutrients": {
							"269": {
							"lte": this.state.sugarValue - 10,
							}  }
					}
				}).then((response) => {
					console.log(response.data.common[0]);
				})
			} else if (this.state.sugarValue < 10) {
				axios({
					url: 'https://trackapi.nutritionix.com/v2/search/instant',
					method: 'POST',
					responseType: 'JSON',
					headers: {
						"Content-Type": "application/json",
						"x-app-id": "2f61b616",
						"x-app-key": "3c2af909b8bc091e21372b59a9e4b835",
						"x-remote-user-id": "0"
					},
					data: {
						"query": 'vegetables || fruits || grains || protein',
						"detailed": true,
						"full_nutrients": {
							"269": {
							"lte": this.state.sugarValue,
							}  }
					}
				}).then((response) => {
					console.log(response.data.common[0]);
					if (response.data.common[0] === undefined) {
						alert('Go ahead! Eat it!')
					}
				})
			} else {
				alert('Go ahead! Eat it!')
			}
		}
	}
										}

export default Compdidupdate