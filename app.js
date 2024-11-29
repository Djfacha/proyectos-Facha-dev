const express = require('express');
const app = express()



//app.METHOD(PATH, HANDLER)
app.get('/',(req,res) =>{
    res.send('hello world!')
})

app.listen(3000,() =>{
    console.log('listening in http://localhost:3000')
})      
  


