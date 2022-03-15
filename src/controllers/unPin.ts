import { Context } from "https://deno.land/x/grammy/mod.ts";

const unPin = async (ctx: Context) => {
  const messageId = ctx.message!.reply_to_message!.message_id;
  await ctx.unpinChatMessage(messageId);
};

export { unPin };
