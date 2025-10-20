const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000

app.get("/",(req,res) => {
    res.send("Hello From the root")
})

app.get("/:id",(req,res) => {
    res.send(`Hello from ${req.params.id}`)
})

app.get("/app-crash", (req,res) => {
    res.send("App Crashing.....")
    process.exit(1)
})


if(require.main === module){
    app.listen(PORT,() => {
        console.log(`Listening on port ${PORT}`)
    })
}

module.exports = app;