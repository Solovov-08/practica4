import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Проверить работу приложения", completed: false },
    { id: 2, text: "Собрать проект через npm run build", completed: false },
    { id: 3, text: "Опубликовать проект на GitHub Pages", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Список задач</h1>
        <p className="subtitle">
          Одностраничное React-приложение для практической работы №4
        </p>

        <div className="form">
          <input
            type="text"
            placeholder="Введите новую задачу"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Добавить</button>
        </div>

        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? "done" : ""}>
              <span onClick={() => toggleTask(task.id)}>{task.text}</span>
              <button onClick={() => deleteTask(task.id)}>Удалить</button>
            </li>
          ))}
        </ul>

        <div className="info">
          Всего задач: {tasks.length}
        </div>
      </div>
    </div>
  );
}

export default App;