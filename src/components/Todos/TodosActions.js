import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'

function TodosAction({ resetTodo, deleteCompletedTodo, completedTodosExist }) {
  return (
    <>
      <Button title="Reset Todos" onClick={resetTodo}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodo}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  )
}

export default TodosAction
