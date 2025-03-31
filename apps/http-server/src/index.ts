import * as express from "express";
import {client} from "@repo/db/client";
const app = express.default();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Hellow");
})

app.post("/signup", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const user = await client.user.create({
        data: {
            username: username,
            password: password
        }
    })
    res.json({
        message: "Signup Done!",
        id: user.id
    });
})


app.listen(3002,()=>{
    console.log("Connected successfully")
})