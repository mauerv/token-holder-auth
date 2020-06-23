import React from "react";
import Web3 from "web3";

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
    const currentAccount = accounts[0];
    const signature = await web3.eth.personal.sign("Some text", currentAccount);
    console.log(signature);
  };

  return (
    <div className="App">
      <h3>Do you have the token?</h3>
      <button onClick={validateAddress}>Validate Token</button>
    </div>
  );
}

export default App;
