const tasks = [
  {
    title: "Cong viec 1",
    completed: false,
  },
];

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const taskList = document.querySelector("#task-list");

const submitBtn = document.querySelector("#submit");

submitBtn.onmousedown = function (e) {
  e.preventDefault();
};

function addTasks(e) {
  e.preventDefault();

  const value = todoInput.value.trim();

  if (!value) {
    return alert("Please write something!");
  }

  const newTask = {
    title: value,
    completed: false,
  };

  tasks.push(newTask);
  todoInput.value = "";
  renderTask();
}

// Edit
function handleTaskActions(e) {
  const taskItem = e.target.closest(".task-item");
  const taskIndex = +taskItem.getAttribute("task-index");
  const task = tasks[taskIndex];

  if (e.target.closest(".edit")) {
    const newTitle = prompt("Enter the new task title", task.title);

    if (newTitle === null) return;

    if (!newTitle.trim()) {
      return alert("Title cannot be empty");
    }

    task.title = newTitle;
    renderTask();
  } else if (e.target.closest(".done")) {
    task.completed = !task.completed;
    renderTask();
  } else if (e.target.closest(".delete")) {
    if (confirm("Are you sure you want to delete this task?")) {
      tasks.splice(taskIndex, 1);
      renderTask();
    }
  }
}

function emptyMessage(e) {}

function renderTask() {
  if (!tasks.length) {
    taskList.innerHTML = `<li class="empty-message">No tasks available.</li>`;
    return;
  }

  const html = tasks
    .map(
      (task, index) => `
    <li class="task-item ${
      task.completed ? "completed" : ""
    }" task-index = "${index}">
    <span class="task-title">${task.title}</span>
    <div class="task-action">
        <button class="task-btn edit">Edit</button>
        <button class="task-btn done">${
          task.completed ? "Mark as done" : "Mark as undone"
        }</button>
        <button class="task-btn delete">Delete</button>
    </div>
    </li>
`
    )
    .join("");

  taskList.innerHTML = html;
}

todoForm.addEventListener("submit", addTasks);
taskList.addEventListener("click", handleTaskActions);
renderTask();
