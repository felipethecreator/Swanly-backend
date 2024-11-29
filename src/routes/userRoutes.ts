import express from "express";
import userController from "../controller/userController";
import { validateUsername } from "../middleware/userValidation";

const router = express.Router();

router.post("/register", validateUsername, userController.handleCreateUser);

export default router;