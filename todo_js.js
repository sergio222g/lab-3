function addTask() {
    let input = document.getElementById("taskInput");
    let ul = document.getElementById("taskList");
    if (!input.value) return;
    let li = document.createElement("li");
    li.innerHTML = `${input.value} <button onclick="this.parentElement.remove()">Видалити</button>`;
    ul.appendChild(li);
    input.value = "";
}