import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Heart,
  Star,
  Truck,
  Shield,
  CreditCard,
  Gift,
  ArrowRight,
  Package,
  CheckCircle,
  Clock,
  Zap,
  Award,
  ShoppingBag,
  Tag,
  AlertCircle,
  X,
  Percent,
  DollarSign,
} from "lucide-react";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, "")) || 0;
    const quantity = item.quantity || 1;
    return sum + price * quantity;
  }, 0);

  const shipping = subtotal > 100000 ? 0 : 2500; // Free shipping over LKR 100,000
  const tax = subtotal * 0.08; // 8% tax
  const discount = subtotal * 0.05; // 5% discount
  const total = subtotal + shipping + tax - discount;

  const updateQuantity = (id, newQuantity) => {
    // This would typically be handled by your CartContext
    console.log(`Update quantity for ${id} to ${newQuantity}`);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ShoppingCart className="w-12 h-12 text-white opacity-20" />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Shopping Cart
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Your selected items are waiting for you
              </p>
            </motion.div>
          </div>
        </div>

        {/* Empty Cart */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-8 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ShoppingBag className="w-16 h-16 text-blue-500" />
            </motion.div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added anything to your cart yet. Start
              shopping to fill it up!
            </p>

            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl flex items-center justify-center mx-auto group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Continue Shopping
              <motion.div
                className="ml-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ShoppingCart className="w-12 h-12 text-white opacity-20" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Package className="w-16 h-16 text-white opacity-15" />
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
          <Gift className="w-10 h-10 text-white opacity-25" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shopping Cart
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
              your cart
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Cart Items</h2>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
                </span>
              </div>

              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-2xl hover:border-blue-300 transition-colors"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    {/* Product Image */}
                    <motion.div
                      className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Package className="w-8 h-8 text-gray-400" />
                    </motion.div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Premium Quality
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">(4.8)</span>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <motion.button
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                          updateQuantity(item.id, (item.quantity || 1) - 1)
                        }
                      >
                        <Minus className="w-4 h-4" />
                      </motion.button>

                      <span className="w-8 text-center font-medium">
                        {item.quantity || 1}
                      </span>

                      <motion.button
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                          updateQuantity(item.id, (item.quantity || 1) + 1)
                        }
                      >
                        <Plus className="w-4 h-4" />
                      </motion.button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-xl font-bold text-blue-600">
                        {item.price}
                      </p>
                      <p className="text-sm text-gray-500 line-through">
                        LKR{" "}
                        {(
                          parseFloat(item.price.replace(/[^\d.]/g, "")) * 1.2
                        ).toFixed(0)}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2">
                      <motion.button
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart className="w-5 h-5" />
                      </motion.button>

                      <motion.button
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Promo Code */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Promo Code
              </h3>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg sticky top-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">
                    LKR {subtotal.toFixed(0)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `LKR ${shipping.toFixed(0)}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">LKR {tax.toFixed(0)}</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Discount (5%)</span>
                  <span className="font-semibold">
                    -LKR {discount.toFixed(0)}
                  </span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-blue-600">
                      LKR {total.toFixed(0)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Free shipping on orders over LKR 100,000
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-blue-500" />
                  2-year warranty included
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Truck className="w-4 h-4 text-purple-500" />
                  Fast delivery across Sri Lanka
                </div>
              </div>

              {/* Checkout Button */}
              <motion.button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-full font-bold text-lg shadow-xl flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CreditCard className="w-5 h-5" />
                Proceed to Checkout
                <motion.div
                  className="ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>

              {/* Continue Shopping */}
              <motion.button
                className="w-full mt-4 border-2 border-gray-300 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue Shopping
              </motion.button>
            </motion.div>

            {/* Security Info */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Secure Checkout
                  </h4>
                  <p className="text-sm text-gray-600">SSL encrypted payment</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <CreditCard className="w-4 h-4" />
                  Cards
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  Bank Transfer
                </div>
                <div className="flex items-center gap-1">
                  <Percent className="w-4 h-4" />
                  Installments
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
