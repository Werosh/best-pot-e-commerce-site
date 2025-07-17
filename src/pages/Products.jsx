import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import { motion } from "framer-motion";
import {
  Star,
  ShoppingCart,
  Filter,
  Search,
  Grid,
  List,
  Heart,
  Eye,
  ArrowRight,
  Zap,
  Award,
  Truck,
  Shield,
} from "lucide-react";

// Demo data for fallback/demonstration
const demoProducts = [
  {
    id: "demo-1",
    title: 'Samsung 55" Smart TV',
    price: "125000",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
    category: "Electronics",
    brand: "Samsung",
    description: "4K UHD Smart TV with HDR and built-in streaming apps",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    isDemo: true,
  },
  {
    id: "demo-2",
    title: "LG Front Load Washing Machine",
    price: "89000",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    category: "Home Appliances",
    brand: "LG",
    description: "7kg capacity with steam wash and AI direct drive",
    rating: 4.3,
    reviews: 89,
    inStock: true,
    isDemo: true,
  },
  {
    id: "demo-3",
    title: "Panasonic Microwave Oven",
    price: "28000",
    image:
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=300&fit=crop",
    category: "Kitchen Appliances",
    brand: "Panasonic",
    description: "25L capacity with inverter technology and auto cook menu",
    rating: 4.2,
    reviews: 67,
    inStock: true,
    isDemo: true,
  },
  {
    id: "demo-4",
    title: "Sony Soundbar with Subwoofer",
    price: "35000",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop",
    category: "Audio",
    brand: "Sony",
    description: "2.1 channel soundbar with wireless subwoofer and Bluetooth",
    rating: 4.6,
    reviews: 145,
    inStock: true,
    isDemo: true,
  },
  {
    id: "demo-5",
    title: "Hitachi Double Door Refrigerator",
    price: "156000",
    image:
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop",
    category: "Kitchen Appliances",
    brand: "Hitachi",
    description:
      "350L capacity with inverter technology and frost-free cooling",
    rating: 4.4,
    reviews: 203,
    inStock: true,
    isDemo: true,
  },
  {
    id: "demo-6",
    title: "Daikin Split AC Unit",
    price: "95000",
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
    category: "Home Appliances",
    brand: "Daikin",
    description: "1.5 ton inverter AC with copper coil and 5 star rating",
    rating: 4.7,
    reviews: 167,
    inStock: true,
    isDemo: true,
  },
  {
    id: "demo-7",
    title: "Philips Air Fryer",
    price: "18000",
    image:
      "https://images.unsplash.com/photo-1556909114-4e1d7ea92460?w=400&h=300&fit=crop",
    category: "Kitchen Appliances",
    brand: "Philips",
    description: "3L capacity with rapid air technology and digital display",
    rating: 4.3,
    reviews: 94,
    inStock: true,
    isDemo: true,
  },
  {
    id: "demo-8",
    title: "Toshiba Laptop 15.6 inch",
    price: "110000",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    category: "Electronics",
    brand: "Toshiba",
    description: "Intel i5 processor, 8GB RAM, 512GB SSD with Windows 11",
    rating: 4.1,
    reviews: 76,
    inStock: false,
    isDemo: true,
  },
];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [usingDemoData, setUsingDemoData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          isDemo: false,
        }));

        // If Firebase has products, use them; otherwise fall back to demo data
        if (items.length > 0) {
          setProducts(items);
          setFilteredProducts(items);
          setUsingDemoData(false);
        } else {
          setProducts(demoProducts);
          setFilteredProducts(demoProducts);
          setUsingDemoData(true);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        // On error, fall back to demo data
        setProducts(demoProducts);
        setFilteredProducts(demoProducts);
        setUsingDemoData(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter and sort products
  useEffect(() => {
    let filtered = products.filter((product) =>
      product.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return parseFloat(a.price) - parseFloat(b.price);
        case "price-high":
          return parseFloat(b.price) - parseFloat(a.price);
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "name":
        default:
          return a.title?.localeCompare(b.title) || 0;
      }
    });

    setFilteredProducts(filtered);
  }, [products, searchTerm, sortBy]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <p className="text-gray-600 text-lg">Loading products...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-orange-400">Products</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover premium appliances from trusted brands with unbeatable
              prices
            </p>
            {usingDemoData && (
              <div className="mt-4 bg-orange-500/20 backdrop-blur-sm border border-orange-300/30 rounded-lg p-3 max-w-md mx-auto">
                <p className="text-sm text-orange-100">
                  <Zap className="w-4 h-4 inline mr-1" />
                  Showing demo products - Connect Firebase for real data
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <motion.div
              className="relative flex-1 max-w-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </motion.div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <motion.select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </motion.select>

              {/* View Mode Toggle */}
              <motion.div
                className="flex bg-gray-100 rounded-full p-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full transition-all ${
                    viewMode === "grid"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-full transition-all ${
                    viewMode === "list"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className="max-w-[100vw] mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-8 lg:py-12">
        <motion.div
          className="mb-4 sm:mb-6 lg:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {filteredProducts.length} of {products.length} products
              {usingDemoData && (
                <span className="text-orange-600 ml-2 text-xs sm:text-sm px-2 py-1 bg-orange-100 rounded-full">
                  Demo Mode
                </span>
              )}
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span>Live updates</span>
            </div>
          </div>
        </motion.div>

        {filteredProducts.length === 0 ? (
          <motion.div
            className="text-center py-8 sm:py-12 lg:py-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-xs sm:max-w-md mx-auto">
              <div className="relative mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl mx-auto flex items-center justify-center">
                  <Search className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">0</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {/* Mobile: Single column stacked cards */}
            <div className="block sm:hidden">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-4 relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Mobile Card Layout */}
                  <div className="flex h-32">
                    {/* Left: Image */}
                    <div className="w-32 relative overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-br from-gray-100 to-gray-200 h-full flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <ShoppingCart className="w-8 h-8 text-gray-400" />
                        )}
                      </motion.div>

                      {/* Mobile Badge */}
                      <div className="absolute top-2 left-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            product.isDemo
                              ? "bg-orange-500 text-white"
                              : product.inStock === false
                              ? "bg-red-500 text-white"
                              : "bg-green-500 text-white"
                          }`}
                        >
                          {product.isDemo
                            ? "Demo"
                            : product.inStock === false
                            ? "Out"
                            : "✓"}
                        </span>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 p-3 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1 line-clamp-2">
                          {product.title || "Product Name"}
                        </h3>
                        {product.brand && (
                          <p className="text-xs text-gray-500 mb-1">
                            {product.brand}
                          </p>
                        )}
                        <div className="flex items-center mb-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(product.rating || 4.5)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600 ml-1">
                            ({product.rating || 4.5})
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-blue-600">
                            LKR {product.price || "0"}
                          </span>
                        </div>
                        <motion.button
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                            product.inStock === false
                              ? "bg-gray-300 text-gray-500"
                              : "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                          }`}
                          whileHover={
                            product.inStock !== false ? { scale: 1.05 } : {}
                          }
                          whileTap={
                            product.inStock !== false ? { scale: 0.95 } : {}
                          }
                          disabled={product.inStock === false}
                        >
                          {product.inStock === false ? "Out" : "Add"}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tablet: 2 columns with horizontal cards */}
            <div className="hidden sm:block lg:hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex h-40"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    {/* Tablet Image */}
                    <div className="w-40 relative overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-br from-gray-100 to-gray-200 h-full flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <ShoppingCart className="w-10 h-10 text-gray-400" />
                        )}
                      </motion.div>

                      {/* Tablet Badge */}
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            product.isDemo
                              ? "bg-orange-500 text-white"
                              : product.inStock === false
                              ? "bg-red-500 text-white"
                              : "bg-green-500 text-white"
                          }`}
                        >
                          {product.isDemo
                            ? "Demo"
                            : product.inStock === false
                            ? "Out of Stock"
                            : "In Stock"}
                        </span>
                      </div>

                      {/* Tablet Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-2">
                          <motion.button
                            className="bg-white text-gray-800 p-2 rounded-full shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Eye className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            className="bg-white text-gray-800 p-2 rounded-full shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Heart className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Tablet Content */}
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                          {product.title || "Product Name"}
                        </h3>
                        {product.brand && (
                          <p className="text-sm text-gray-500 mb-2">
                            {product.brand}
                          </p>
                        )}
                        <div className="flex items-center mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating || 4.5)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 ml-2">
                            ({product.rating || 4.5})
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xl font-bold text-blue-600">
                            LKR {product.price || "0"}
                          </span>
                          <span className="text-sm text-gray-500 line-through ml-2">
                            LKR {Math.round((product.price || 0) * 1.2)}
                          </span>
                        </div>
                        <motion.button
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                            product.inStock === false
                              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                              : "bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600"
                          }`}
                          whileHover={
                            product.inStock !== false ? { scale: 1.05 } : {}
                          }
                          whileTap={
                            product.inStock !== false ? { scale: 0.95 } : {}
                          }
                          disabled={product.inStock === false}
                        >
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          {product.inStock === false ? "Out" : "Add"}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop: Masonry-style grid with different layouts */}
            <div className="hidden lg:block">
              <div className="columns-1 xl:columns-2 2xl:columns-3 gap-6 space-y-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className={`group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 break-inside-avoid ${
                      index % 3 === 0
                        ? "mb-6"
                        : index % 3 === 1
                        ? "mb-4"
                        : "mb-8"
                    }`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    {/* Desktop Image */}
                    <div className="relative overflow-hidden">
                      <motion.div
                        className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${
                          index % 4 === 0
                            ? "h-80"
                            : index % 4 === 1
                            ? "h-64"
                            : index % 4 === 2
                            ? "h-72"
                            : "h-60"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-gray-400 text-center">
                            <ShoppingCart className="w-12 h-12 mx-auto mb-2" />
                            <p className="text-sm">No Image</p>
                          </div>
                        )}
                      </motion.div>

                      {/* Desktop Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-2">
                          <motion.button
                            className="bg-white text-gray-800 p-3 rounded-full shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Eye className="w-5 h-5" />
                          </motion.button>
                          <motion.button
                            className="bg-white text-gray-800 p-3 rounded-full shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Heart className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Desktop Badge */}
                      <div className="absolute top-4 left-4">
                        <motion.span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            product.isDemo
                              ? "bg-orange-500 text-white"
                              : product.inStock === false
                              ? "bg-red-500 text-white"
                              : "bg-green-500 text-white"
                          }`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {product.isDemo
                            ? "Demo"
                            : product.inStock === false
                            ? "Out of Stock"
                            : "In Stock"}
                        </motion.span>
                      </div>
                    </div>

                    {/* Desktop Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                        {product.title || "Product Name"}
                      </h3>

                      {product.brand && (
                        <p className="text-sm text-gray-500 mb-2">
                          {product.brand}
                        </p>
                      )}

                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating || 4.5)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">
                          ({product.rating || 4.5}) • {product.reviews || 0}{" "}
                          reviews
                        </span>
                      </div>

                      {product.description && (
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {product.description}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <Shield className="w-3 h-3 mr-1" />2 Year Warranty
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Truck className="w-3 h-3 mr-1" />
                          Free Delivery
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-blue-600">
                            LKR {product.price || "0"}
                          </span>
                          <span className="text-sm text-gray-500 line-through ml-2">
                            LKR {Math.round((product.price || 0) * 1.2)}
                          </span>
                        </div>
                        <motion.button
                          className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center ${
                            product.inStock === false
                              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                              : "bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600"
                          }`}
                          whileHover={
                            product.inStock !== false ? { scale: 1.05 } : {}
                          }
                          whileTap={
                            product.inStock !== false ? { scale: 0.95 } : {}
                          }
                          disabled={product.inStock === false}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          {product.inStock === false
                            ? "Out of Stock"
                            : "Add to Cart"}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Shop With Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Authentic Products",
                description: "100% genuine products from authorized dealers",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                description: "Quick delivery across Sri Lanka with tracking",
              },
              {
                icon: Shield,
                title: "2 Year Warranty",
                description: "Comprehensive warranty coverage on all products",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
                }}
              >
                <motion.div
                  className="bg-blue-600 text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
