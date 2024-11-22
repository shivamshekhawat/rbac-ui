// Mock Data
let users = [
    { id: 1, name: "John Doe", email: "john@example.com", roles: ["Admin"], status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", roles: ["Editor"], status: "Inactive" },
  ];
  
  let roles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    { id: 3, name: "Viewer", permissions: ["Read"] },
  ];
  
  // Utility function to simulate API delay
  const simulateDelay = (result, delay = 500) => {
    return new Promise((resolve) => setTimeout(() => resolve(result), delay));
  };
  
  // User Management APIs
  export const getUsers = () => simulateDelay(users);
  
  export const addUser = (user) => {
    const newUser = { id: users.length + 1, ...user };
    users.push(newUser);
    return simulateDelay(newUser);
  };
  
  export const updateUser = (id, updatedUser) => {
    users = users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user));
    return simulateDelay(updatedUser);
  };
  
  export const deleteUser = (id) => {
    users = users.filter((user) => user.id !== id);
    return simulateDelay({ success: true });
  };
  
  // Role Management APIs
  export const getRoles = () => simulateDelay(roles);
  
  export const addRole = (role) => {
    const newRole = { id: roles.length + 1, ...role };
    roles.push(newRole);
    return simulateDelay(newRole);
  };
  
  export const updateRole = (id, updatedRole) => {
    roles = roles.map((role) => (role.id === id ? { ...role, ...updatedRole } : role));
    return simulateDelay(updatedRole);
  };
  
  export const deleteRole = (id) => {
    roles = roles.filter((role) => role.id !== id);
    return simulateDelay({ success: true });
  };
  
  // Permissions Management
  export const getPermissionsByRole = (roleId) => {
    const role = roles.find((role) => role.id === roleId);
    return simulateDelay(role ? role.permissions : []);
  };
  
  export const updatePermissionsForRole = (roleId, permissions) => {
    roles = roles.map((role) =>
      role.id === roleId ? { ...role, permissions: [...permissions] } : role
    );
    return simulateDelay({ success: true });
  };
  