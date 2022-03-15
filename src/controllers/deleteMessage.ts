import { Context, NextFunction } from "https://deno.land/x/grammy/mod.ts";

const deleteMessage = async (ctx: Context, next: NextFunction) => {
  await ctx.deleteMessage();
  await next();
};

export { deleteMessage };
