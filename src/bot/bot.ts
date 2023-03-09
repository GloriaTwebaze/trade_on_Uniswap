import { Context, Markup, Telegraf } from "telegraf";
import { Configs } from "../config";

const bot = new Telegraf(Configs.BOT_TOKEN);

bot.start((Context)=>{
    Markup.inlineKeyboard([
        Markup.button.callback("swap" ,"swap")
    ])
})



