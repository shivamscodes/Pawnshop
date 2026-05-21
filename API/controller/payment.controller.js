import Stripe from "stripe";
import { config, requireConfig } from "../config/env.js";

const getStripeClient = () =>
  new Stripe(
    requireConfig(
      config.stripeSecretKey,
      "STRIPE_SECRET_KEY is missing. Add it to API/.env or Vercel environment variables."
    )
  );

async function Gateway(req,res) {
  try {
    const stripe = getStripeClient();

    const { amount, email } = req.body;

     // ✅ validation
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    // create product
    const product = await stripe.products.create({
      name: "Charity Donation",
      description: `Donation of ₹${amount}`,
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: amount * 100, // 100 INR
      currency: "inr",
    });

     // create session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${config.clientUrl}/payment/${encodeURIComponent(email)}/${amount}`,
      cancel_url: `${config.clientUrl}/cancel`,
      customer_email: email,
    });
    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default Gateway;
