import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  getOrders,
  updateOrderToPaid,
} from "../controller/orderController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);

export default router;
