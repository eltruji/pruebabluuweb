const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  //console.log(__dirname)
  res.render("index", {titulo: "mi titulo dinámico"});
})

app.get("/servicios", (req, res) => {
  res.render("servicios", {tituloServicios: "Mensaje dinamico servicios"});
})

app.use((req,res,next) => {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "titulo del sitio web"
  })
})

app.listen(port, () => {
  console.log(`Servidor a su servicio http://localhost:${port}`);
});
