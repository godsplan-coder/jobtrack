

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import AddApplication from "./pages/AddApplication";
import ApplicationDetails from "./pages/ApplicationDetails";
import NotFound from "./pages/Notfound.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import EditApplications from "./pages/EditApplications";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />

        <Route path="/applications">
          <Route index element={<Applications />} />

          <Route path=":id" element={<ApplicationDetails />} />
          <Route path=":id/edit" element={<EditApplications />} />
        </Route>

        <Route path="/add-application" element={<AddApplication />} />

        <Route path="/home" element={<Navigate to="/" replace />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
