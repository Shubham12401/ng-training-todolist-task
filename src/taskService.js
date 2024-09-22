

let tasks = [
  {
    id: 1,
    assignedTo: "Shubham Jadhav",
    status: "Completed",
    dueDate: "2023-12-1",
    priority: "Low",
    comments: "This task is good",
  },
  {
    id: 2,
    assignedTo: "Siddhant Karale",
    status: "In Progress",
    dueDate: "2024-09-4",
    priority: "High",
    comments: "Task in process",
  },
  {
    id: 3,
    assignedTo: "Nishant Hambir",
    status: "Not Started",
    dueDate: "2024-09-5",
    priority: "Normal",
    comments: "Task not started",
  },
  {
    id: 2,
    assignedTo: "Aniket Bankar",
    status: "Completed",
    dueDate: "2024-08-6",
    priority: "Normal",
    comments: "Task is completed",
  },
];

export const getTasks = () => {
  return tasks;
};

export const addTask = (task) => {
  task.id = tasks.length + 1; // Simple ID generation
  tasks.push(task);
};

export const updateTask = (updatedTask) => {
  tasks = tasks.map((task) =>
    task.id === updatedTask.id ? { ...task, ...updatedTask } : task
  );
};

export const deleteTask = (taskId) => {
  tasks = tasks.filter((task) => task.id !== taskId);
};
