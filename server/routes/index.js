const express = require("express");
const router = express.Router();
// Routes
const authRoutes = require("./Auth");
const userRoutes = require("./User");
const productRoutes = require("./Product");
const cartRoutes = require("./Cart");
const orderRoutes = require("./Order");
const paymentRoutes = require("./Stripe");

// Auth
router.use("/auth", authRoutes);

// User
router.use("/user", userRoutes);

// Product
router.use("/products", productRoutes);

// Cart
router.use("/carts", cartRoutes);

// Cart
router.use("/orders", orderRoutes);

// Payment
router.use("/payment", paymentRoutes);

module.exports = router;
