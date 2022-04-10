import { bot } from "../core/bot.ts";
import { isBotAdmin } from "../middlewares/index.ts";
import { deleteMessage } from "../controllers/deleteMessage.ts";

bot.on(":left_chat_member", isBotAdmin, deleteMessage);
