import { Context } from "../packages/grammy.ts";

const unPinAll = async (ctx: Context) => {
  await ctx.unpinAllChatMessages();
};

export { unPinAll };
