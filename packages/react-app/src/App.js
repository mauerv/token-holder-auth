import React from "react";
import Web3 from "web3";
const axios = require("axios").default;

function App() {
  const validateToken = async () => {
    // await window.ethereum.enable();
    // const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    // const accounts = await web3.eth.getAccounts();
    // const currentAccount = accounts[0];
    // const contractAddr = "0x7Ce5A09Bf3A1b2A2d34d63DAFb46ae41dD734Ca8";
    // const contract = new web3.eth.Contract(abi, contractAddr);
    // const balance = await contract.methods
    //   .balanceOf(currentAccount)
    //   .call({ from: currentAccount });
    // const instance = contract.at();
    // // Get balance of my address.
    // const balance = await instance.balanceOf(currentAccount);
    //console.log(balance);
  };

  const validateAddress = async () => {
    await window.ethereum.enable();
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    const owner = accounts[0];
    const message = "Some text";
    const messageHash = web3.utils.toHex(message);
    const signature = await web3.eth.personal.sign(message, owner);

    axios.post("http://localhost:5000/validate", {
      owner,
      message,
      messageHash,
      signature,
    });
  };

  const checkServer = async () => {
    axios
      .get("http://localhost:5000/echo")
      .then((response) => console.log(response));
  };

  return (
    <div className="App">
      <h3>Do you have the token?</h3>
      <button onClick={validateAddress}>Validate Token</button>
      <button onClick={checkServer}>Check Server</button>
    </div>
  );
}

export default App;
