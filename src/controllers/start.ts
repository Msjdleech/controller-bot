import { Context } from 'https://deno.land/x/grammy/mod.ts';

const start = (ctx: Context) => {
  ctx.reply('Hello, world!');
}

export { start };