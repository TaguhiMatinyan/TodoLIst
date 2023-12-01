import React from 'react';
import './TodoInput.css';

export type TodosType = {
    id: number,
    title: string,
    isDone: boolean,
}
type PropsType = {
    text: string,
    changeStateText:(text:string)=>void
    addTodo:()=>void
};
const TodoInput = (props: PropsType) => {
    return (
        <div>
            <div>
                <input 
                className='todo_input' 
                placeholder='Write Your New Todo'
                value={props.text}
                onChange={(e)=>props.changeStateText(e.target.value)}/>
                <button className='btn'
                onClick={props.addTodo}>Add</button>
            </div>
            
           
        </div>
    )
};
export default TodoInput