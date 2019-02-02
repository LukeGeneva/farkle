let users = [];

function addUser(username) {
  users = [...users, username];
}

function removeUser(username) {
  users = users.filter(name => name !== username);
}

function getUsers() {
  return [...users];
}

module.exports = {
  addUser,
  removeUser,
  getUsers
};
