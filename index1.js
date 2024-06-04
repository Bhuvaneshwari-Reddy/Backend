import express from 'express';
const app=express();
const port=3000;
app.use(express.json());
let teadata=[];
let nextid=1;



//post

app.post('/teas',(req,res)=>{
const {name,price}=req.body
const newdata={id:nextid++,name,price}
teadata.push(newdata);
res.status(201).send(newdata)
})

//get

app.get('/teas',(req,res)=>{

    
})



app.listen(port,()=>{
    console.log(`server is running at port :${port}...`)
})