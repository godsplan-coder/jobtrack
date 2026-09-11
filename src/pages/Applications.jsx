import { Link } from "react-router-dom";
import { useApplications } from "../context/ApplicationContext";
import StatusBadge from "../components/StatusBadge";

export default function Applications() {
  const { applications, deleteApplication } = useApplications();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Applications</h1>
        <Link
          to="/add-application"
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
        >
          + Add Application
        </Link>
      </div>

      {applications.length === 0 ? (
        <p className="text-gray-500">
          No applications yet. Add your first one to get started.
        </p>
      ) : (
        <div className="space-y-4">
          {applications.map((application) => (
            <div
              key={application.id}
              className="border rounded-lg p-4 hover:bg-gray-50 flex items-center justify-between gap-4"
            >
              <Link to={`/applications/${application.id}`} className="flex-1">
                <h2 className="text-xl font-semibold">{application.company}</h2>
                <p className="text-gray-600">{application.role}</p>
              </Link>

              <div className="flex items-center gap-3">
                <StatusBadge status={application.status} />
                <button
                  onClick={() => deleteApplication(application.id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
