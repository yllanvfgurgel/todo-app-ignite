import { Trash, Circle, CheckCircle } from "phosphor-react";
import { TodoInfo } from "../App";

import styles from './Todo.module.css'

interface TodoProps {
    todo: TodoInfo;
    onChangeTodo: (id: number) => void;
    onDeleteTodo: (id: number) => void;
}

export function Todo({todo, onChangeTodo, onDeleteTodo}: TodoProps) {

    function handleTodoStatusChange() {
        onChangeTodo(todo.id);
    }

    function handleDeleteTodo() {
        onDeleteTodo(todo.id);
    }

    return (
        <div className={styles.container}>
            <div className={styles.todoMain}>
                <span onClick={handleTodoStatusChange}>
                    {todo.done ?  
                        <CheckCircle size={20} weight="fill" className={styles.todoCheckDone}/>
                        : 
                        <Circle size={20} weight="regular" className={styles.todoCheck}/>
                    }
                </span>
                <p className={`${styles.todoText} ${todo.done && styles.todoTextDashed }`}>
                    {todo.description}
                </p>
            </div>
            <div className={styles.todoDelete} onClick={handleDeleteTodo}>
                <Trash size={20} weight="thin"/>
            </div>
        </div>
    );
}