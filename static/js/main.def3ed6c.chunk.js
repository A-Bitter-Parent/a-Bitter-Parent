(this["webpackJsonpa-bitter-parent"]=this["webpackJsonpa-bitter-parent"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),s=a.n(o),l=(a(22),a(3)),u=a(4),i=a(6),c=a(5),p=a(1),d=a.n(p),h=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleChange=function(t){t.preventDefault();var a=e.state.userInput;a=t.target.value,e.setState({userInput:a})},e.state={userInput:"",sugarValue:"",usersFood:[],recommendedFood:[]},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;t.userInput!==this.state.userInput&&d()({url:"https://trackapi.nutritionix.com/v2/search/instant",method:"POST",responseType:"JSON",headers:{"Content-Type":"application/json","x-app-id":"2f61b616","x-app-key":"3c2af909b8bc091e21372b59a9e4b835","x-remote-user-id":"0"},data:{query:this.state.userInput,detailed:!0}}).then((function(e){for(var t,n=e.data.common[0].full_nutrients,r=0;r<n.length;r++)269===n[r].attr_id&&(t=n[r].value);a.setState({sugarValue:t}),console.log(a.state.sugarValue)})),t.sugarValue!==this.state.sugarValue&&(this.state.sugarValue>=10?d()({url:"https://trackapi.nutritionix.com/v2/search/instant",method:"POST",responseType:"JSON",headers:{"Content-Type":"application/json","x-app-id":"2f61b616","x-app-key":"3c2af909b8bc091e21372b59a9e4b835","x-remote-user-id":"0"},data:{query:"vegetables || fruits || grains || protein",detailed:!0,full_nutrients:{269:{lte:this.state.sugarValue-10}}}}).then((function(e){console.log(e.data.common[0])})):this.state.sugarValue<10?d()({url:"https://trackapi.nutritionix.com/v2/search/instant",method:"POST",responseType:"JSON",headers:{"Content-Type":"application/json","x-app-id":"2f61b616","x-app-key":"3c2af909b8bc091e21372b59a9e4b835","x-remote-user-id":"0"},data:{query:"vegetables || fruits || grains || protein",detailed:!0,full_nutrients:{269:{lte:this.state.sugarValue}}}}).then((function(e){console.log(e.data.common[0]),void 0===e.data.common[0]&&alert("Go ahead! Eat it!")})):alert("Go ahead! Eat it!"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"breakfast"},r.a.createElement("form",{className:"foodSelector"},r.a.createElement("label",{htmlFor:"foodMenu"},"Select what you would Like"),r.a.createElement("select",{id:"foodMenu",onChange:this.handleChange},r.a.createElement("option",{value:"waffles"},"Waffles"),r.a.createElement("option",{value:"pancakes"},"Pancakes"),r.a.createElement("option",{value:"cereal"},"Cereal"),r.a.createElement("option",{value:"breakfast sandwich"},"Breakfast Sandwich"),r.a.createElement("option",{value:"yogurt"},"Yogurt"),r.a.createElement("option",{value:"fruit salad"},"Fruit Salad"),r.a.createElement("option",{value:"eggs and bacon"},"Eggs and Bacon"),r.a.createElement("option",{value:"english muffin"},"English Muffin"),r.a.createElement("option",{value:"sausage"},"Sausage"),r.a.createElement("option",{value:"cake"},"Cake"))))}}]),a}(n.Component),m=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleChange=function(t){t.preventDefault();var a=e.state.userInput;a=t.target.value,e.setState({userInput:a})},e.state={userInput:"",sugarValue:"",usersFood:[],recommendedFood:[]},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;t.userInput!==this.state.userInput&&d()({url:"https://trackapi.nutritionix.com/v2/search/instant",method:"POST",responseType:"JSON",headers:{"Content-Type":"application/json","x-app-id":"2f61b616","x-app-key":"3c2af909b8bc091e21372b59a9e4b835","x-remote-user-id":"0"},data:{query:this.state.userInput,detailed:!0}}).then((function(e){for(var t,n=e.data.common[0].full_nutrients,r=0;r<n.length;r++)269===n[r].attr_id&&(t=n[r].value);a.setState({sugarValue:t}),console.log(a.state.sugarValue)})),t.sugarValue!==this.state.sugarValue&&(this.state.sugarValue>=10?d()({url:"https://trackapi.nutritionix.com/v2/search/instant",method:"POST",responseType:"JSON",headers:{"Content-Type":"application/json","x-app-id":"2f61b616","x-app-key":"3c2af909b8bc091e21372b59a9e4b835","x-remote-user-id":"0"},data:{query:"vegetables || fruits || grains || protein",detailed:!0,full_nutrients:{269:{lte:this.state.sugarValue-10}}}}).then((function(e){console.log(e.data.common[0])})):this.state.sugarValue<10?d()({url:"https://trackapi.nutritionix.com/v2/search/instant",method:"POST",responseType:"JSON",headers:{"Content-Type":"application/json","x-app-id":"2f61b616","x-app-key":"3c2af909b8bc091e21372b59a9e4b835","x-remote-user-id":"0"},data:{query:"vegetables || fruits || grains || protein",detailed:!0,full_nutrients:{269:{lte:this.state.sugarValue}}}}).then((function(e){console.log(e.data.common[0]),void 0===e.data.common[0]&&alert("Go ahead! Eat it!")})):alert("Go ahead! Eat it!"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"lunch"},r.a.createElement("form",{className:"foodSelector"},r.a.createElement("label",{htmlFor:"foodMenu"},"Select what you would Like"),r.a.createElement("select",{id:"foodMenu",onChange:this.handleChange},r.a.createElement("option",{value:"ice cream"},"Ice cream"),r.a.createElement("option",{value:"pancakes"},"Pancakes"),r.a.createElement("option",{value:"cereal"},"Cereal"),r.a.createElement("option",{value:"breakfast sandwich"},"Breakfast Sandwich"),r.a.createElement("option",{value:"yogurt"},"Yogurt"),r.a.createElement("option",{value:"fruit salad"},"Fruit Salad"),r.a.createElement("option",{value:"eggs and bacon"},"Eggs and Bacon"),r.a.createElement("option",{value:"english muffin"},"English Muffin"),r.a.createElement("option",{value:"sausage"},"Sausage"),r.a.createElement("option",{value:"cake"},"Cake"))))}}]),a}(n.Component),f=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleChange=function(t){t.preventDefault();var a=e.state.userInput;a=t.target.value,e.setState({userInput:a})},e.state={userInput:"",sugarValue:"",usersFood:[],recommendedFood:[]},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;t.userInput!==this.state.userInput&&d()({url:"https://trackapi.nutritionix.com/v2/search/instant",method:"POST",responseType:"JSON",headers:{"Content-Type":"application/json","x-app-id":"2f61b616","x-app-key":"3c2af909b8bc091e21372b59a9e4b835","x-remote-user-id":"0"},data:{query:this.state.userInput,detailed:!0}}).then((function(e){for(var t,n=e.data.common[0].full_nutrients,r=0;r<n.length;r++)269===n[r].attr_id&&(t=n[r].value);a.setState({sugarValue:t}),console.log(a.state.sugarValue)})),t.sugarValue!==this.state.sugarValue&&(this.state.sugarValue>=10?d()({url:"https://trackapi.nutritionix.com/v2/search/instant",method:"POST",responseType:"JSON",headers:{"Content-Type":"application/json","x-app-id":"2f61b616","x-app-key":"3c2af909b8bc091e21372b59a9e4b835","x-remote-user-id":"0"},data:{query:"vegetables || fruits || grains || protein",detailed:!0,full_nutrients:{269:{lte:this.state.sugarValue-10}}}}).then((function(e){console.log(e.data.common[0])})):this.state.sugarValue<10?d()({url:"https://trackapi.nutritionix.com/v2/search/instant",method:"POST",responseType:"JSON",headers:{"Content-Type":"application/json","x-app-id":"2f61b616","x-app-key":"3c2af909b8bc091e21372b59a9e4b835","x-remote-user-id":"0"},data:{query:"vegetables || fruits || grains || protein",detailed:!0,full_nutrients:{269:{lte:this.state.sugarValue}}}}).then((function(e){console.log(e.data.common[0]),void 0===e.data.common[0]&&alert("Go ahead! Eat it!")})):alert("Go ahead! Eat it!"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"dinner"},r.a.createElement("form",{className:"foodSelector"},r.a.createElement("label",{htmlFor:"foodMenu"},"Select what you would Like"),r.a.createElement("select",{id:"foodMenu",onChange:this.handleChange},r.a.createElement("option",{value:"syrup"},"Syrup"),r.a.createElement("option",{value:"pancakes"},"Pancakes"),r.a.createElement("option",{value:"cereal"},"Cereal"),r.a.createElement("option",{value:"breakfast sandwich"},"Breakfast Sandwich"),r.a.createElement("option",{value:"yogurt"},"Yogurt"),r.a.createElement("option",{value:"fruit salad"},"Fruit Salad"),r.a.createElement("option",{value:"eggs and bacon"},"Eggs and Bacon"),r.a.createElement("option",{value:"english muffin"},"English Muffin"),r.a.createElement("option",{value:"sausage"},"Sausage"),r.a.createElement("option",{value:"cake"},"Cake"))))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleChange=function(t){t.preventDefault();var a=e.state.userInput;a=t.target.value,e.setState({userInput:a})},e.state={userInput:"",sugarValue:"",usersFood:[],recommendedFood:[]},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;t.userInput!==this.state.userInput&&d()({url:"https://trackapi.nutritionix.com/v2/search/instant",method:"POST",responseType:"JSON",headers:{"Content-Type":"application/json","x-app-id":"2f61b616","x-app-key":"3c2af909b8bc091e21372b59a9e4b835","x-remote-user-id":"0"},data:{query:this.state.userInput,detailed:!0}}).then((function(e){for(var t,n=e.data.common[0].full_nutrients,r=0;r<n.length;r++)269===n[r].attr_id&&(t=n[r].value);a.setState({sugarValue:t}),console.log(a.state.sugarValue)})),t.sugarValue!==this.state.sugarValue&&(this.state.sugarValue>=10?d()({url:"https://trackapi.nutritionix.com/v2/search/instant",method:"POST",responseType:"JSON",headers:{"Content-Type":"application/json","x-app-id":"2f61b616","x-app-key":"3c2af909b8bc091e21372b59a9e4b835","x-remote-user-id":"0"},data:{query:"vegetables || fruits || grains || protein",detailed:!0,full_nutrients:{269:{lte:this.state.sugarValue-10}}}}).then((function(e){console.log(e.data.common[0])})):this.state.sugarValue<10?d()({url:"https://trackapi.nutritionix.com/v2/search/instant",method:"POST",responseType:"JSON",headers:{"Content-Type":"application/json","x-app-id":"2f61b616","x-app-key":"3c2af909b8bc091e21372b59a9e4b835","x-remote-user-id":"0"},data:{query:"vegetables || fruits || grains || protein",detailed:!0,full_nutrients:{269:{lte:this.state.sugarValue}}}}).then((function(e){console.log(e.data.common[0]),void 0===e.data.common[0]&&alert("Go ahead! Eat it!")})):alert("Go ahead! Eat it!"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"snack"},r.a.createElement("form",{className:"foodSelector"},r.a.createElement("label",{htmlFor:"foodMenu"},"Select what you would Like"),r.a.createElement("select",{id:"foodMenu",onChange:this.handleChange},r.a.createElement("option",{value:"candy"},"Candy"),r.a.createElement("option",{value:"pancakes"},"Pancakes"),r.a.createElement("option",{value:"cereal"},"Cereal"),r.a.createElement("option",{value:"breakfast sandwich"},"Breakfast Sandwich"),r.a.createElement("option",{value:"yogurt"},"Yogurt"),r.a.createElement("option",{value:"fruit salad"},"Fruit Salad"),r.a.createElement("option",{value:"eggs and bacon"},"Eggs and Bacon"),r.a.createElement("option",{value:"english muffin"},"English Muffin"),r.a.createElement("option",{value:"sausage"},"Sausage"),r.a.createElement("option",{value:"cake"},"Cake"))))}}]),a}(n.Component),v=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleBreakfastClick=function(){e.setState({breakfast:!0,lunch:!1,dinner:!1,snack:!1})},e.handleLunchClick=function(){e.setState({breakfast:!1,lunch:!0,dinner:!1,snack:!1})},e.handleDinnerClick=function(){e.setState({breakfast:!1,lunch:!1,dinner:!0,snack:!1})},e.handleSnackClick=function(){e.setState({breakfast:!1,lunch:!1,dinner:!1,snack:!0})},e.state={breakfast:!1,lunch:!1,dinner:!1,snack:!1},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"userInput"},r.a.createElement("button",{onClick:this.handleBreakfastClick},"Breakfast"),r.a.createElement("button",{onClick:this.handleLunchClick},"Lunch"),r.a.createElement("button",{onClick:this.handleDinnerClick},"Dinner"),r.a.createElement("button",{onClick:this.handleSnackClick},"Snack"),this.state.breakfast?r.a.createElement(h,null):null,this.state.lunch?r.a.createElement(m,null):null,this.state.dinner?r.a.createElement(f,null):null,this.state.snack?r.a.createElement(g,null):null)}}]),a}(n.Component),b=(a(40),function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={userInput:""},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"A Bitter Parent"),r.a.createElement(v,{userInput:this.state.userInput}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.def3ed6c.chunk.js.map