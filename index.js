import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json())

app.all("/", (req, res) => {
    res.send("I'm up");
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})