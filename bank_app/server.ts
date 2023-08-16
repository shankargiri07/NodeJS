import * as express from "express";

//import custom module in main 
import accounts from "./accounts";
import transactions from "./transactions";
import card from "./card";

let app:any = express();

app.use("/accounts", accounts);
app.use("/transactions", transactions);
app.use("/card", card);

app.listen(7777, () => {
    console.log('Server Stared On Port : 7777')
});

//http://localhsot:7777/accounts
//http://localhost:7777/accounts/login

//http://localhsot:7777/transactions  token,wish

//http://localhsot:7777/card