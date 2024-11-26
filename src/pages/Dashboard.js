import React, { useState } from "react";
import UserTable from "../components/UserManagement/UserTable";
import RoleTable from "../components/RoleManagement/RoleTable";

function Dashboard({ theme }) {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className={`dashboard ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
      <nav className="dashboard-nav flex justify-center py-4">
        <button
          className={`mx-2 px-6 py-2 rounded-full font-semibold ${
            activeTab === "users"
              ? "bg-blue-500 text-white"
              : theme === "dark"
              ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("users")}
        >
          User Management
        </button>
        <button
          className={`mx-2 px-6 py-2 rounded-full font-semibold ${
            activeTab === "roles"
              ? "bg-green-500 text-white"
              : theme === "dark"
              ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("roles")}
        >
          Role Management
        </button>
      </nav>

      <div className={`dashboard-content p-6 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
        {activeTab === "users" ? <UserTable theme={theme} /> : <RoleTable theme={theme} />}
      </div>
    </div>
  );
}

export default Dashboard;
