// async function fetchUserTodos() {
//   try {
//     const [usersResponse, todosResponse] = await Promise.all([
//       fetch('https://jsonplaceholder.typicode.com/users'),
//       fetch('https://jsonplaceholder.typicode.com/todos')
//     ]);
//     const users = await usersResponse.json();
//     const todos = await todosResponse.json();

//     const usersWithTodos = users.map(user => {
//       const userTodos = todos.filter(todo => todo.userId === user.id);
//       return { ...user, todos: userTodos };
//     });

//     return usersWithTodos;

//   } catch (error) {
//     console.error("Error fetching users or todos:", error);
//     throw error;
//   }
// }
// fetchUserTodos()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => console.error(err));




async function fetchUserTodos() {
    try {
        const [usersResponse, todosResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/todos')
        ]);
        const users = await usersResponse.json();
        const todos = await todosResponse.json();

        const usersWithTodos = users.map(user => {
            const userTodos = todos.filter(todo => todo.userId === user.id);
            return { ...user, todos: userTodos };
        });
        return usersWithTodos;

    } catch (error) {
        console.error("failed to return the correct result from todos:", error);
        throw error;
    }
    
}
fetchUserTodos()
    .then(data => console.log(data))
    .catch(error => console.error("This url failed:", error))