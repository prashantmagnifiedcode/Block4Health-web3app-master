const Web3 =require("web3");
const Block4Health= require('../contructs/Block4Health.json')
  const Initopenwallet=()=> {
    load()
    return loadblockchain()
  }
  const openwallet=()=> {
    load()
    return loadblockchain1()
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
const loadblockchain1=async()=>{
  const web3 = window.web3
  const accounts = await web3.eth.getAccounts()
  const networkId = await web3.eth.net.getId()
  const networkData = Block4Health.networks[networkId]
  
  // console.log(networkData)
 
    if(networkData){
           let  instance= new web3.eth.Contract(Block4Health.abi,networkData.address);
           
             console.log(instance.methods)
             return {instance,accounts};
     } 

}
const loadblockchain=async()=>{
  const web3 = window.web3
  const accounts = await web3.eth.getAccounts()
  
 const signature=  await web3.eth.personal.sign("Block4Health", accounts[0])
  console.log(signature)

  const networkId = await web3.eth.net.getId()
  const networkData = Block4Health.networks[networkId]
  
  // console.log(networkData)
 
    if(networkData){
           let  instance= new web3.eth.Contract(Block4Health.abi,networkData.address);
           
             console.log(instance.methods)
             return {instance,accounts,signature};
     } 

}


module.exports={openwallet,Initopenwallet}