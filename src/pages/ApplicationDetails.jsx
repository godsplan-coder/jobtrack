import { Link, useNavigate, useParams } from "react-router-dom";
import { useApplications } from "../context/ApplicationContext";
import StatusBadge from "../components/StatusBadge";

export default function ApplicationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { applications, deleteApplication } = useApplications();

  const application = applications.find((app) => String(app.id) === id);

  if (!application) {
    return (
      <div className="max-w-xl mx-auto p-8">
        <p className="text-gray-600">Application not found.</p>
        <Link to="/applications" className="text-blue-600 mt-4 inline-block">
          ← Back to Applications
        </Link>
      </div>
    );
  }

  function handleDelete() {
    deleteApplication(application.id);
    navigate("/applications");
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <button onClick={() => navigate(-1)} className="mb-6 text-blue-600">
        ← Back
      </button>

      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold">{application.company}</h1>
        <StatusBadge status={application.status} />
      </div>

      <p className="text-gray-600 mb-6">{application.role}</p>

      <div className="flex gap-3">
        <Link
          to={`/applications/${application.id}/edit`}
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="border border-red-300 text-red-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
