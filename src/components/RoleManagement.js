import React, { useState } from "react";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState("");

  const addRole = () => {
    if (newRole) {
      setRoles([...roles, { id: Date.now(), name: newRole }]);
      setNewRole("");
    }
  };

  const deleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div className="bg-green-50 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Role Management</h2>
      <div>
        <input
          type="text"
          placeholder="Role Name"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={addRole}
          className="bg-green-600 text-white px-3 py-2 rounded"
        >
          Add Role
        </button>
      </div>
      <ul className="mt-4">
        {roles.map((role) => (
          <li
            key={role.id}
            className="flex justify-between items-center bg-white p-2 rounded mb-2 shadow"
          >
            <span>{role.name}</span>
            <button
              onClick={() => deleteRole(role.id)}
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

export default RoleManagement;
