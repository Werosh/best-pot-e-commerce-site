const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripe = require("stripe")("your_stripe_secret_key");
admin.initializeApp();

exports.createCheckoutSession = functions.https.onRequest(async (req, res) => {
  try {
    const { items } = req.body;
    const line_items = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: "https://yourdomain.com/success",
      cancel_url: "https://yourdomain.com/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).send(error.toString());
  }
});
