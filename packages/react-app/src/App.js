import React from "react";
import Web3 from "web3";

function App() {
  const validateToken = async () => {
    await window.ethereum.enable();
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    const currentAccount = accounts[0];
    console.log(currentAccount);
  };

  return (
    <div className="App">
      <h3>Do you have the token?</h3>
      <button onClick={validateToken}>Validate Token</button>
    </div>
  );
}

export default App;
