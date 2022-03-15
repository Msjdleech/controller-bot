import { bot } from "../core/bot.ts";
import { pin } from "../controllers/index.ts";
import {
  botIsAdmin,
  isGroup,
  isReply,
  writerIsAdmin,
} from "../middlewares/index.ts";

bot.command("pin", isGroup, botIsAdmin, writerIsAdmin, isReply, pin);
