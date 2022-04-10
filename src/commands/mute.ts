import { bot } from "../core/bot.ts";
import { mute } from "../controllers/index.ts";
import {
  isBotAdmin,
  isChatGroup,
  hasReply,
  isUserMember,
  isWriterAdmin,
} from "../middlewares/index.ts";

bot.command(
  "mute",
  isChatGroup,
  isBotAdmin,
  isWriterAdmin,
  hasReply,
  isUserMember,
  mute,
);
