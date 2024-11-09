function getTodoData() {
  const data = [];
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const comTodo = response.filter((todo) => todo.id <= 10);
      console.log(comTodo);
    })
    .catch((err) => {
      console.log(err);
    });
}
getTodoData();
