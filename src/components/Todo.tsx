import { Trash } from "phosphor-react";
import { TodoInfo } from "../App";
import doneLogo from '../assets/done.svg'

import styles from './Todo.module.css'

interface TodoProps {
    todo: TodoInfo;
    onChangeTodo: (id: number) => void;
}

export function Todo({todo, onChangeTodo}: TodoProps) {

    function handleTodoStatusChange() {
        onChangeTodo(todo.id);
    }

    return (
        <div className={styles.container}>
            <div className={styles.todoMain}>
                <span onClick={handleTodoStatusChange} className={styles.todoCheck}>
                    {todo.done && <img src={doneLogo} alt=""/>}
                </span>
                <p className={styles.todoText}>
                    {todo.description}
                </p>
            </div>
            <div className={styles.todoDelete}>
                <Trash size={20} weight="thin"/>
            </div>
        </div>
    );
}