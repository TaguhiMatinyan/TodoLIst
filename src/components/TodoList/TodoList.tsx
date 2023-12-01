import React, { useState } from 'react';
import TodoInput from '../TodoInput/TodoInput';
import TodoItem from '../TodoItem/TodoItem';
import { TodosType } from '../TodoInput/TodoInput'
import './TodoList.css';


function TodoList() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState<Array<TodosType>>([]);
    const changeStateText = (text: string) => {
        setText(text)
    };
    const addTodo = () => {
        setTodos((prev) => {
            return [...prev, { id: Date.now(), title: text, isDone: false }]
        })
    };
    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    };
    const changeCheckboxStatus=(id:number)=>{
        setTodos(todos.map((todo)=>{
            if(todo.id===id){
                return {
                    ...todo,
                    isDone:!todo.isDone,
                }
            }else{
                return todo
            }
        }))
    };
    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoInput
                text={text}
                changeStateText={changeStateText}
                addTodo={addTodo}
            />
            <TodoItem
                todos={todos}
                removeTodo={removeTodo}
                changeCheckboxStatus={changeCheckboxStatus}
            />
        </div>
    );
}
export default TodoList;
