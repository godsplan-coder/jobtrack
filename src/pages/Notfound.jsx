import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

export default function Notfound() {
  return (
    <div className="max-w-md mx-auto text-center py-16 animate-fade-in-up">
      <Compass className="w-12 h-12 mx-auto text-blue-600 mb-4" />
      <h1 className="text-6xl font-bold tracking-tight">404</h1>
      <p className="text-gray-500 dark:text-slate-400 mt-3">
        This page doesn't exist — maybe it got rejected too.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 mt-6 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
}
