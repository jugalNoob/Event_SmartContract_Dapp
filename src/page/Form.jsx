import React,{useState , useEffect} from 'react'
import "./style/form.css"
import { ethers } from "ethers";
import abi from "./ABI.json"

function Form() {

  
  const [state , setState]=useState({
    provider:null,
    signer:null,
    address:null
})

//address
const [Addresss, setAddresss]=useState();

const contractAddress="0xb162FDF9cD195A3ebdb138FDaa82787930a9c6B3";

useEffect(()=>{
const Checker=async()=>{
const provider = new ethers.providers.Web3Provider(window.ethereum)
const account=await provider.send("eth_requestAccounts", []);
const signer=provider.getSigner()
const address = await signer.getAddress()
// console.log("this is account " + account)
// console.log("this is signer " + signer.toString())
// console.log(address)
setAddresss(address)
setState({provider , signer , address})   


}

Checker()
},[])


//enter veify your profils

const [names , setName]=useState("")

const [date , setDate]=useState()

const [country , setCountry]=useState()

const [age , setAge]=useState()

const [userid  , setUserid]=useState("")


const CLICKEDaLL=async()=>{
  const {signer}=state;
  const contractss=new ethers.Contract(contractAddress, abi ,signer)

  const verifyprofile=await contractss.generateKey(names , date ,country , age, userid)

  console.log(verifyprofile)


}


//check generated key in your account


const [keys , setKeys]=useState()

const [keyCheck , setKeyCheck]=useState([])

const Genet=async()=>{
  const {signer}=state;
  const contractss=new ethers.Contract(contractAddress, abi ,signer)
  const verifyprofile=await contractss.getGeneratedKeys(keys)
  console.log(verifyprofile.toString())


  let allone = verifyprofile.join(" , ");
  let allshow=allone.split(",")
  console.log(allshow);

  //store localStraogert


  setKeyCheck(allshow)


  // Inside a useEffect hook or any appropriate place where you want to retrieve the stored data
// const storedData = localStorage.getItem('keyCheckData');
// if (storedData) {
//   const parsedData = JSON.parse(storedData);
//   setKeyCheck(parsedData);

}

  return (
    <div>

 

<div className="profile-background">


<div className="checkgeneratedKey">
<center>
  <h5>number{keyCheck[0]}<br/></h5>
  <h5>number{keyCheck[1]}</h5>
{/* <h1>name:: {show[0]}</h1> */}

<br />

<input type="text" name="" id="" onChange={(e)=>setKeys(e.target.value)} placeholder='enter a address'/>
<br />
<button onClick={Genet}>keys</button>
</center>
  </div>


<div className="profile">

  <div className="form-profile">

    <h1>add user information or verify</h1>

    <center>



<input type="text" name="" onChange={(e)=>setName(e.target.value)} id="" placeholder='name' />
<br />
<input type="datetime-local" name="" onChange={(e)=>setDate(e.target.value)} id=""  />
<br />
<select name="country" id="" onChange={(e)=>setCountry(e.target.value)}>
  <option value="country">country</option>
  <option value="india">india</option>
  <option value="usa">usa</option>
  <option value="mexico">mexico</option>
  <option value="japan">japan</option>
</select>

<br />
<input type="number" name="" id="" onChange={(e)=>setAge(e.target.value)} placeholder='age' />
<br />
<select name="userId" id="" onChange={(e)=>setUserid(e.target.value)}>
  <option value="userId">userId</option>
  <option value="Pancard">PanCard</option>
  <option value="VoterCard">VoterCard</option>
  <option value="Passport">passport</option>
  <option value="Aadharcard">japan</option>
</select>

<br />
<button onClick={CLICKEDaLL}>submit</button>



    </center>
  </div>


</div>


</div>

    </div>
  )
}

export default Form






// import React, { useState } from "react";
// import { ethers } from "ethers";

// const App = () => {
//   const [balance, setBalance] = useState(null);

//   const connectWallet = async () => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const account = provider.getSigner();

//     try {
//       balance = await account.getBalance();
//       setBalance(balance);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={connectWallet}>Connect Wallet</button>
//       <h1>Balance: {balance}</h1>
//     </div>
//   );
// };

// export default App;