const {openwallet}=require("./metafunction")
const RegisterPatient=async(hashrecord)=>{
   console.log(hashrecord)
    
    try{

        const {instance,accounts}=await openwallet()
        console.log("patientreg",accounts[0])
         const  reg= await instance.methods.Register_patient(hashrecord).send({from:accounts[0]});
        console.log("patehintreg",reg)

        if(reg.status){
            alert("successfully register")
            return true;

        }
    }catch(e){
        alert("Not proceed Further")
    
        return false;

    }

}
module.exports={RegisterPatient}