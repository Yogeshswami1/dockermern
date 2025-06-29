import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5001/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  const addTodo = () => {
    axios.post("http://localhost:5001/todos", { text }).then((res) => {
      setTodos([...todos, res.data]);
      setText("");
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📝 Todo List</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
