import { bot } from '../core/bot.ts';
import { pin } from '../controllers/index.ts';
import { isGroup, writerIsAdmin, isReply, botIsAdmin } from '../middlewares/index.ts';

bot.command('pin', isGroup, botIsAdmin, writerIsAdmin, isReply, pin);