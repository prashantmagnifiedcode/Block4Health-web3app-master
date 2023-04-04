const {openwallet}=require("./metafunction")
const registerHospital=async(hashrecord)=>{
    try{

        const {instance,accounts}=await openwallet()
        console.log("hospitalreg",accounts[0])
        const reg= await instance.methods.Register_Hospital(hashrecord).send({from:accounts[0]});
        console.log("reg",reg)

        if(reg.status){
            alert("successfully register")
            return true;

        }
    }catch(e){
        alert("Not proceed Further Hospital Register")
        return false;

    }

}
module.exports={registerHospital}