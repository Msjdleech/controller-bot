import { bot } from "../core/bot.ts";
import { ban } from "../controllers/index.ts";
import {
  isBotAdmin,
  isChatGroup,
  hasReply,
  isUserMember,
  isWriterAdmin,
} from "../middlewares/index.ts";

bot.command(
  "ban",
  isChatGroup,
  isBotAdmin,
  isWriterAdmin,
  hasReply,
  isUserMember,
  ban,
);
