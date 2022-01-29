import { Context } from 'https://deno.land/x/grammy/mod.ts';

const mute = async (ctx: Context) => {
  console.log('yes');

  const user = ctx.message!.reply_to_message!.from;
  const id = user!.id;
  // const firstName = user!.first_name;
  // const lastName = user!.last_name || '';
  // const message = `User <a href="tg://user?id=${id}">${firstName} ${lastName}</a> has been banned.`;
  const result = await ctx.restrictChatMember(id, { can_send_messages: false }, { until_date: (3600 * 3) });
  console.log(result);
}

export { mute };