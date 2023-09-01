import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import abi from './ABI.json';
import one from "./style/one.jpg"
function GetTick() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    address: null,
  });

  const [Addresss, setAddresss] = useState();
  const contractAddress = '0xD4D24d82B772fDAe69162241B7d6372D8C1DF14c';

  useEffect(() => {
    const Checker = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const account = await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAddresss(address);
      setState({ provider, signer, address });
    };
    Checker();
  }, []);

  const [getTick, setTicket] = useState([]);

  const GetTicked = async () => {
    const { signer } = state;
    const contractss = new ethers.Contract(contractAddress, abi, signer);
    const mintTicket = await contractss.getMyTickets();
    let count = mintTicket.toString();
    let spliting = count.split(',');
    setTicket(spliting);
  };

  return (
    <div>

{getTick && getTick.map((item) => (
  <>
  <img src={one} alt="" width="200px" height="200px" />
    <h1 key={item}>{item}</h1>
    <p>kjhdwcku</p>
  </>
))}


      <div className="GetTicked">
        <button onClick={GetTicked}>click</button>
      </div>
    </div>
  );
}

export default GetTick;
