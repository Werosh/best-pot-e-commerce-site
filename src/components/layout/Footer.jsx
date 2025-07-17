import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Zap,
  Shield,
  Truck,
  Award,
  CreditCard,
  HeartHandshake,
  ArrowRight,
  MessageCircle,
  Users,
  ShoppingCart,
  Star,
  Home,
  Package,
  User,
  Heart,
  Bell,
  Refrigerator,
  Flame,
  Fan,
  WashingMachine,
  Tv,
  Coffee,
} from "lucide-react";

const Footer = () => {
  const branches = [
    {
      name: "Kumbukgete Branch",
      address: "No. 45, Main Street, Kumbukgete",
      phone: "+94 77 123 4567",
      hours: "Mon-Sat: 8:00 AM - 8:00 PM",
    },
    {
      name: "Hiripitiya Branch",
      address: "No. 78, Commercial Road, Hiripitiya",
      phone: "+94 77 234 5678",
      hours: "Mon-Sat: 8:00 AM - 8:00 PM",
    },
    {
      name: "Wellawa Branch",
      address: "No. 123, Central Plaza, Wellawa",
      phone: "+94 77 345 6789",
      hours: "Mon-Sat: 8:00 AM - 8:00 PM",
    },
    {
      name: "Polpithigama Branch",
      address: "No. 56, Market Street, Polpithigama",
      phone: "+94 77 456 7890",
      hours: "Mon-Sat: 8:00 AM - 8:00 PM",
    },
  ];

  const quickLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/products", label: "All Products", icon: ShoppingCart },
    { to: "/categories", label: "Categories", icon: Package },
    { to: "/offers", label: "Special Offers", icon: Star },
    { to: "/about", label: "About Us", icon: Users },
    { to: "/contact", label: "Contact Us", icon: MessageCircle },
  ];

  const categories = [
    {
      to: "/category/refrigerators",
      label: "Refrigerators",
      icon: Refrigerator,
    },
    { to: "/category/gas-cookers", label: "Gas Cookers", icon: Flame },
    { to: "/category/cooling", label: "Air Conditioning", icon: Fan },
    {
      to: "/category/laundry",
      label: "Washing Machines",
      icon: WashingMachine,
    },
    { to: "/category/tv", label: "Televisions", icon: Tv },
    { to: "/category/kitchen", label: "Kitchen Appliances", icon: Coffee },
  ];

  const customerService = [
    { to: "/orders", label: "Track Orders", icon: Package },
    { to: "/warranty", label: "Warranty Info", icon: Shield },
    { to: "/delivery", label: "Delivery Info", icon: Truck },
    { to: "/returns", label: "Returns & Exchanges", icon: ArrowRight },
    { to: "/payment", label: "Payment Methods", icon: CreditCard },
    { to: "/support", label: "Customer Support", icon: HeartHandshake },
  ];

  const socialLinks = [
    {
      platform: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/bestpot",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      platform: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/bestpot",
      color: "text-pink-600 hover:text-pink-700",
    },
    {
      platform: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/bestpot",
      color: "text-blue-400 hover:text-blue-500",
    },
    {
      platform: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/bestpot",
      color: "text-red-600 hover:text-red-700",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full border-2 border-gray-900 animate-bounce"></div>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  Best-Pot
                </h2>
                <p className="text-sm text-gray-400">
                  Your Home Appliance Store
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Sri Lanka's most trusted home appliance retailer with over 10
              years of experience. We bring you the best quality appliances from
              top international brands.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center ${social.color} hover:bg-gray-700 transition-all duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    to={link.to}
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Categories
            </h3>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    to={category.to}
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                  >
                    <category.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{category.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Customer Service
            </h3>
            <div className="space-y-3">
              {customerService.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    to={service.to}
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                  >
                    <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{service.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Branch Locations */}
      <div className="border-t border-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h3
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Branch Locations
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:bg-gray-750"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {branch.name}
                  </h4>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {branch.address}
                    </p>
                  </div>

                  <motion.a
                    href={`tel:${branch.phone}`}
                    className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">{branch.phone}</span>
                  </motion.a>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <p className="text-gray-300 text-sm">{branch.hours}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              {
                icon: Shield,
                text: "2 Year Warranty",
                color: "text-green-400",
              },
              {
                icon: Award,
                text: "Authorized Dealer",
                color: "text-purple-400",
              },
              {
                icon: Truck,
                text: "Island-wide Delivery",
                color: "text-blue-400",
              },
              {
                icon: CreditCard,
                text: "Secure Payments",
                color: "text-yellow-400",
              },
              {
                icon: HeartHandshake,
                text: "24/7 Support",
                color: "text-pink-400",
              },
            ].map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <badge.icon className={`w-6 h-6 ${badge.color}`} />
                <span className="text-gray-300 font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm">
                © 2024 Best-Pot. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookies"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-2 text-gray-400 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>Werosh.dev</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
