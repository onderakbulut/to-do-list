new Vue({
	el   : "#app",
	data : {
		newItem : '',
		todoList : [
			{
				title : "Morning walk",
				done : true
			},
			{
				title : "Lunch",
				done : false
			},
			{
				title : "Dinner with Shobhit",
				done : false
			},
			{
				title : "Night Reading",
				done : false
			}
		],
	},
	methods : {
		toDo (){
			if(this.newItem != ''){
				this.todoList.push({
					title : this.newItem,
					done : false
				});
				this.newItem = '';
			}
			else {
				alert("New item can not null!")
			}	
		},
		remove (e) {
			const index = this.todoList.indexOf(e);
			this.todoList.splice(index,1);
		},
		allDone (){
			this.todoList.forEach(item => {
				item.done = true
			});
		}
	},
	watch: {
		todoList: {
			// We have to move our method to a handler field
			handler() {
				localStorage.todoList = JSON.stringify(this.todoList);
			},
			// This will let Vue know to look inside the array
			deep: true,
		},
	},
	mounted() {
		if (localStorage.todoList) {
			this.todoList = JSON.parse(localStorage.todoList);
		}
	},
})