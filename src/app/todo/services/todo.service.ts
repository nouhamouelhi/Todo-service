import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] =[];
  task: string ='';
  contenu: string='';
  constructor() {}
  getTodos():Todo[]{
    return this.todos;
  };
  logTodos(): void{
    for (let i =0; i < this.todos.length + 1; i ++){
      console.log(this.todos[i]);
    }
  };
  addTodo(todo: Todo[]): void{
    this.todos.push({
      task: this.task,
      contenu: this.contenu
    })
  }
  }


