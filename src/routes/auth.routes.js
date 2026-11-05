import { Router } from "express";

import postAuthLogin from "../controllers/auth.controller.js";

const router=Router();

router.post('/login',postAuthLogin);

export default router;