import { bot } from "../core/bot.ts";
import { unPin } from "../controllers/index.ts";
import {
  isBotAdmin,
  isChatGroup,
  hasReply,
  isWriterAdmin,
} from "../middlewares/index.ts";

bot.command("unpin", isChatGroup, isBotAdmin, isWriterAdmin, hasReply, unPin);
