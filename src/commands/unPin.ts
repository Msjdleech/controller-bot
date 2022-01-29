import { bot } from '../core/bot.ts';
import { unPin } from '../controllers/index.ts';
import { isGroup, writerIsAdmin, isReply, botIsAdmin } from '../middlewares/index.ts';

bot.command('unpin', isGroup, botIsAdmin, writerIsAdmin, isReply, unPin);