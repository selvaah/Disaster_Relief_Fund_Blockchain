import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/home";
import Donate from "./pages/donate";
import Login from "./pages/login";
import Siginin from "./pages/signin";
import AdminDashboard from "./pages/dashboard";
import AdminLogin from "./pages/adminLogin";
import AdminProtectedRoute from "./components/protectedRoute/AdminProtedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Siginin />} />
          <Route
            path="/admin"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
