import * as express from "express";

let card:any = express.Router();

card.post("/", (req:any, res:any):any => {
    res.status(200).json({"message":"Welcome to card module"})
})

export default card;