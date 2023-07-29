const express = require("express");
const app = express();
app.use(express.json());

const connection = require("./knexfile")["development"];

const tinderhabi = require("knex")(connection);
const cliente = require("knex")(connection);
const rapi = require("knex")(connection);

// GET (LEER) en tabla tinderhabi trae todos los registros de la base de datos
app.get("/tinderhabi", (req, res) => {
  tinderhabi("tinderhabi").then((tinderhabi) => {
    res.json(tinderhabi);
  });
});

// GET (LEER)  en tabla cliente trae todos los registros de la base de datos
app.get("/cliente", (req, res) => {
  cliente("cliente").then((cliente) => {
    res.json(cliente);
  });
});

// GET (LEER) en tabla cliente trae solo los registros que yo quiera mediante el id que yo digite
app.get("/cliente/:id", (req, res) => {
  const { id } = req.params;
  cliente("cliente")
    .where({ id_cliente: id })
    .then((cliente) => {
      res.json(cliente);
    });
});

// GET (LEER)  en tabla rapi trae todos los registros de la base de datos
app.get("/rapi", (req, res) => {
  rapi("rapi").then((rapi) => {
    res.json(rapi);
  });
});

// GET (LEER) en tabla rapi trae solo los registros que yo quiera mediante el id que yo digite
app.get("/rapi/:id", (req, res) => {
  const { id } = req.params;
  rapi("rapi")
    .where({ id_rapi: id })
    .then((rapi) => {
      res.json(rapi);
    });
});

// POST (Crear) en tabla  tinderhabi ----(Crear) y agregar nuevos registros a la base datos...
//...para enviar los registros desde postman ...
// ...en postman creo con las llaves formato json los registros que vaya a enviar a la tabla
app.post("/tinderhabi", (req, res) => {
  const crear = req.body;
  tinderhabi("tinderhabi")
    .insert(crear)
    .then((tinderhabi) => {
      res.json(tinderhabi);
    });
});

// POST (Crear) en tabla  cliente ----(Crear) y agregar nuevos registros a la base datos...
//...para enviar los registros desde postman ...
// ...en postman creo con las llaves formato json los registros que vaya a enviar a la tabla
app.post("/cliente", (req, res) => {
  const crear = req.body;
  cliente("cliente")
    .insert(crear)
    .then((cliente) => {
      res.json(cliente);
    });
});

// POST (Crear) en tabla  rapi ----(Crear) y agregar nuevos registros a la base datos...
//...para enviar los registros desde postman ...
// ...en postman creo con las llaves formato json los registros que vaya a enviar a la tabla
app.post("/rapi", (req, res) => {
  const crear = req.body;
  rapi("rapi")
    .insert(crear)
    .then((rapi) => {
      res.json(rapi);
    });
});

// PUT (Actualizar) en la tabla cliente, y lo que vaya a actualizar o modificar lo hago desde postman
app.put("/cliente/:id", (req, res) => {
  const { id } = req.params;
  const editar = req.body;
  cliente("cliente")
    .where({ id_cliente: id })
    .update(editar)
    .then((cliente) => {
      res.json(cliente);
    });
});

app.listen(8000, () => {
  console.log("corriendo servidorr");
});
