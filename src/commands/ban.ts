import { bot } from '../core/bot.ts';
import { ban } from '../controllers/index.ts';
import { isGroup, writerIsAdmin, isReply, userIsMember, botIsAdmin } from '../middlewares/index.ts';

bot.command('ban', isGroup, botIsAdmin, writerIsAdmin, isReply, userIsMember, ban);