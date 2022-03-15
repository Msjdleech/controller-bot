import { Context, NextFunction } from "../packages/grammy.ts";

const isGroup = async (ctx: Context, next: NextFunction) => {
  if (ctx.chat?.type === "private") return;
  await next();
};

export { isGroup };
