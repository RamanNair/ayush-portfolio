const express=require('express');
const cors=require('cors');

const projectRoutes=require("./src/routes/project");
const myTestRoutes= require('./src/routes/mytest');
const app=express();

//Middleware
app.use(cors());
app.use(express.json());



//Routes
app.get('/',(req,res)=>{res.send('From dev server at home')})
app.use("/api/project",projectRoutes);
app.use('/api/test',myTestRoutes)


const port=process.env.PORT||9091;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
    
})