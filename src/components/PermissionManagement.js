import React, { useState } from "react";

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState(["Read", "Write", "Delete"]);
  const [newPermission, setNewPermission] = useState("");

  const addPermission = () => {
    if (newPermission && !permissions.includes(newPermission)) {
      setPermissions([...permissions, newPermission]);
      setNewPermission("");
    }
  };

  return (
    <div className="bg-yellow-50 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Permission Management</h2>
      <div>
        <input
          type="text"
          placeholder="Permission Name"
          value={newPermission}
          onChange={(e) => setNewPermission(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={addPermission}
          className="bg-yellow-600 text-white px-3 py-2 rounded"
        >
          Add Permission
        </button>
      </div>
      <ul className="mt-4">
        {permissions.map((permission, index) => (
          <li
            key={index}
            className="bg-white p-2 rounded mb-2 shadow"
          >
            {permission}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionManagement;
