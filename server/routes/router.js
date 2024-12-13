const express=require("express")
const router=express.Router()
const userController=require("../controllers/usercontroller")
router.post("/create",userController.insertData)
router.get("/getuser",userController.getData)
router.post("/del",userController.deletData)
router.post("/edituser",userController.editData)
router.post("/editsave",userController.editSaveData)
module.exports=router;