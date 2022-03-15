import { Context, NextFunction } from "../packages/grammy.ts";

const isReply = async (ctx: Context, next: NextFunction) => {
  const replyMessage = ctx.message?.reply_to_message;
  if (!replyMessage) return;
  await next();
};

export { isReply };
