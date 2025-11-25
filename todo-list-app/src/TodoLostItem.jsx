import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoCompleted } from "./thunks";
import styles from "styled-components";

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  const CardContainer = styles.div`100px; padding: 20px; margin: 10px; border: 1px solid black; border-radius: 5px; background-color: ${todo.isCompleted ? '#d3ffd3' : '#ffd3d3'}`;

  return (
    <CardContainer>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted
        ? <button onClick={() => dispatch(deleteTodo(todo.id))}>DeleteItem</button>
        : <button onClick={() => dispatch(toggleTodoCompleted(todo.id))}>Mark as completed</button>}
    </CardContainer>
  )
}