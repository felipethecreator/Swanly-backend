import express from "express";
import userController from "../controller/userController";
import { validateUser } from "../middleware/userValidation";

const router = express.Router();

router.post("/register", validateUser, userController.handleCreateUser);

export default router;