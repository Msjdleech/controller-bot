import { Context, NextFunction } from "https://deno.land/x/grammy/mod.ts";

const isGroup = async (ctx: Context, next: NextFunction) => {
  if (ctx.chat?.type === "private") return;
  await next();
};

export { isGroup };
