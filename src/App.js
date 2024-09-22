import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { getTasks, addTask, updateTask, deleteTask } from "./taskService";
import "./App.css";
import "./custom.css";

function App() {
  const [tasks, setTasks] = useState(getTasks());
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleNewTask = () => {
    setTaskToEdit(null);
    setShowForm(true);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setShowForm(true);
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(taskId);
      setTasks(getTasks());
    }
  };

  const handleSaveTask = (newTask) => {
    if (taskToEdit) {
      updateTask({ ...taskToEdit, ...newTask });
    } else {
      addTask(newTask);
    }
    setTasks(getTasks());
    setShowForm(false);
  };

  return (
    <div className="App container mt-5">
      <TaskList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
        onNewTask={handleNewTask}
      />
      <TaskForm
        show={showForm}
        onClose={() => setShowForm(false)}
        onSave={handleSaveTask}
        taskToEdit={taskToEdit}
      />
    </div>
  );
}

export default App;
