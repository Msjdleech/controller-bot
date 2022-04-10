import { Context, NextFunction } from "../packages/grammy.ts";

const isBotAdmin = async (ctx: Context, next: NextFunction) => {
  const bot = await ctx.getChatMember(ctx.me.id);
  if (bot.status === "administrator") {
    return (bot.can_manage_chat &&
      bot.can_change_info &&
      bot.can_delete_messages &&
      bot.can_invite_users &&
      bot.can_restrict_members &&
      bot.can_pin_messages &&
      bot.can_promote_members &&
      bot.can_manage_voice_chats)
      ? await next()
      : null;
  }
  return;
};

export { isBotAdmin };
