function Header({ apiBase }) {
  return (
    <header className="header">
      <div>
        <p className="eyebrow">Todo App</p>
        <h1>Task list</h1>
        <p className="muted">
          Environment variable:
          <code className="inline-code">{apiBase}</code>
        </p>
      </div>
    </header>
  );
}

export default Header;
