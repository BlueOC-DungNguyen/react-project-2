function TodoItem({ todo, onToggle }) {
  return (
    <li className="todo-item">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? "done" : ""}>{todo.title}</span>
      </label>
    </li>
  );
}

export default TodoItem;
