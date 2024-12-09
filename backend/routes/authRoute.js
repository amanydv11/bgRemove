import express from 'express'
import { login, signup,signout } from '../controller/authController.js';
const router = express.Router();

router.post('/login',login)
router.post('/signup',signup)
router.post('/signout',signout)
export default router;