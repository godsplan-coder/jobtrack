import { createContext, useContext, useState } from "react";

const ApplicationContext = createContext(null);

export function ApplicationProvider({ children }) {
  const [applications, setApplications] = useState([
    { id: 1, company: "Google", role: "Frontend Intern", status: "Applied" },
    { id: 2, company: "Microsoft", role: "AI Intern", status: "Interview" },
    { id: 3, company: "Amazon", role: "Backend Intern", status: "Applied" },
  ]);

  function addApplication(company, role) {
    const newApplication = {
      id: Date.now(),
      company,
      role,
      status: "Applied",
    };
    setApplications([...applications, newApplication]);
  }

  function deleteApplication(id) {
    setApplications((prev) => prev.filter((app) => app.id !== id));
  }

  function updateApplication(id, updatedData) {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, ...updatedData } : app))
    );
  }

  return (
    <ApplicationContext.Provider
      value={{ applications, addApplication, deleteApplication, updateApplication }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplications() {
  return useContext(ApplicationContext);
}
