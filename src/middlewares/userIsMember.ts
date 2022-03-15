import { Context, NextFunction } from "https://deno.land/x/grammy/mod.ts";

const userIsMember = async (ctx: Context, next: NextFunction) => {
  const { status } = await ctx.getChatMember(
    ctx.message!.reply_to_message!.from!.id,
  );
  if (status === "member") return await next();
  return;
};

export { userIsMember };
