const tasks = [];

const taskList = document.querySelector("#task-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const submitBtn = document.querySelector("#submit");

submitBtn.onmousedown = function (e) {
  e.preventDefault();
};

todoForm.onsubmit = function (e) {
  e.preventDefault();

  const value = todoInput.value.trim();

  if (!value) {
    return alert("Please write somethings");
  }

  const newTask = {
    title: value,
    completed: false,
  };

  tasks.unshift(newTask);

  todoInput.value = "";
  render();
};

function render() {
  const html = tasks
    .map(
      (task) => `
      <li class="task-item ${task.completed ? "completed" : ""}">
            <span class="task-title">${task.title}</span>
            <div class="task-action">
              <button class="task-btn edit">Edit</button>
              <button class="task-btn done">${
                task.completed ? "Mark as undone" : "Mark as done"
              }</button>
              <button class="task-btn delete">Delete</button>
            </div>
          </li>
    `
    )
    .join("");
  taskList.innerHTML = html;
}

render();
