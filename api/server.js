const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Simple GUI-style HTML output
app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>NodeJS API - Ilan</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #222;
                    color: #0ff;
                    text-align: center;
                    padding-top: 80px;
                }
                h1 {
                    font-size: 40px;
                }
                p {
                    font-size: 22px;
                }
            </style>
        </head>
        <body>
            <h1>🚀 NodeJS Application</h1>
            <p>Welcome to Simply Learn Project</p>
            <p>Running on Port <b>${PORT}</b></p>
            <p>Created by <b>Ilan</b></p>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});

