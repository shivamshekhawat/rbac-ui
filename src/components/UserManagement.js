import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", role: "" });

  const addUser = () => {
    if (newUser.name && newUser.role) {
      setUsers([...users, { id: Date.now(), ...newUser }]);
      setNewUser({ name: "", role: "" });
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="bg-blue-50 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <div>
        <input
          type="text"
          placeholder="User Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={addUser}
          className="bg-blue-600 text-white px-3 py-2 rounded"
        >
          Add User
        </button>
      </div>
      <ul className="mt-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center bg-white p-2 rounded mb-2 shadow"
          >
            <span>{user.name} - {user.role}</span>
            <button
              onClick={() => deleteUser(user.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
