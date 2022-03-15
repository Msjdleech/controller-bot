import { bot } from "../core/bot.ts";
import { botIsAdmin, isGroup } from "../middlewares/index.ts";
import { deleteMessage } from "../controllers/index.ts";

bot.on("::bot_command", botIsAdmin, isGroup, deleteMessage);
