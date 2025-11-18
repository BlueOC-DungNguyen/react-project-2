import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import { fetchTodos } from "../services/apiClient";

const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "https://jsonplaceholder.typicode.com";

function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchTodos(20);
        setTodos(data);
      } catch (err) {
        setError("Failed to load data from API.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const filtered = useMemo(() => {
    return showCompleted ? todos : todos.filter((item) => !item.completed);
  }, [todos, showCompleted]);

  const toggleLocal = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="page">
      <Header apiBase={API_BASE} />

      <div className="toolbar">
        <button
          className="button"
          type="button"
          onClick={() => setShowCompleted((v) => !v)}
        >
          {showCompleted ? "Hide completed" : "Show completed"}
        </button>
        {loading && <span className="muted">Loading...</span>}
        {error && <span className="error">{error}</span>}
      </div>

      <TodoList todos={filtered} onToggle={toggleLocal} />

      {!loading && !error && filtered.length === 0 && (
        <p className="muted">No todos to show.</p>
      )}
    </div>
  );
}

export default Home;
