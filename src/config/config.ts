import 'dotenv/config'

export const Configs = {
    PRIVATE_KEY: process.env.PRIVATE_KEY || "",
    URL: process.env.URL ||"",
    BOT_TOKEN: process.env.BOT_TOKEN || "",
    TESTNET: true
}
