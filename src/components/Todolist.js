import React, { Component } from 'react'
import Todoitem from './Todoitem';
export default class Todolist extends Component {
	render() {
		const {items, clearList, handleDelete} = this.props;
		return (
		<ul className="list-group my-5">
			<h3 className="text-capitalize text-center">
				todo list
			</h3>
			{
				items.map(item => {
					return (
						<Todoitem 
						key={item.id} 
						title={item.title}
						handleDelete = {() => handleDelete(item.id)}
						/>
					)
				})
			}
			
			
			<button type="submit"
		 className="btn-danger btn-block text-capitalize mt-5"
		 onClick={clearList} 
		 >Clear list</button>
		</ul>
		)
	}
}
