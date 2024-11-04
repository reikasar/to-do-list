const input = document.querySelector("#todoInput");
const addButton = document.querySelector("#addButton");
const ul = document.querySelector("todoList");

function addItem() {
  const inputValue = input.value;
  const listItem = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = inputValue;
  const deleteBotton = document.createElement("button");
  deleteBotton.textContent = "remove";
  deleteBotton.style.marginLeft = "10px";
  listItem.appendChild(span);
  listItem.appendChild(deleteBotton);
  ul.appendChild(listItem);
  deleteBotton.addEventListener("click", () => {
    ul.removeChild(listItem);
    input.focus()
  });
  input.focus();
  input.value = "";
}

addButton.addEventListener("click", addItem);

