import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: input,
        completed: false,
      },
    ]);

    setInput("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>📚 과제 관리 앱</h1>

      <input
        type="text"
        placeholder="과제를 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTask}>추가</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              onClick={() => toggleTask(index)}
              style={{
                cursor: "pointer",
                textDecoration: task.completed
                  ? "line-through"
                  : "none",
                marginRight: "10px",
              }}
            >
              {task.text}
            </span>

            <button onClick={() => deleteTask(index)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;