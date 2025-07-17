import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  AlertCircle,
  CheckCircle,
  Zap,
  Shield,
  Smartphone,
} from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess("Login successful! Redirecting...");
      // redirect or show success
    } catch (err) {
      setError(getErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/user-not-found":
        return "No account found with this email address.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/user-disabled":
        return "This account has been disabled.";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later.";
      default:
        return "Login failed. Please check your credentials and try again.";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100 flex items-center justify-center p-4">
      {/* Background animated elements */}
      <motion.div
        className="absolute top-20 left-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Shield className="w-12 h-12 text-blue-400 opacity-30" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-20"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Smartphone className="w-16 h-16 text-purple-400 opacity-20" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-1/4"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Zap className="w-10 h-10 text-green-400 opacity-25" />
      </motion.div>

      {/* Main login container */}
      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Login Card */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full p-4 mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <LogIn className="w-8 h-8" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <motion.div
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
              <span className="text-red-700 text-sm">{error}</span>
            </motion.div>
          )}

          {success && (
            <motion.div
              className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-green-700 text-sm">{success}</span>
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                  required
                />
              </div>
            </motion.div>

            {/* Password Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </motion.div>

            {/* Login Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center justify-center ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:shadow-2xl"
                }`}
                whileHover={loading ? {} : { scale: 1.02 }}
                whileTap={loading ? {} : { scale: 0.98 }}
              >
                {loading ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    Signing In...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5 mr-2" />
                    Sign In
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Additional Links */}
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="#"
                className="text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                Forgot your password?
              </a>
              <div className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
                >
                  Sign up here
                </a>
              </div>
            </motion.div>
          </form>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-600">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.1 }}
            >
              <Shield className="w-4 h-4 mr-2 text-green-500" />
              Secure Login
            </motion.div>
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.1 }}
            >
              <Zap className="w-4 h-4 mr-2 text-blue-500" />
              Fast Access
            </motion.div>
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-full p-3 shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-bold">✨</span>
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -left-4 bg-pink-500 text-white rounded-full p-4 shadow-lg"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Zap className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </div>
  );
}
