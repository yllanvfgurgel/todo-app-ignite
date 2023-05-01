import { useState } from 'react'

import { Header } from './components/Header'
import { PlusCircle } from 'phosphor-react'
import { Todo } from './components/Todo'

import './global.css'
import styles from './App.module.css'

export interface TodoInfo {
  id: number;
  description: string;
  done: boolean;
}

const todoList: TodoInfo[] = [
  {
    id: 1,
    description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    done: false
  },
  {
    id: 2,
    description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    done: false
  },
  {
    id: 3,
    description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    done: false
  },
  {
    id: 4,
    description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    done: false
  },
]

function App() {
  const [todos, setTodos] = useState<TodoInfo[]>(todoList);

  const createdTodosCount = todos.length;
  const completedTodosCount = todos.filter(todo => todo.done).length;

  function handleChangeTodoStatus(id: number) {
    const todosChanged = todos.map(todo => {
      if(todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    setTodos(todosChanged);
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.searchForm}>
          <input type="text" placeholder='Adicione uma nova tarefa' />
          <button type='submit'>
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
        <div className={styles.todosContainer}>
          <div className={styles.todosInfo}>
            <div className={styles.createdTodos}>
              Tarefas criadas <span>{createdTodosCount}</span>
            </div>
            <div className={styles.completedTodos}>
              Concluídas <span>{completedTodosCount} de {createdTodosCount}</span>
            </div>
          </div>
          <div className={styles.todos}>
            {
              todoList.map(todo => 
                <Todo onChangeTodo={handleChangeTodoStatus} key={todo.id} todo={todo}/>
              )
            }
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
