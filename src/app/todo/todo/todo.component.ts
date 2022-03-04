import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService){}
  task: string = '';
  contenu: string = '';
  todos:Todo[] = [];

  ngOnInit(): void {


    this.todoService.addTodo(this.todos)
    this.todoService.getTodos();
    this.todoService.logTodos();
  }
  remplirTodo(){
    this.todos.push({
    task: this.task,
    contenu: this.contenu
  })}
}

