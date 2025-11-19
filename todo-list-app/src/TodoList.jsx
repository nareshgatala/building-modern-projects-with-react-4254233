import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm"
import TodoListItem from "./TodoLostItem"


export default function TodoList() {
  const todos = useSelector(state => state.todos.value);

  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm />
      <h3>Completed:</h3>
      {todos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}

      <h3>Incompleted:</h3>
      {todos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))
      }
    </div>
  )
}