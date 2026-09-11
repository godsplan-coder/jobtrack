import { useState } from "react";
import { Link } from "react-router-dom";
import { Building2, Plus, Search, Trash2 } from "lucide-react";
import { useApplications } from "../context/ApplicationContext";
import StatusBadge from "../components/StatusBadge";

const STATUSES = ["All", "Applied", "Interview", "Offer", "Rejected"];

export default function Applications() {
  const { applications, deleteApplication } = useApplications();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = applications.filter((app) => {
    const query = search.toLowerCase();
    const matchesSearch =
      app.company.toLowerCase().includes(query) ||
      app.role.toLowerCase().includes(query);
    const matchesStatus = statusFilter === "All" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="animate-fade-in-up">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Applications</h1>
        <Link
          to="/add-application"
          className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Application
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by company or role..."
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          {STATUSES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="border border-dashed border-gray-300 dark:border-slate-700 rounded-xl p-10 text-center">
          <Building2 className="w-8 h-8 mx-auto text-gray-400 dark:text-slate-500 mb-3" />
          <p className="text-gray-500 dark:text-slate-400">
            {applications.length === 0
              ? "No applications yet. Add your first one to get started."
              : "No applications match your search."}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((application, i) => (
            <div
              key={application.id}
              style={{ animationDelay: `${i * 40}ms` }}
              className="animate-fade-in-up border border-gray-200 dark:border-slate-700 rounded-xl p-4 bg-white dark:bg-slate-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-between gap-4"
            >
              <Link
                to={`/applications/${application.id}`}
                className="flex items-center gap-3 flex-1 min-w-0"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-semibold truncate">{application.company}</h2>
                  <p className="text-sm text-gray-500 dark:text-slate-400 truncate">
                    {application.role}
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-3 flex-shrink-0">
                <StatusBadge status={application.status} />
                <button
                  onClick={() => deleteApplication(application.id)}
                  aria-label="Delete application"
                  className="p-2 rounded-md text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
