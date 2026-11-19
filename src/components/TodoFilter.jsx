import { useState } from "react";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";

function TodoFilter() {
  const [filter, setFilter] = useState("all");

  const todos = useSelector((state) => state.todos);
  const remaining = todos.filter((todo) => !todo.completed).length;

  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("pending")}>Pending</button>
      <button onClick={() => setFilter("completed")}>Completed</button>

      <TodoList filter={filter} />

      <p>{remaining} tasks remaining</p>
    </div>
  );
}

export default TodoFilter;