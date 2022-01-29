import { Context, NextFunction } from 'https://deno.land/x/grammy/mod.ts';

const botIsAdmin = async (ctx: Context, next: NextFunction) => {
  const admins = await ctx.getChatMember(ctx.me.id);
  if (admins.status === 'administrator') {
    return (admins.can_manage_chat &&
      admins.can_change_info &&
      admins.can_delete_messages &&
      admins.can_invite_users &&
      admins.can_restrict_members &&
      admins.can_pin_messages &&
      admins.can_promote_members &&
      admins.can_manage_voice_chats) ?
      await next() :
      null;
  }
  return;
}

export { botIsAdmin };