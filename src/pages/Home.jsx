import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Check,
  ShoppingCart,
  Truck,
  Shield,
  HeartHandshake,
  CreditCard,
  Refrigerator,
  Flame,
  Fan,
  WashingMachine,
  Tv,
  Coffee,
  Star,
  ArrowRight,
  Zap,
  Award,
} from "lucide-react";

export default function Home() {
  const featuredProducts = [
    {
      name: "Samsung 4-Door Refrigerator",
      price: "LKR 285,000",
      image:
        "https://cdn11.bigcommerce.com/s-npke0f4fvr/images/stencil/1280x1280/products/5429/23513/WQ70900SXX_Whirlpool_French_Door_Fridge_675L_5__49136.1605578756.png?c=2",
      rating: 4.8,
      badge: "Best Seller",
    },
    {
      name: 'LG Smart TV 55"',
      price: "LKR 195,000",
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
      rating: 4.7,
      badge: "New Arrival",
    },
    {
      name: "Bosch WashingMachine Machine",
      price: "LKR 125,000",
      image:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=300&fit=crop",
      rating: 4.9,
      badge: "Top Rated",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-100 via-pink-50 to-purple-100 overflow-hidden">
        {/* Floating animated elements */}
        <motion.div
          className="absolute top-20 left-10"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Refrigerator className="w-12 h-12 text-blue-400 opacity-30" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Tv className="w-16 h-16 text-purple-400 opacity-20" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-1/4"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <WashingMachine className="w-10 h-10 text-green-400 opacity-25" />
        </motion.div>

        <motion.div
          className="absolute top-32 right-1/3"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Fan className="w-14 h-14 text-cyan-400 opacity-20" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🎉 Grab Upto 50% Off On Selected Appliances
                </motion.span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-gray-900">Smart Home</span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Solutions
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 max-w-lg leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform your home with premium appliances from trusted global
                brands. Fast delivery across Sri Lanka with expert installation
                support.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/products"
                    className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl flex items-center justify-center transition-all duration-300"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Now
                    <motion.div
                      className="ml-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/register"
                    className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap gap-6 text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div
                  className="flex items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Shield className="w-5 h-5 mr-2 text-green-500" />2 Year
                  Warranty
                </motion.div>
                <motion.div
                  className="flex items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Truck className="w-5 h-5 mr-2 text-blue-500" />
                  Free Delivery
                </motion.div>
                <motion.div
                  className="flex items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Award className="w-5 h-5 mr-2 text-purple-500" />
                  Authorized Dealer
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - Image/Visual */}
            <div className="relative">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {/* Main product image */}
                <motion.div
                  className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
                    alt="Premium Headphones"
                    className="w-full h-64 object-cover rounded-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Premium Headphones
                    </h3>
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-2xl font-bold text-orange-500">
                      LKR 45,000
                    </p>
                  </div>
                </motion.div>

                {/* Floating elements around the main image */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-full p-3 shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-sm font-bold">50% OFF</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-pink-500 text-white rounded-full p-4 shadow-lg"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Zap className="w-6 h-6" />
                </motion.div>

                {/* Background decorative elements */}
                <motion.div
                  className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-30"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600">
            Hand-picked deals just for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute top-4 left-4">
                  <motion.span
                    className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {product.badge}
                  </motion.span>
                </div>
                <motion.div
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.rating})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <motion.button
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Shop by Category
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                icon: Refrigerator,
                name: "Refrigerators",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: Flame,
                name: "Gas Cookers",
                color: "bg-red-100 text-red-600",
              },
              {
                icon: Fan,
                name: "Cooling",
                color: "bg-cyan-100 text-cyan-600",
              },
              {
                icon: WashingMachine,
                name: "Laundry",
                color: "bg-purple-100 text-purple-600",
              },
              {
                icon: Tv,
                name: "Entertainment",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: Coffee,
                name: "Kitchen",
                color: "bg-orange-100 text-orange-600",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`${category.color} rounded-2xl p-6 text-center shadow-lg transition-all duration-300`}
                >
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <category.icon className="w-12 h-12 mx-auto mb-3" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-800">
                    {category.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Trusted Sri Lankan Supplier",
                description:
                  "Local expertise with international quality standards and authentic products",
              },
              {
                icon: Award,
                title: "Premium Branded Products",
                description:
                  "Only authorized dealers of top global brands for guaranteed quality",
              },
              {
                icon: Truck,
                title: "Fast Island-wide Delivery",
                description:
                  "Quick and reliable delivery across Sri Lanka with installation support",
              },
              {
                icon: HeartHandshake,
                title: "24/7 Customer Support",
                description:
                  "Dedicated multilingual support team ready to assist you anytime",
              },
              {
                icon: CreditCard,
                title: "Flexible Payment Options",
                description:
                  "Easy bank transfers, card payments, and installment plans available",
              },
              {
                icon: Zap,
                title: "Energy Efficient Solutions",
                description:
                  "Save money with our range of energy-efficient appliances",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="bg-blue-600 text-white rounded-full p-3 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Home?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Browse our complete catalog and enjoy secure, fast online ordering.
            Create an account to track orders and unlock exclusive member
            benefits.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/products"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl flex items-center justify-center transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Start Shopping
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/register"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Join Our Community
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
