import * as express from "express";

import transactions from "./transactions";
import accounts from "./accounts";

let app:any = express();
app.use("/module1", transactions);
app.use("/module2", accounts);

app.listen(7777, () => {
    console.log('Server Started On Port : 7777')
})


//http://localhost:7777/module1  -> go to transactions
//http://localhost:7777/module1/pierres
//http://localhsot:7777/module2 -> go to accounts
//http://localhost:7777/