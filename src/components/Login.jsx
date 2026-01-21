import React, { useEffect, useRef, useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "./AuthContext";
import logo from "../assets/WhatsApp Image 2026-01-21 at 1.55.16 AM.jpeg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const timerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    timerRef.current = setTimeout(() => {
      const userName = formData.username;

      login(userName);

      toast.success("Logged in successfully!");
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Watermark */}
      {/* <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className="text-6xl font-bold text-gray-200 opacity-10 rotate-[-45deg] select-none whitespace-nowrap">
          نسخة استعراضية غير تشغيلية – Demo Version
        </div>
      </div> */}

      <div className="w-full max-w-md z-10 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Logo */}
          <div className="p-10 border-gray-200 m-auto">
            <div className="p-4  rounded-full m-auto flex items-center justify-center">
              <img
                src={logo}
                className="w-full h-full border m-auto border-white rounded-full bg-white"
                alt="Logo"
              />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Log in to your account
          </h3>
          <p className="text-gray-600">Please enter your Details</p>
        </div>

        {/* Form */}
        <div className="">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username{" "}
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-0  focus:border-0 focus:ring-2 focus:ring-blue-900 text-gray-700"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-0  focus:border-0 focus:ring-2 focus:ring-blue-900 text-gray-700"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-10 top-1/2  -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  logging in...
                </>
              ) : (
                <>
                  log in
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* <p className="mt-6 text-center text-gray-600">
            ليس لديك حساب؟{" "}
            <Link
              to="/register"
              className="text-green-600 font-semibold hover:text-green-700"
            >
              إنشاء حساب جديد
            </Link>
          </p> */}
        </div>

        {/* Back */}
        {/* <div className="text-center mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowRight className="rotate-180 w-4 h-4" />
            العودة للصفحة الرئيسية
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
