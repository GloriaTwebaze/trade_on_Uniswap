import { Application } from "express"
import { uniswapTrade } from "./api"

export const ConfigureRoutes = (app: Application) => {
    app.use([uniswapTrade])
    app.get('/ping', (req, res) => {
        res.send("")
    })
}