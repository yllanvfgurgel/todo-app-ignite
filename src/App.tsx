import { FormEvent, useRef, useState } from 'react'

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
  const [newTodo, setNewTodo] = useState<string>("");

  const createdTodosCount = todos.length;
  console.log(todos)
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

  function handleDeleteTodo(id: number) {
    const filteredTodoList = todos.filter(todo => todo.id !== id);

    setTodos([...filteredTodoList]);
  }

  function handleCreateTodo(event: FormEvent) {
    event?.preventDefault();
    const todoToAdd: TodoInfo = {
      description: newTodo,
      done: false,
      id: todos.length++
    }

    setTodos((state) => [...state, todoToAdd]);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.searchForm} onSubmit={handleCreateTodo}>
          <input 
            value={newTodo} 
            type="text" 
            placeholder='Adicione uma nova tarefa' 
            onChange={(event) => setNewTodo(event.target.value)} 
          />
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
              todos.map(todo => 
                <Todo onChangeTodo={handleChangeTodoStatus} key={todo.id} todo={todo} onDeleteTodo={handleDeleteTodo}/>
              )
            }
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
