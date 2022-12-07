const express = require("express");
const app = express();
const routers = require("./app/routers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routers);

const { swaggerUi, specs } = require("./swagger/swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.static("./app_web"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/app_web/index.html");
});

app.listen(8080);
