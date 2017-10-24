import { Component } from '@angular/core';

class Todo { 
	constructor(public title: string, 
							public completed: boolean = false){}
}

const todos: ITodo[] = [
	{
		title: 'learn JS',
		completed: true
	},
	{
		title: 'learn Angular2',
		completed: false
	},
	{
		title: 'write app',
		completed: false
	}
];

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css',]


})
export class AppComponent{
	title: string = 'Angular 2Do'
	todos: Todo [] = todos;
	newTodoTitle: string = '';

	create(event: event, title: string){
		let todo: Todo = new Todo(this.newTodoTitle);
		this.todos.push(todo);
		this.newTodoTitle = '';
	}

	toggle(todo: Todo){		
		todo.completed = !todo.completed;
	}

	delete(todo: Todo){
		let index = this.todos.indexOf(todo);

		if(index>-1){
			this.todos.splice(index, 1)
		}
	}

}