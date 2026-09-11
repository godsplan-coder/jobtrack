import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApplications } from "../context/ApplicationContext";

export default function AddApplication() {
  const navigate = useNavigate();
  const { addApplication } = useApplications();

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addApplication(company, role);

    navigate("/applications");
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Add Application</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Company</label>

          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="e.g. Google"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Role</label>

          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="e.g. Frontend Intern"
            required
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Application
        </button>
      </form>
    </div>
  );
}
