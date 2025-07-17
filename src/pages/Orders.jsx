import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Calendar,
  CreditCard,
  Package,
  Truck,
  CheckCircle,
  Clock,
  AlertCircle,
  Star,
  ArrowRight,
  Filter,
  Search,
  Download,
  Eye,
  MapPin,
  Phone,
  Mail,
  User,
  DollarSign,
  Hash,
  Zap,
  Shield,
  Award,
} from "lucide-react";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const list = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(list);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  // Sample data enhancement for demo purposes
  const enhancedOrders = orders.map((order, index) => ({
    ...order,
    status:
      ["pending", "processing", "shipped", "delivered"][index % 4] || "pending",
    date: new Date(
      Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
    ).toISOString(),
    items: Math.floor(Math.random() * 5) + 1,
    customer: {
      name: `Customer ${index + 1}`,
      email: `customer${index + 1}@example.com`,
      phone: `+94 ${Math.floor(Math.random() * 90) + 10} ${
        Math.floor(Math.random() * 9000000) + 1000000
      }`,
      address: "Colombo, Sri Lanka",
    },
    paymentMethod: ["card", "bank", "cash"][index % 3] || "card",
    total: order.total || `LKR ${(Math.random() * 500000 + 50000).toFixed(0)}`,
  }));

  const filteredOrders = enhancedOrders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || order.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "processing":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "shipped":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "processing":
        return <Package className="w-4 h-4" />;
      case "shipped":
        return <Truck className="w-4 h-4" />;
      case "delivered":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getPaymentIcon = (method) => {
    switch (method) {
      case "card":
        return <CreditCard className="w-4 h-4" />;
      case "bank":
        return <DollarSign className="w-4 h-4" />;
      case "cash":
        return <Star className="w-4 h-4" />;
      default:
        return <CreditCard className="w-4 h-4" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-xl text-gray-600">Loading orders...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        {/* Floating animated elements */}
        <motion.div
          className="absolute top-20 left-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Package className="w-12 h-12 text-blue-300 opacity-30" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ShoppingBag className="w-16 h-16 text-blue-300 opacity-20" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-1/4"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Truck className="w-10 h-10 text-blue-300 opacity-25" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Order Management
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Track, manage, and analyze all your orders in one powerful
              dashboard
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "Total Orders",
              value: filteredOrders.length,
              icon: ShoppingBag,
              color: "bg-blue-500",
            },
            {
              title: "Pending",
              value: filteredOrders.filter((o) => o.status === "pending")
                .length,
              icon: Clock,
              color: "bg-yellow-500",
            },
            {
              title: "Processing",
              value: filteredOrders.filter((o) => o.status === "processing")
                .length,
              icon: Package,
              color: "bg-purple-500",
            },
            {
              title: "Delivered",
              value: filteredOrders.filter((o) => o.status === "delivered")
                .length,
              icon: CheckCircle,
              color: "bg-green-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <motion.p
                    className="text-3xl font-bold text-gray-900"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {stat.value}
                  </motion.p>
                </div>
                <motion.div
                  className={`${stat.color} text-white rounded-full p-3`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Controls Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-80"
                />
              </div>

              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>
            </div>

            <motion.button
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Export
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Orders List */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {filteredOrders.length === 0 ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <ShoppingBag className="w-10 h-10 text-gray-400" />
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No Orders Found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {filteredOrders.map((order, index) => (
              <motion.div
                key={order.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Order Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <motion.h3
                            className="text-xl font-semibold text-gray-900 mb-2"
                            whileHover={{ scale: 1.02 }}
                          >
                            Order #{order.id}
                          </motion.h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(order.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Package className="w-4 h-4" />
                              {order.items} items
                            </div>
                            <div className="flex items-center gap-1">
                              {getPaymentIcon(order.paymentMethod)}
                              {order.paymentMethod}
                            </div>
                          </div>
                        </div>

                        <motion.div
                          className={`px-4 py-2 rounded-full text-sm font-medium border flex items-center gap-2 ${getStatusColor(
                            order.status
                          )}`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {getStatusIcon(order.status)}
                          {order.status.charAt(0).toUpperCase() +
                            order.status.slice(1)}
                        </motion.div>
                      </div>

                      {/* Customer Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900">
                            Customer Details
                          </h4>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              {order.customer.name}
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              {order.customer.email}
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              {order.customer.phone}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {order.customer.address}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900">
                            Order Summary
                          </h4>
                          <div className="text-2xl font-bold text-blue-600">
                            {order.total}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <Shield className="w-3 h-3 mr-1" />
                              Verified
                            </span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              <Award className="w-3 h-3 mr-1" />
                              Priority
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 lg:w-48">
                      <motion.button
                        className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </motion.button>

                      <motion.button
                        className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download className="w-4 h-4" />
                        Invoice
                      </motion.button>

                      <motion.button
                        className="border border-orange-300 text-orange-700 px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-orange-50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Truck className="w-4 h-4" />
                        Track
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
