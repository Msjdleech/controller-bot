import { Context } from 'https://deno.land/x/grammy/mod.ts';

const unPinAll = async (ctx: Context) => {
  await ctx.unpinAllChatMessages();
}

export { unPinAll };