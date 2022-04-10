import { bot } from "../core/bot.ts";
import { isBotAdmin } from "../middlewares/index.ts";
import { deleteMessage } from "../controllers/deleteMessage.ts";

bot.on(":pinned_message", isBotAdmin, deleteMessage);
