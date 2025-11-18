# React Todo (Vite)

A minimal todo app that fetches data from JSONPlaceholder. The API URL is set in `.env`.

## Lean folder structure
- `src/components`: Header, TodoList, TodoItem.
- `src/pages`: Home (fetch logic + state).
- `src/services`: API calls (fetchTodos).
- `src/styles`: simple CSS.
- `.env.example`: environment variable sample, `.gitignore` ignores `.env`.

## Setup & build
```bash
npm install
cp .env.example .env   # adjust values if needed
npm run dev            # http://localhost:5173
npm run build          # production build to dist/
```

## Environment variable (Vite)
- Only variables starting with `VITE_` are exposed to the frontend.
- Sample `.env`:
  ```bash
  VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
  ```
- Code reads it in `src/services/apiClient.js` and shows it in `src/components/Header.jsx`.

## API behavior
- The app calls `/todos?_limit=20` from `VITE_API_BASE_URL`.
- Users can toggle completion locally.
- On fetch failure, a simple error message is shown.

## Quick notes
- `npm run preview` to inspect the production build.
- Add ESLint/Prettier to the `lint` script if desired.
