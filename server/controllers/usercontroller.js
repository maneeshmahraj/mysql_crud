
const conn=require("../db/connection")

const insertData=async(req,res)=>{
    const {name,email,age,work,mobile,add,description,images}=req.body
    if(!name||!email||!age||!work||!mobile||!add||!description ||!images){
        res.status(201).json("plz fill all data")
    }
    try {
       conn.query("SELECT * FROM user WHERE email= ?",email,(err,result)=>{
       
            if(result){
                res.status(201).json("user allredy in database!!")
            }
            else{
                conn.query("INSERT INTO users SET ?",{name,email,age,work,mobile,add,description,images},(err,result)=>{
                    if(err){
                        console.log("err",err)
                    }
                    else{
                        res.status(201).json(req.body)
                    }
                })
            }
       })
       
    } catch (error) {
      console.error(error)  
    }
   
    
 }
 const getData=async(req,res)=>{
    try {
            conn.query("SELECT * FROM users",(err,result)=>{
                if(err){
                    res.status(201).json("nodata available")
                }
                else{
                    res.status(201).json(result)
                }
            })
    } catch (error) {
        console.error("err ",error)
    }
 }
 const deletData=async(req,res)=>{
    let id=req.body.id;
    
    try {
        conn.query("DELETE FROM users WHERE id=?",id,(err,result)=>{
            if(err){
                res.status(201).json("data is not delete")
            }
            else{
                res.status(201).json("data successfully delete")
            }
           
        })
    } catch (error) {
        console.error("err ",error)
        
    }
 }
 const editData=async(req,res)=>{
    let id=req.body.id;
    try {
        conn.query("SELECT * FROM users WHERE id=?",id,(err,result)=>{
            if(err){
                res.status(201).json("data does not find")
            }
            else{
                res.status(201).json(result[0])
              
            } 
        })
    } catch (error) {
        
    }
 }
 const editSaveData=async(req,res)=>{
    const {id,data}=req.body
   // console.log(id,data)
    try {
       
        conn.query("UPDATE users SET ? WHERE id=?",[data,id],(err,result)=>{
            if(err){
                res.status(201).json("data does not find")
            }
            else{
                res.status(201).json("Data update successfully")
              
            } 
        })
    } catch (error) {
        console.error("err ",error)
        
    }
 }
 module.exports={
    insertData,
    getData,
    deletData,
    editData,
    editSaveData
 }