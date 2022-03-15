import { bot } from "../core/bot.ts";
import { ban } from "../controllers/index.ts";
import {
  botIsAdmin,
  isGroup,
  isReply,
  userIsMember,
  writerIsAdmin,
} from "../middlewares/index.ts";

bot.command(
  "ban",
  isGroup,
  botIsAdmin,
  writerIsAdmin,
  isReply,
  userIsMember,
  ban,
);
