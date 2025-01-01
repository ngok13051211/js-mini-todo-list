const tasks = [
  {
    title: "Rua bat",
    completed: true,
  },
  {
    title: "Quet nha",
    completed: false,
  },
  {
    title: "Nau com",
    completed: true,
  },
];

const taskList = document.querySelector("#task-list");

const html = tasks
  .map(
    (task) => `
    <li class="task-item">
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
