async function fetchUserTodos() {
    try {
        const [usersResponse, todosResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/todos')
        ])
        const users = await usersResponse.json();
        const todos = await todosResponse.json();

        const usersWithTodos = users.map(user => {
            const userTodos = todos.filter(todo => todo.userId === user.id);
            return {...user, todos:userTodos}
        })
        return usersWithTodos;
    } catch (error) {
        console.log("Error happened:", error);
        throw error;
    }

}
fetchUserTodos()
    .then(data => console.log(data))
    .catch(error => console.log(error));
