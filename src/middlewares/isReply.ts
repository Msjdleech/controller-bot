import { Context, NextFunction } from "https://deno.land/x/grammy/mod.ts";

const isReply = async (ctx: Context, next: NextFunction) => {
  const replyMessage = ctx.message?.reply_to_message;
  if (!replyMessage) return;
  await next();
};

export { isReply };
