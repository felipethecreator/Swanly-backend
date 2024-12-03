import express from "express";
import { handleCreateUser, handleDeleteUser, handleGetUser } from "../controller/userController";
import { validateUsername } from "../middleware/userValidation";
import { deleteUser } from "../service/userService";

const router = express.Router();

router.post("/register", validateUsername, handleCreateUser);

router.get("/:id", handleGetUser)

router.delete("/:id", handleDeleteUser)

export default router;