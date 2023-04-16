import { Router } from "express";
import tokenController from '../../controllers/v1/token.controller.js'

const router = Router()

router.use('/token',tokenController)

export default router