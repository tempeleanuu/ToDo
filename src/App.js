import React, { Component } from 'react';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
	state= {
		items:[],
		id:uuid(),
		item:'',
		editItem:false
	}
	handleChange =(e)=> {
		this.setState({
			item:e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

const newItem = {
	id:this.state.id,
	title: this.state.item
};

const updatedItems = [...this.state.items,newItem];

this.setState({
	items: updatedItems,
	item: "",
	id:uuid(),
	editItem:false
});

	};

clearList = () => {
	this.setState({
		items:[]
	})
}
handleDelete = (id) => {
	const filteredItems = this.state.items.filter(item => 
		item.id !== id)
		this.setState({
			items: filteredItems
		});
};
  render() {
	  return (
		<div className="container">
			<div className="row">
				<div className="col-10 mx-auto col-md-8 mt-4">
					<h3 className="text-capitalize text-center">ToDo Input</h3>
				<Todoinput 
				item={this.state.item} 
				handleChange={this.handleChange}
				handleSubmit = {this.handleSubmit}
				 />
				  <Todolist
				items={this.state.items} 
				clearList = {this.clearList}
				handleDelete = {this.handleDelete}
				  />
				</div>
			</div>
		</div>
		
	  )
  }
  
    
}

export default App;
