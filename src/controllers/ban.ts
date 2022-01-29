import { Context } from 'https://deno.land/x/grammy/mod.ts';

const ban = async (ctx: Context) => {
  const user = ctx.message!.reply_to_message!.from;
  const id = user!.id;
  const firstName = user!.first_name;
  const lastName = user!.last_name || '';
  const result = await ctx.banChatMember(id);
  const message = `User <a href="tg://user?id=${id}">${firstName} ${lastName}</a> has been banned.`;
  if (result) return await ctx.reply(message, { parse_mode: 'HTML' });
  return await ctx.reply('Something went wrong.');
}

export { ban };