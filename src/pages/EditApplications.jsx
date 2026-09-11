import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApplications } from "../context/ApplicationContext";

export default function EditApplications() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { applications, updateApplication } = useApplications();

  const application = applications.find((app) => String(app.id) === id);

  const [company, setCompany] = useState(application?.company ?? "");
  const [role, setRole] = useState(application?.role ?? "");
  const [status, setStatus] = useState(application?.status ?? "Applied");
  const [errors, setErrors] = useState({});

  if (!application) {
    return (
      <div className="max-w-xl mx-auto p-8 text-center animate-fade-in-up">
        <p className="text-gray-500 dark:text-slate-400">Application not found.</p>
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    if (!company.trim()) newErrors.company = "Company is required";
    if (!role.trim()) newErrors.role = "Role is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    updateApplication(application.id, {
      company: company.trim(),
      role: role.trim(),
      status,
    });
    navigate(`/applications/${application.id}`);
  }

  return (
    <div className="max-w-xl mx-auto animate-fade-in-up">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Edit Application</h1>

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
            className={`w-full rounded-lg border px-3 py-2.5 text-sm bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 transition-colors ${
              errors.role
                ? "border-red-400 focus:ring-red-400"
                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500"
            }`}
          />
          {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
