import React from 'react';
import { TodosType } from '../TodoInput/TodoInput';
import './TodoItem.css';

type PropsType = {
    todos: Array<TodosType>,
    removeTodo: (id: number) => void
    changeCheckboxStatus: (id: number) => void
};
const TodoItem = (props: PropsType) => {
    return (
        <>
            {
                props.todos.map((todo) => {
                    return <div key={todo?.id} className='todo'>
                        <input
                            type='checkbox'
                            onChange={() => props.changeCheckboxStatus(todo?.id)}
                            checked={todo?.isDone} />
                        <p>{todo?.title}</p>
                        <button className='btn' onClick={() => props.removeTodo(todo?.id)}>Remove</button>
                    </div>
                })}
        </>)
}
export default TodoItem