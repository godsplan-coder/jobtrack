import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="text-center p-10">
      <h1 className="text-5xl font-bold">404</h1>

      <p className="text-gray-600 mt-4">
        Page not found
      </p>

      <Link
        to="/"
        className="text-blue-600 mt-4 inline-block"
      >
        Go back home
      </Link>
    </div>
  );
}