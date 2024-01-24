import express from "express";
import {RegisterController,LoginController, forgotPasswordController} from "../controllers/AuthController.js";
import { RequireSignIn, isAdmin } from "../middlewares/AuthMiddleware.js";

const router= express.Router();

router.post("/register",RegisterController);
router.post("/login",LoginController);
router.post("/forgot-password",forgotPasswordController);

export default router;





