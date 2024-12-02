import express from "express";
import userController from "../controller/userController";
import { validateUsername } from "../middleware/userValidation";
import { getUser } from "../service/userService";

const router = express.Router();

router.post("/register", validateUsername, userController.handleCreateUser);

router.get("/:id", getUser)

export default router;