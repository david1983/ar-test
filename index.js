const express = require("express")
const app = express()
const port = 8080

// serving static files
app.use(express.static("public"))

app.listen(port, ()=>{
  console.log(`listening on port: ${port}`)
})