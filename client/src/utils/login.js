const Web3 =require("web3");
const Block4Health= require('../contructs/Block4Health.json')
  const LoginMeta=()=> {
    load()
    return loadblockchain()
  }
  const load=async()=>{
        
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
     
}
else if (window.web3) {
  window.web3 = new Web3(window.web3.currentProvider)
  
}
else {
  window.alert('non Ethereum browser detected. Dowload Metamask')
}

}

const loadblockchain=async()=>{
  const web3 = window.web3
  const accounts = await web3.eth.getAccounts()
  
 const Signature=  await web3.eth.personal.sign("Block4Health", accounts[0])
 if(Signature){

     const MetaAccount=accounts[0];
      console.log(Signature)
        return { Signature,MetaAccount};
     
 }


}


module.exports={LoginMeta}