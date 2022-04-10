import { Context, NextFunction } from "../packages/grammy.ts";

const isNotWriterAdmin = async (ctx: Context, next: NextFunction) => {
  const { status } = await ctx.getChatMember(ctx.message!.from!.id);
  if (status === "member") {
    return await next();
  }
  return;
};

export { isNotWriterAdmin };
