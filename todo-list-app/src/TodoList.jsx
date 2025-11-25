import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm"
import TodoListItem from "./TodoLostItem"
import { getCompletedTodos, getIncompletedTodos, getIsLoading, getTodos } from "./selectors";


export default function TodoList() {
  const todosAreLoading = useSelector(getIsLoading)
  const completedTodos = useSelector(getCompletedTodos);
  const incompletedTodos = useSelector(getIncompletedTodos);


  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm />
      {todosAreLoading
        ? <p>Loading...</p>
        : (
          <>
            <h3>Completed:</h3>
            {completedTodos.map((todo) => (
              <TodoListItem todo={todo} key={todo.id} />
            ))}

            <h3>Incompleted:</h3>
            {incompletedTodos.map((todo, index) => (
              <TodoListItem todo={todo} key={todo.id} />
            ))}
          </>
        )}
    </div>
  )
}