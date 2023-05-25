const express = require("express");
const app = express();

let contador = 0;
let contador1 = 0;
let contador5 = 0;

app.get("/contador", function (req, res) {
  res.send({contador});
});

app.get("/incrementar1", function (req, res) {
    contador++;
contador1++;
res.send({contador});
});

app.get("/incrementar5", function (req, res) {
    contador5++;
    5+=contador;
  res.send({ contador });
});

app.get("/relatorio", function (req, res) {
  res.send({ contador, contador1,contador5 });
});


app.listen(3000);