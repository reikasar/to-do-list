const input = document.querySelector("#todoInput");
const addButton = document.querySelector("#addButton");
const ul = document.querySelector("#todoList");

function addItem() {
  const inputValue = input.value;
  if (inputValue == "") return;
  const listItem = document.createElement("li");
  //console.log(listItem);
  const span = document.createElement("span");
  span.textContent = inputValue;
  const deleteBotton = document.createElement("button");
  deleteBotton.textContent = "remove";
  deleteBotton.style.margin = "5px";
  listItem.appendChild(span);
  //console.log(span);
  listItem.appendChild(deleteBotton);
  ul.appendChild(listItem);
  //console.log(ul);
  deleteBotton.addEventListener("click", () => {
    ul.removeChild(listItem);
    input.focus()
  });
  input.focus();
  input.value = "";
}

addButton.addEventListener("click", addItem);


