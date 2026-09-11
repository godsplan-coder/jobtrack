import { Link } from "react-router-dom";
import { Briefcase, CheckCircle2, Plus, Send, Users, XCircle } from "lucide-react";
import { useApplications } from "../context/ApplicationContext";
import StatusBadge from "../components/StatusBadge";

export default function Dashboard() {
  const { applications } = useApplications();

  const counts = applications.reduce(
    (acc, app) => {
      acc.total += 1;
      acc[app.status] = (acc[app.status] ?? 0) + 1;
      return acc;
    },
    { total: 0 }
  );

  const stats = [
    { label: "Total", value: counts.total, icon: Briefcase, color: "text-gray-900 dark:text-slate-50" },
    { label: "Applied", value: counts.Applied ?? 0, icon: Send, color: "text-blue-600 dark:text-blue-400" },
    { label: "Interview", value: counts.Interview ?? 0, icon: Users, color: "text-amber-600 dark:text-amber-400" },
    { label: "Offer", value: counts.Offer ?? 0, icon: CheckCircle2, color: "text-green-600 dark:text-green-400" },
    { label: "Rejected", value: counts.Rejected ?? 0, icon: XCircle, color: "text-red-600 dark:text-red-400" },
  ];

  const recent = [...applications].sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <div className="animate-fade-in-up">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back 👋</h1>
          <p className="mt-1 text-gray-500 dark:text-slate-400">
            Here's how your job search is going.
          </p>
        </div>
        <Link
          to="/add-application"
          className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Application
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{ animationDelay: `${i * 60}ms` }}
            className="animate-fade-in-up border border-gray-200 dark:border-slate-700 rounded-xl p-4 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <stat.icon className={`w-5 h-5 mb-2 ${stat.color}`} />
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-sm text-gray-500 dark:text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Applications</h2>
          <Link to="/applications" className="text-sm text-blue-600 hover:underline">
            View all
          </Link>
        </div>

        {recent.length === 0 ? (
          <div className="border border-dashed border-gray-300 dark:border-slate-700 rounded-xl p-10 text-center">
            <Briefcase className="w-8 h-8 mx-auto text-gray-400 dark:text-slate-500 mb-3" />
            <p className="text-gray-500 dark:text-slate-400">
              No applications yet — add your first one to get started.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {recent.map((app) => (
              <Link
                key={app.id}
                to={`/applications/${app.id}`}
                className="flex items-center justify-between border border-gray-200 dark:border-slate-700 rounded-xl p-4 bg-white dark:bg-slate-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div>
                  <p className="font-medium">{app.company}</p>
                  <p className="text-sm text-gray-500 dark:text-slate-400">{app.role}</p>
                </div>
                <StatusBadge status={app.status} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
