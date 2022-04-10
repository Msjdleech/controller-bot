import { bot } from "../core/bot.ts";
import { isBotAdmin, isWriterAdmin } from "../middlewares/index.ts";
import { deleteMessage } from "../controllers/deleteMessage.ts";

bot.on("::url", isBotAdmin, deleteMessage);
