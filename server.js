const express = require("express");
const path = require("path");
const forceSsl = require("force-ssl-heroku")

const app = express();

app.use(forceSsl);

app.use(express.static("dist/congresso-remoto-site"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "congresso-remoto-site", "index.html"));
});

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Servidor web rodando em ${port}`))
