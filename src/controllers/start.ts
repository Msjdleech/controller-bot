import { Context } from "../packages/grammy.ts";

const start = (ctx: Context) => {
  ctx.reply("Hello, world!");
};

export { start };
