document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const logoutBtn = document.getElementById("logoutBtn");
  
    // Load tasks from local storage
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.forEach(task => addTaskToUI(task.text, task.completed));
    }
  
    loadTasks();
  
    // Add task
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTaskToUI(taskText, false);
        saveTask(taskText, false);
        taskInput.value = "";
      }
    });
  
    // Add task to UI
    function addTaskToUI(text, completed) {
      const li = document.createElement("li");
      li.textContent = text;
      if (completed) li.classList.add("completed");
  
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
        updateTask(text);
      });
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
        deleteTask(text);
      });
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }
  
    // Save task to local storage
    function saveTask(text, completed) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push({ text, completed });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    // Update task completion status in local storage
    function updateTask(text) {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks = tasks.map(task =>
        task.text === text ? { text, completed: !task.completed } : task
      );
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    // Delete task from local storage
    function deleteTask(text) {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks = tasks.filter(task => task.text !== text);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    // Logout functionality
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("tasks"); // Optional: Keep tasks or clear on logout
      window.location.href = "login.html"; // Redirect to login page
    });
  });
  