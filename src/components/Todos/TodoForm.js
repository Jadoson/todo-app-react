import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoFrom({ addTodo }) {
  const [text, setText] = useState('')
  function onSubmitHandler(event) {
    event.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <label>
          <input
            placeholder="Enter new todo"
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </label>
        <Button type="submit" title="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoFrom
