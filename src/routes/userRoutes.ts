import express from "express";
import userController from "../controller/userController";

const router = express.Router();

router.post("/register", userController.handleCreateUser);

export default router;