import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { ConfigureRoutes } from "./src/routes";

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
ConfigureRoutes(app)

app.listen(2007, ()=>{
    console.log(" server speeding.....")
})