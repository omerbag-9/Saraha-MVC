import { Router } from "express";
import { getMessage } from "./message.controller.js";

const messageRouter = Router()
messageRouter.get('/',getMessage)
export default messageRouter