import { bot } from '../core/bot.ts';
import { botIsAdmin } from '../middlewares/index.ts';
import { deleteMessage } from '../controllers/deleteMessage.ts';

bot.on(':new_chat_members', botIsAdmin, deleteMessage);