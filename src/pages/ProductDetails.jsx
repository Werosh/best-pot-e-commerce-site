import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Heart,
  Share2,
  Star,
  Truck,
  Shield,
  Award,
  ArrowLeft,
  Zap,
  Clock,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Package,
  Headphones,
  RefreshCw,
} from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="text-xl text-gray-600"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading amazing product details...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  // Mock data to enhance the display (you can remove this when your Firebase has complete data)
  const mockImages = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
  ];

  const features = [
    {
      icon: Zap,
      label: "Energy Efficient",
      description: "Save up to 40% on electricity",
    },
    {
      icon: Shield,
      label: "2 Year Warranty",
      description: "Comprehensive coverage",
    },
    {
      icon: Truck,
      label: "Free Delivery",
      description: "Island-wide shipping",
    },
    {
      icon: Headphones,
      label: "24/7 Support",
      description: "Expert assistance",
    },
  ];

  const specifications = [
    { label: "Brand", value: "Samsung" },
    { label: "Model", value: "RF85K9002PG" },
    { label: "Capacity", value: "818L" },
    { label: "Energy Rating", value: "4 Star" },
    { label: "Dimensions", value: "912 x 733 x 1789 mm" },
    { label: "Weight", value: "125 kg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <motion.div
        className="bg-white shadow-sm border-b"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <motion.button
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </motion.button>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={mockImages[selectedImage]}
                alt={product.title}
                className="w-full h-96 object-cover"
                key={selectedImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
              >
                Hot Deal
              </motion.div>
            </motion.div>

            {/* Thumbnail Images */}
            <div className="flex space-x-3">
              {mockImages.map((image, index) => (
                <motion.button
                  key={index}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedImage(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Product Title and Rating */}
            <div>
              <motion.h1
                className="text-3xl font-bold text-gray-900 mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {product.title}
              </motion.h1>
              <motion.div
                className="flex items-center space-x-4 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="ml-2 text-gray-600">(4.8)</span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">156 reviews</span>
                <span className="text-gray-400">|</span>
                <span className="text-green-600 font-semibold">In Stock</span>
              </motion.div>
            </div>

            {/* Price */}
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center space-x-4">
                <motion.span
                  className="text-4xl font-bold text-blue-600"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                >
                  {product.price}
                </motion.span>
                <div className="text-gray-500">
                  <span className="line-through text-lg">LKR 320,000</span>
                  <span className="block text-sm">Save LKR 35,000</span>
                </div>
              </div>
              <motion.div
                className="flex items-center mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Clock className="w-4 h-4 text-orange-500 mr-2" />
                <span className="text-orange-600 font-semibold">
                  Limited time offer - 3 days left!
                </span>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Product Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </motion.div>

            {/* Quantity and Add to Cart */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <motion.button
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </motion.button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <motion.button
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </motion.button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-full font-bold text-lg shadow-lg flex items-center justify-center"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </motion.button>
                <motion.button
                  className={`px-6 py-4 rounded-full border-2 ${
                    isWishlisted
                      ? "border-red-500 bg-red-50 text-red-600"
                      : "border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-600"
                  } transition-colors flex items-center justify-center`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart
                    className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`}
                  />
                </motion.button>
                <motion.button
                  className="px-6 py-4 rounded-full border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm border"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex items-center mb-2">
                    <feature.icon className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-900">
                      {feature.label}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                className="flex justify-between items-center py-3 border-b border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-gray-600 font-medium">{spec.label}:</span>
                <span className="text-gray-900 font-semibold">
                  {spec.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Why Buy From Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: CheckCircle,
                title: "Authentic Products",
                description: "100% genuine products with manufacturer warranty",
              },
              {
                icon: RefreshCw,
                title: "Easy Returns",
                description: "30-day hassle-free return policy",
              },
              {
                icon: Award,
                title: "Trusted Seller",
                description:
                  "Thousands of satisfied customers across Sri Lanka",
              },
            ].map((badge, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <badge.icon className="w-8 h-8 text-green-600" />
                </motion.div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {badge.title}
                </h4>
                <p className="text-gray-600 text-sm">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
