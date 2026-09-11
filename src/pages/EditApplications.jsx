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

  if (!application) {
    return (
      <div className="max-w-xl mx-auto p-8">
        <p className="text-gray-600">Application not found.</p>
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateApplication(application.id, { company, role, status });
    navigate(`/applications/${application.id}`);
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Edit Application</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Company</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border rounded p-2"
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
            required
          />
        </div>

        <div>
          <label className="block mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}
