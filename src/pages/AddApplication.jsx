import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApplications } from "../context/ApplicationContext";

export default function AddApplication() {
  const navigate = useNavigate();
  const { addApplication } = useApplications();

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    if (!company.trim()) newErrors.company = "Company is required";
    if (!role.trim()) newErrors.role = "Role is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    addApplication(company.trim(), role.trim());
    navigate("/applications");
  }

  return (
    <div className="max-w-xl mx-auto animate-fade-in-up">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Add Application</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 shadow-sm"
      >
        <div>
          <label className="block text-sm font-medium mb-1.5">Company</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g. Google"
            className={`w-full rounded-lg border px-3 py-2.5 text-sm bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 transition-colors ${
              errors.company
                ? "border-red-400 focus:ring-red-400"
                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500"
            }`}
          />
          {errors.company && (
            <p className="text-red-500 text-xs mt-1">{errors.company}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. Frontend Intern"
            className={`w-full rounded-lg border px-3 py-2.5 text-sm bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 transition-colors ${
              errors.role
                ? "border-red-400 focus:ring-red-400"
                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500"
            }`}
          />
          {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Save Application
        </button>
      </form>
    </div>
  );
}
