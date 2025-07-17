import { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Plus,
  Edit,
  Trash2,
  Package,
  ShoppingCart,
  TrendingUp,
  Users,
  Star,
  Eye,
  AlertCircle,
  Check,
  Filter,
  Search,
  MoreVertical,
  Grid,
  List,
  Settings,
  BarChart3,
  DollarSign,
  Calendar,
  Clock,
} from "lucide-react";

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    {
      title: "Total Products",
      value: products.length,
      icon: Package,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Active Products",
      value: products.filter((p) => p.status !== "inactive").length,
      icon: Check,
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Categories",
      value: new Set(products.map((p) => p.category)).size,
      icon: Grid,
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Revenue",
      value: "LKR 2.5M",
      icon: DollarSign,
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-gray-600 text-lg">Loading products...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your products and inventory
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/admin/add"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add New Product
                <motion.div
                  className="ml-2"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Plus className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
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
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                </div>
                <motion.div
                  className={`${stat.bgColor} ${stat.textColor} p-3 rounded-full`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search and Filter Bar */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                className={`p-2 rounded-full ${
                  viewMode === "grid"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
                onClick={() => setViewMode("grid")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Grid className="w-5 h-5" />
              </motion.button>
              <motion.button
                className={`p-2 rounded-full ${
                  viewMode === "list"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
                onClick={() => setViewMode("list")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <List className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Products Grid/List */}
        {filteredProducts.length === 0 ? (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-6">
              Get started by adding your first product
            </p>
            <Link
              to="/admin/add"
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              Add Product
            </Link>
          </motion.div>
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden ${
                  viewMode === "list"
                    ? "flex items-center p-4"
                    : "flex flex-col"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
                }}
              >
                {viewMode === "grid" ? (
                  <>
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={
                          product.image ||
                          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
                        }
                        alt={product.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute top-4 right-4">
                        <motion.div
                          className="bg-white/90 backdrop-blur-sm rounded-full p-2"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-3 line-clamp-2">
                        {product.description || "No description available"}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-blue-600">
                          {product.price || "Price not set"}
                        </span>
                        <span className="text-sm text-gray-500">
                          {product.category || "Uncategorized"}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <motion.div
                          className="flex-1"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Link
                            to={`/admin/edit/${product.id}`}
                            className="w-full bg-blue-500 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors flex items-center justify-center"
                          >
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Link>
                        </motion.div>
                        <motion.button
                          onClick={() => handleDelete(product.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors flex items-center justify-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <motion.img
                      src={
                        product.image ||
                        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
                      }
                      alt={product.title}
                      className="w-20 h-20 object-cover rounded-xl mr-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {product.category || "Uncategorized"}
                      </p>
                      <p className="text-blue-600 font-bold">
                        {product.price || "Price not set"}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          to={`/admin/edit/${product.id}`}
                          className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors flex items-center"
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Link>
                      </motion.div>
                      <motion.button
                        onClick={() => handleDelete(product.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
