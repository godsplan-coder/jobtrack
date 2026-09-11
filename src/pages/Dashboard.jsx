import { Link } from "react-router-dom";
import { useApplications } from "../context/ApplicationContext";

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
    { label: "Total", value: counts.total, color: "text-gray-900" },
    { label: "Applied", value: counts.Applied ?? 0, color: "text-blue-600" },
    { label: "Interview", value: counts.Interview ?? 0, color: "text-amber-600" },
    { label: "Offer", value: counts.Offer ?? 0, color: "text-green-600" },
    { label: "Rejected", value: counts.Rejected ?? 0, color: "text-red-600" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-600">Welcome to JobTrack</p>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-8">
        {stats.map((stat) => (
          <div key={stat.label} className="border rounded-lg p-4 bg-white">
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <Link
        to="/add-application"
        className="inline-block mt-8 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
      >
        + Add Application
      </Link>
    </div>
  );
}
