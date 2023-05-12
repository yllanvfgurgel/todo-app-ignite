import { FormEvent, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'

import { Header } from './components/Header'
import { PlusCircle } from 'phosphor-react'
import { Todo } from './components/Todo'

import emptyListLogo from './assets/emptyList.svg'

import './global.css'
import styles from './App.module.css'

export interface TodoInfo {
  id: string;
  description: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoInfo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const createdTodosCount = todos.length;
  console.log(todos)
  const completedTodosCount = todos.filter(todo => todo.done).length;

  function handleChangeTodoStatus(id: string) {
    const todosChanged = todos.map(todo => {
      if(todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    setTodos(todosChanged);
  };

  function handleDeleteTodo(id: string) {
    const filteredTodoList = todos.filter(todo => todo.id !== id);

    setTodos([...filteredTodoList]);
  }

  function handleCreateTodo(event: FormEvent) {
    event?.preventDefault();
    const todoToAdd: TodoInfo = {
      description: newTodo,
      done: false,
      id: uuidV4()
    };

    setTodos((state) => [...state, todoToAdd]);
    setNewTodo("");
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
          {todos.length > 0 ?
            <div className={styles.todos}>
              {
                todos.map(todo => 
                  <Todo onChangeTodo={handleChangeTodoStatus} key={todo.id} todo={todo} onDeleteTodo={handleDeleteTodo}/>
                )
              }
            </div>
            :
            <div className={styles.emptyTodos}>
              <img src={emptyListLogo} />
              <p className={styles.mainText}>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          }
        </div>
      </div>
      
    </>
  )
}

export default App
