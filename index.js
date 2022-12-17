const express = require("express");
const app = express();
const routers = require("./app/routers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

var options = {
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "1234",
  database: "parcel",
};

var sessionStore = new MySQLStore(options);

app.use(
  session({
    secret: "secret@1234", // 암호화때 사용할 비밀 번호
    resave: false, // 새로운 요청시 세션에 변동 사항이 없어도 다시 저장할지 설정
    saveUninitialized: false, // 세션에 저장할 내용이 없어도 저장할지 설정 false
    store: sessionStore,
    cookie: {
      httpOnly: true, // 클라어언트 자바스크립트를 통해 세션 쿠키를 사용할 수 없도록함.
    },
  })
);

app.use("/api", routers);

const { swaggerUi, specs } = require("./swagger/swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.static("./app_web"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/app_web/index.html");
});

app.listen(8080);
