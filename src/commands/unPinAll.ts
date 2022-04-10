import { bot } from "../core/bot.ts";
import { unPinAll } from "../controllers/index.ts";
import { isBotAdmin, isChatGroup, isWriterAdmin } from "../middlewares/index.ts";

bot.command("unpinall", isChatGroup, isBotAdmin, isWriterAdmin, unPinAll);
