import './index.css'

const TodoItem = props => {
  const {TodoValues, deleteTodo} = props
  const {id, title} = TodoValues

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="card">
      <p className="paragraph">{title}</p>
      <button className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
