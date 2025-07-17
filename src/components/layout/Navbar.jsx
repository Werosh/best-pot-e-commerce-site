import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  Package,
  User,
  Search,
  Heart,
  Bell,
  Zap,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { to: "/", label: "Home", icon: null },
    { to: "/products", label: "Appliances", icon: null },
    { to: "/cart", label: "Cart", icon: ShoppingCart, badge: cartCount },
    { to: "/orders", label: "Orders", icon: Package },
    { to: "/login", label: "Login", icon: User },
  ];

  // Loading skeleton
  if (isLoading) {
    return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo Skeleton */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl animate-pulse"></div>
                <div className="hidden sm:block space-y-2">
                  <div className="w-24 h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                  <div className="w-32 h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                </div>
              </div>

              {/* Desktop Navigation Skeleton */}
              <div className="hidden md:flex items-center space-x-8">
                <div className="w-16 h-5 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                <div className="w-20 h-5 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
              </div>

              {/* Search Bar Skeleton */}
              <div className="hidden lg:flex items-center">
                <div className="w-64 h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
              </div>

              {/* Action Buttons Skeleton */}
              <div className="hidden md:flex items-center space-x-4">
                <div className="w-9 h-9 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
                <div className="w-9 h-9 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
                <div className="w-9 h-9 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
                <div className="w-9 h-9 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
                <div className="w-16 h-9 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
              </div>

              {/* Mobile Menu Button Skeleton */}
              <div className="md:hidden w-9 h-9 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </nav>
        <div className="h-16 md:h-20"></div>
      </>
    );
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <Zap className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full border-2 border-white animate-bounce"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Best-Pot
                </h1>
                <p className="text-xs text-gray-500">
                  Your Home Appliance Store
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="relative font-medium text-gray-700 hover:text-blue-500 transition-all duration-300 hover:scale-105 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Search appliances..."
                  className="pl-10 pr-4 py-2 w-64 rounded-full border bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="relative p-2 rounded-full text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-110 group">
                <Heart className="w-5 h-5" />
                <div className="absolute inset-0 rounded-full bg-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>

              <button className="relative p-2 rounded-full text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-110 group">
                <Bell className="w-5 h-5" />
                <div className="absolute inset-0 rounded-full bg-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              <Link
                to="/cart"
                className="relative p-2 rounded-full text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-110 group"
              >
                <ShoppingCart className="w-5 h-5" />
                <div className="absolute inset-0 rounded-full bg-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link
                to="/orders"
                className="relative p-2 rounded-full text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-110 group"
              >
                <Package className="w-5 h-5" />
                <div className="absolute inset-0 rounded-full bg-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </Link>

              <Link
                to="/login"
                className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden group"
              >
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-all duration-300 relative group"
            >
              <div className="absolute inset-0 rounded-lg bg-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              {isOpen ? (
                <X className="w-6 h-6 relative z-10 transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 relative z-10" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white border-t border-gray-100 shadow-lg">
            {/* Mobile Search */}
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Search appliances..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-300 group transform hover:scale-105"
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isOpen
                      ? "slideInFromLeft 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  {item.icon && (
                    <div className="relative">
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      {item.badge && (
                        <span className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="px-4 py-4 border-t border-gray-100 space-y-3">
              <div className="flex items-center justify-around">
                <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
                  <div className="relative">
                    <Heart className="w-5 h-5" />
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-0 hover:scale-100 transition-transform duration-300"></div>
                  </div>
                  <span className="text-xs">Wishlist</span>
                </button>
                <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
                  <div className="relative">
                    <Bell className="w-5 h-5" />
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-0 hover:scale-100 transition-transform duration-300"></div>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  </div>
                  <span className="text-xs">Notifications</span>
                </button>
                <Link
                  to="/profile"
                  className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
                >
                  <div className="relative">
                    <User className="w-5 h-5" />
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-0 hover:scale-100 transition-transform duration-300"></div>
                  </div>
                  <span className="text-xs">Profile</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 md:h-20"></div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
