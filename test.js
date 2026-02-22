async function usersAddresses() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const users = await response.json();
    const addresses = users.slice(0, 3).map(user => ({ address: user.address }));
    return addresses;
  } catch (error) {
    console.error(" Error fetching users:", error);
    return [];
  }
}
usersAddresses().then(addresses => {
  console.log(" First 3 users' addresses:");
  console.log(addresses);
});