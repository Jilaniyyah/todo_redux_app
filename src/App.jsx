import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";
import './index.css';

function App() {
  return (
    <div className="app">
      <h1>Todo Manager</h1>
      <TodoForm />
      <TodoFilter />
    </div>
  );
}

export default App;