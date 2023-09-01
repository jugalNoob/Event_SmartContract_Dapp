import React,{useState , useEffect} from 'react'
import "./style/login.css"
import { ethers } from "ethers";
import abi from "./ABI.json"
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

///81602803678581785496967349548927649355522404301072537396463711605918296759735
///62131949559646837285624522349909023530249044545323817480337701396235653424919
  
  const [state , setState]=useState({
    provider:null,
    signer:null,
    address:null
})

//address
const [Addresss, setAddresss]=useState();

const contractAddress="0xB1983273b9dE9C23069BBdc812ab1d816674e37a";

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


const [verify , setVerfiy]=useState()

const [show, setShow] = useState([]);
const ClickAll=async()=>{
  try {
  const {signer , provider}=state;
  const contractss=new ethers.Contract(contractAddress, abi , signer)


  
  const verifyprofile=await contractss.getIdentity(verify)
  let allone = verifyprofile.join(" , ");
  let allshow=allone.split(",")
  console.log(allshow);

  localStorage.setItem('keyCheckData', JSON.stringify(allshow));

  setShow(allshow);
  
} catch (error) {
  console.log(error)
}

}

//Verify a keys in smart contract ////!SECTION


const [keyVerify , setKeyVerify]=useState()

const AllKeysVerify=async()=>{

  const {signer , provider}=state;
  const contractss=new ethers.Contract(contractAddress, abi , signer)


  const verifyprofile=await contractss.verifyKey(keyVerify)

  console.log(verifyprofile)
  let allshow=verifyprofile.split(",")

  localStorage.setItem('keyCheckData', JSON.stringify(allshow));
}


  return (
    <div>

      <div className="background-profile">


<div className="verifyKeys">

<center>

<h1>please first verify your key</h1>

<input type="number" name="" id="" placeholder='verify-Keys' onChange={(e)=>setKeyVerify(e.target.value)} />

<br />
<button onClick={AllKeysVerify}>verifyKeys</button>

</center>
</div>



<div className="form-profiles">

<center>
  <input type="number" name="" id="" onChange={(e)=>setVerfiy(e.target.value)} />

  <br />
  <button onClick={ClickAll}>click</button>
  </center>
</div>

<div className="profile-create">

  <div className="profile-check">

<h2>check your profile</h2>

<h1>name:: {show[0]}</h1>
<h1>time:: {show[1]}</h1>
<h1>country:: {show[2]}</h1>
<h1>age:: {show[3]}</h1>
<h1>idcard:: {show[4]}</h1>


  </div>
</div>
      </div>
    </div>
  )
}

export default Login