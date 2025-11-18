const API_BASE = import.meta.env.VITE_API_BASE_URL;

export async function fetchTodos(limit = 15) {
  const base = API_BASE.replace(/\/$/, "");
  const res = await fetch(`${base}?_limit=${limit}`);

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  return res.json();
}
