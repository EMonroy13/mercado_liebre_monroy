// Requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar
const express = require("express");
const app = express();

const path = require("path");
app.use(express.static("public"));

/* Using render now */
const port = process.env.PORT || 3001;
app.listen(port, () => 
    console.log(`Servidor corriendo en el puerto ${port}`));
/* app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000")
}); */

/* Home path */
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});
/* Register path */
app.get('/registro', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/registro.html'));
});
/* Login path */
app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});