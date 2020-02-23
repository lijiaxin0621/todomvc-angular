import { Component } from '@angular/core';
const todos = [
  {
    id: 1,
    title: "吃饭",
    done: true
  },
  {
    id: 2,
    title: "睡觉",
    done: false
  }]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'todomvc-angular';
  //声明一个成员变量todos
  public todos:{
    id:number,
    title:string,
    done:boolean
  }[] = todos;
  //添加一个新任务的方法
  addTodo(event){
    var taskName = event.target.value;
    var lastTask = this.todos[this.todos.length-1];
    var newTask = {
      id:lastTask?lastTask.id:0+1,
      title:taskName,
      done:false,
  }
  this.todos.push(newTask);
  event.target.value = ''
  }

  get toggleAll(){
    return this.todos.every(item=>item.done)
  }
  set toggleAll(value){
    this.todos.forEach(item=>item.done=value)
  }
  removeTodo(index){
    this.todos.splice(index,1);
  }
}
