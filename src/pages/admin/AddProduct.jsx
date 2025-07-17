import { useState } from "react";
import { motion } from "framer-motion";
import { db } from "../../services/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Package,
  DollarSign,
  FileText,
  Save,
  ArrowLeft,
  Sparkles,
  ShoppingBag,
  TrendingUp,
  Star,
  Zap,
} from "lucide-react";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "products"), {
        title,
        price: Number(price),
        description,
      });
      navigate("/admin");
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Package className="w-16 h-16 text-blue-300 opacity-20" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-12 h-12 text-purple-300 opacity-25" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-1/4"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <ShoppingBag className="w-14 h-14 text-pink-300 opacity-20" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <TrendingUp className="w-10 h-10 text-green-300 opacity-30" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Plus className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Add New{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Product
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create amazing products for your customers with our intuitive
            dashboard
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="flex justify-start mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button
            onClick={() => navigate("/admin")}
            className="flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 font-medium"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </motion.button>
        </motion.div>

        {/* Main Form Card */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form onSubmit={handleAdd} className="space-y-8">
            {/* Product Title */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <label className="flex items-center text-lg font-semibold text-gray-800">
                <Package className="w-5 h-5 mr-2 text-blue-500" />
                Product Title
              </label>
              <motion.div
                className="relative"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter product title..."
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300 text-lg"
                  required
                />
                <motion.div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  animate={{ scale: title ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Product Price */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <label className="flex items-center text-lg font-semibold text-gray-800">
                <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                Price (LKR)
              </label>
              <motion.div
                className="relative"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price..."
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:bg-white focus:outline-none transition-all duration-300 text-lg"
                  required
                />
                <motion.div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  animate={{ scale: price ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <Zap className="w-5 h-5 text-green-400" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Product Description */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <label className="flex items-center text-lg font-semibold text-gray-800">
                <FileText className="w-5 h-5 mr-2 text-purple-500" />
                Description
              </label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter product description..."
                  rows="6"
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-300 text-lg resize-none"
                  required
                />
              </motion.div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="flex justify-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                <span className="relative flex items-center">
                  {isSubmitting ? (
                    <motion.div
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ) : (
                    <Save className="w-6 h-6 mr-3" />
                  )}
                  {isSubmitting ? "Adding Product..." : "Add Product"}
                </span>
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        {/* Stats/Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {[
            {
              icon: Package,
              title: "Easy Management",
              description: "Simple product creation process",
              color: "from-blue-400 to-blue-600",
            },
            {
              icon: TrendingUp,
              title: "Real-time Updates",
              description: "Instantly sync with your store",
              color: "from-green-400 to-green-600",
            },
            {
              icon: Sparkles,
              title: "Smart Features",
              description: "Advanced product categorization",
              color: "from-purple-400 to-purple-600",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-full flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <card.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
