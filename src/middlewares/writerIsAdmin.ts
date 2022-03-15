import { Context, NextFunction } from "https://deno.land/x/grammy/mod.ts";

const writerIsAdmin = async (ctx: Context, next: NextFunction) => {
  const anonymBot = "GroupAnonymousBot";
  const { status, user } = await ctx.getChatMember(ctx.message!.from!.id);
  if (
    status === "administrator" || status === "creator" ||
    user.username === anonymBot
  ) {
    return await next();
  }
  return;
};

export { writerIsAdmin };
