// const http=require('http')
// const server=http.createServer((req,res)=>
// {
//     console.log(req.url)
//     res.writeHead(200,{'cotent-type':'text/html'})
//     res.write('<h1>Home Page<h1>')
//     res.end()
// })


// server.listen(9000)



// const express=require('express')
// const app=express()
// const path=require('path');

// app.use(express.static('./public'))

// app.all('*',(req,res)=>
// {
//     res.status(404).send('<h1>Resourse Not Found</h1>')
// })
// app.listen(5000,()=>
// {
//     console.log('server is listening on port 5000')
// })
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen


const express=require('express')
const app=express();

app.get('/',(req,res)=>
{
    res.json([{name:'john'},{name:'susan'}]);
})
app.listen(5000,()=>
{
    console.log('server is listening')
})