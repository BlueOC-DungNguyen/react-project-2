import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}

export default TodoList;
