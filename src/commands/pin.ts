import { bot } from "../core/bot.ts";
import { pin } from "../controllers/index.ts";
import {
  isBotAdmin,
  isChatGroup,
  hasReply,
  isWriterAdmin,
} from "../middlewares/index.ts";

bot.command("pin", isChatGroup, isBotAdmin, isWriterAdmin, hasReply, pin);
