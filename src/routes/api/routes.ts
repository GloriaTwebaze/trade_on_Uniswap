import { Route } from "@uniswap/sdk";
import { Router } from "express";
import { pendingTxn } from "../../exchange/pendingtxn";

import { getBalance, swap } from "../../exchange/swap";

const route = Router()
route.get('/getbal', getBalance)
route.get('/pending_txn',pendingTxn)
route.post('/sell', swap)

export {route as uniswapTrade}