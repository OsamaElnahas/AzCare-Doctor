import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthProvider } from "./components/AuthContext";
import { AppRoutes } from "./routes";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#363636",
                color: "#fff",
                direction: "rtl",
              },
            }}
          />
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
