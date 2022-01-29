import { Context } from 'https://deno.land/x/grammy/mod.ts';

const mute = async (ctx: Context) => {
  const user = ctx.message!.reply_to_message!.from;
  const id = user!.id;
  const firstName = user!.first_name;
  const lastName = user!.last_name || '';
  const message = `User <a href="tg://user?id=${id}">${firstName} ${lastName}</a> has been restricted, until 3 hour.`;
  const result = await ctx.restrictChatMember(id, { can_send_messages: false }, { until_date: Math.floor(Date.now() / 1000) + (3600 * 3) });
  if (result) return await ctx.reply(message, { parse_mode: 'HTML' });
  return await ctx.reply('Something went wrong.');
}

export { mute };