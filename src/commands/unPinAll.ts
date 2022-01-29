import { bot } from '../core/bot.ts';
import { unPinAll } from '../controllers/index.ts';
import { isGroup, writerIsAdmin, botIsAdmin } from '../middlewares/index.ts';

bot.command('unpinall', isGroup, botIsAdmin, writerIsAdmin, unPinAll);