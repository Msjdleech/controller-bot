import { Context, NextFunction } from "../packages/grammy.ts";

const isUserMember = async (ctx: Context, next: NextFunction) => {
  const { status } = await ctx.getChatMember(
    ctx.message!.reply_to_message!.from!.id,
  );
  if (status === "member") return await next();
  return;
};

export { isUserMember };
