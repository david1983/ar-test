const express = require("express")
const app = express()
const port = process.env.PORT || 8080

app.use((req, res, next)=>{
  console.log(`HTTP request - ${req.hostname} - ${req.ip} - ${req.url}`)
  next()
})
// serving static files
app.use(express.static("public"))

app.listen(port, ()=>{
  console.log(`listening on port: ${port}`)
})