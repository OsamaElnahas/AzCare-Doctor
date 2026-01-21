import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Patients from "../components/Patients/Patients";
import PatientHistory from "../components/PatientHistory/PatientHistory";
import Settion from "../components/Settion/Settion";
import Login from "../components/Login";
import Register from "../components/Register";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../components/AuthContext";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading...</div>
      </div>
    );
  }
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout title="Consultation Session" />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="settion" element={<Settion />} />
        <Route path="patients" element={<Patients />} />
        <Route path="history" element={<PatientHistory />} />
      </Route>
      {/* Redirect root to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      {/* Redirect any unknown routes to dashboard */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};
