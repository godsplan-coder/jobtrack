import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Building2, Pencil, Trash2 } from "lucide-react";
import { useApplications } from "../context/ApplicationContext";
import StatusBadge from "../components/StatusBadge";

export default function ApplicationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { applications, deleteApplication } = useApplications();

  const application = applications.find((app) => String(app.id) === id);

  if (!application) {
    return (
      <div className="max-w-xl mx-auto text-center animate-fade-in-up">
        <p className="text-gray-500 dark:text-slate-400">Application not found.</p>
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
    <div className="max-w-xl mx-auto animate-fade-in-up">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1.5 mb-6 text-sm text-gray-500 dark:text-slate-400 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{application.company}</h1>
              <p className="text-gray-500 dark:text-slate-400">{application.role}</p>
            </div>
          </div>
          <StatusBadge status={application.status} />
        </div>

        <div className="flex gap-3 mt-6 pt-6 border-t border-gray-100 dark:border-slate-700">
          <Link
            to={`/applications/${application.id}/edit`}
            className="flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Pencil className="w-4 h-4" />
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="flex items-center gap-1.5 border border-red-300 dark:border-red-500/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
