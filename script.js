document.addEventListener("DOMContentLoaded", function() {
  const submit = document.getElementById("submit");
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const deleteBtn = document.getElementById("deleteBtn");
  const todo = document.getElementById("todo");

  submit.addEventListener("click", function(e) {
    e.preventDefault();
    let titlec = title.value;
    let descc = desc.value;
    localStorage.setItem("todo", JSON.stringify({ titlec, descc }));
    console.log(e);

    todo.innerHTML = `
      <h1>${titlec}</h1>
      <p>${descc}</p>
    `;
  });

  deleteBtn.addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.removeItem("todo");
    todo.innerHTML = "";
  });
});
