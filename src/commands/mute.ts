import { bot } from '../core/bot.ts';
import { mute } from '../controllers/index.ts';
import { isGroup, writerIsAdmin, isReply, userIsMember, botIsAdmin } from '../middlewares/index.ts';

bot.command('mute', isGroup, botIsAdmin, writerIsAdmin, isReply, userIsMember, mute);