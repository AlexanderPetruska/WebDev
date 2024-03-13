const toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];

renderToDoList();

function renderToDoList() {
  let toDoListHtml = "";

  toDoList.forEach((toDoObject, index) => {
    if (toDoObject.name !== "") {
      const { name, dueDate } = toDoObject;
      const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-button js-delete-button" data-index="${index}">Delete</button> 
      `;
      toDoListHtml += html;
    }
  });

  document.querySelector(".js-todo-list").innerHTML = toDoListHtml;
  saveToDoList();
}

function saveToDoList() {
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

document.querySelector(".js-add-button").addEventListener("click", () => {
  addToDo();
});

function addToDo() {
  const inputName = document.querySelector(".js-name-input");
  const inputDate = document.querySelector(".js-date-input");
  const name = inputName.value;
  const dueDate = inputDate.value;
  inputName.value = "";
  inputDate.value = "";

  toDoList.push({ name, dueDate });
  renderToDoList();
}

function deleteToDo(index) {
  toDoList.splice(index, 1);
  saveToDoList();
  renderToDoList();
}

document.querySelector(".js-todo-list").addEventListener("click", (event) => {
  if (event.target.classList.contains("js-delete-button")) {
    const index = parseInt(event.target.getAttribute("data-index"));
    deleteToDo(index);
  }
});
