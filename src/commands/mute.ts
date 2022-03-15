import { bot } from "../core/bot.ts";
import { mute } from "../controllers/index.ts";
import {
  botIsAdmin,
  isGroup,
  isReply,
  userIsMember,
  writerIsAdmin,
} from "../middlewares/index.ts";

bot.command(
  "mute",
  isGroup,
  botIsAdmin,
  writerIsAdmin,
  isReply,
  userIsMember,
  mute,
);
