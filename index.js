const express = require("express")
const app = express()
const port = 3000

// serving static files
app.use(express.static("public"))

app.listen(port, ()=>{
  console.log(`listening on port: ${port}`)
})