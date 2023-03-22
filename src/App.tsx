import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { PlusCircle } from 'phosphor-react'

function App() {
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
      </div>
      
    </>
  )
}

export default App
