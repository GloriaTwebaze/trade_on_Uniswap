/** 
const logTransaction = (transaction: any) => {
    console.log("========")
  const data = utils.hexDataSlice(transaction.data, 0, 4).toLowerCase();
  if (data === '0x0add0b3b') {
    console.log(`Transaction hash: ${transaction.hash}`);
    console.log(`Decoded data: ${utils.hexlify(transaction.data)}`);
    console.log(`Transaction Type: Added Liquidity`);
  }
};

telegraf.read( pendingTxn, (data: any) => {
  data.forEach((transaction: any) => logTransaction(transaction));
});
*/

import express, { Router } from "express";
import { providers, BigNumber, utils } from "ethers";
import Uniswap from "@uniswap/sdk";
import { Request, Response } from "express";
import { ethers } from "ethers";

const route = Router();
const app = express();

export async function pendingTxn(req: Request, res: Response) {
  const provider = new ethers.providers.WebSocketProvider(
    `wss://mainnet.infura.io/ws/v3/7e789729d97f4626baf77ac0aae188ed`
  );
  const blockNumber = await provider.getBlockNumber();
  const block = await provider.getBlock(blockNumber);
  const transactions = block.transactions;
  try {
    const transactions: any = [];

    provider.on("pending", async (tx) => {
      const txtInfo = await provider.getTransaction(tx);
      if (txtInfo && txtInfo.to) {
        const contractAddress = txtInfo.to;
        const byteCode = await provider.getCode(contractAddress);
        const data = utils.hexDataSlice(txtInfo.data, 0, 4).toLowerCase();
        if (data === "0x") {
          transactions.push({
            "Transaction Hash": txtInfo.hash,
            "To Address": txtInfo.to,
            "Byte Code": byteCode,
            "Transaction Type": "Added Liquidity",
          });
        }
      }
    });

    setTimeout(() => {
      provider.removeAllListeners();
      if (transactions.length > 0) {
        res.status(200).json(transactions);
      } else {
        res.status(400).json({
          message: "No pending transactions found",
        });
      }
    }, 5000);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(400).json({
      message: "An error occurred",
      error: error,
    });
  }
}

app.use("/", route);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

// export { route as pendingTxn };
