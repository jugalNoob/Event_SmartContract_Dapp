import React,{useState , useEffect} from 'react'
import { ethers } from "ethers";
import abi from "./ABI.json"
import "./style/mint.css"
function Mint() {
 
   
  const [state , setState]=useState({
    provider:null,
    signer:null,
    address:null
})

//address
const [Addresss, setAddresss]=useState();

const contractAddress="0xD4D24d82B772fDAe69162241B7d6372D8C1DF14c";

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



/// My Tickets and buys


const [age , setAge]=useState()

const [name , setName]=useState()

const [movie , setMovie]=useState()

const MinitTickets=async()=>{
const {signer , provider}=state;
const contractss=new ethers.Contract(contractAddress, abi , signer)
const mintTicket=await contractss.MintTicket(age , name , movie,{
  value: ethers.utils.parseEther("0.00000000000000001")
})
console.log(mintTicket)

}


const [check , setCheck]=useState()

const CheckMintTicket=async()=>{
  const {signer , provider}=state;
const contractss=new ethers.Contract(contractAddress, abi , signer)
const checkticketnumber=await contractss.checkNumber()
console.log(checkticketnumber.toString())
}


///buy your mint tickets

const [buy , setBuy]=useState()

const BuyAnumberofticket=async()=>{
  const {signer , provider}=state;
  const contractss=new ethers.Contract(contractAddress, abi , signer)

  const buyticket=await contractss.Buy_Number(buy)

  console.log(buyticket)
}

//GetMy Ticket

const [get , setGet]=useState()

const getMyTicket=async()=>{

  const {signer, provider}=state;
  const contractss=new ethers.Contract(contractAddress, abi, signer)

  const getMyTicket=await contractss.getMyTickets()

  console.log(getMyTicket.toString())

  let allone=getMyTicket.toString().split(",")



  console.log(allone)

}


//Update ticket 

const [update , setUpdate]=useState()

const UpdateTicket=async()=>{

  
  const {signer, provider}=state;
  const contractss=new ethers.Contract(contractAddress, abi, signer)

const TicketLimitUpdate=await contractss.TicketLimitUpdate(update)

console.log(TicketLimitUpdate)
}

///LimitCuitTicks


const [limit ,setLimit]=useState()

const cutLimitTick=async()=>{
  const {signer, provider}=state;
  const contractss=new ethers.Contract(contractAddress, abi, signer)
  const cuilimit=await contractss.CutLimit(limit)
  console.log(cuilimit)
}

  return (
    <div>

<div className="mintbackground">


<div className="mintTicket">

  <center>

<input type="text" name="" id="" onChange={(e)=>setAge(e.target.value)} placeholder='ages'/>
<br />
<input type="text" name="" id="" onChange={(e)=>setName(e.target.value)} placeholder='name'/>
<br />
<input type="text" name="" id="" onChange={(e)=>setMovie(e.target.value)} placeholder='movies'/>
<br />
<button onClick={MinitTickets}>MintTicket</button>
    
</center>
</div>

<div className="checkmintTicksNumber">
  <center>


<button onClick={CheckMintTicket}>mintnumber</button>
</center>
</div>
<br />
 
 {/* buyTicket */}

 <div className="BuyAnumberofticket">
  <br />
  <center>


 <input type="text" name="" id="" onChange={(e)=>setBuy(e.target.value)} placeholder='enter a number ans buy'/>
 <br />
  <button onClick={BuyAnumberofticket}>buy</button>
  </center>
</div>


{/* getMyTicketsall */}
<br />

<div className="getMy">
  <center>


 <button onClick={getMyTicket}>getTicket</button>
 </center>
</div>

{/* updateTickte */}
<br />

<div className="updateTickNumber">
  <center>
  <input type="text" name="" id="" onChange={(e)=>setUpdate(e.target.value)} placeholder='allinOne'/>
  <br />
  <button onClick={UpdateTicket}>updateTicket</button>
  </center>
</div>

{/* CutLimitAllTicket */}
<br />
<br />

<div className="CutLimitTickets">
<br />
<center>
  <input type="text" name="" id=""  onChange={(e)=>setLimit(e.target.value)} placeholder='cutLimitTicktes'/>

  <br />
  <button onClick={cutLimitTick}>cutLimitTicket</button>
  </center>
</div>
</div>


    </div>
  )
}

export default Mint