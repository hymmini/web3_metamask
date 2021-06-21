import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
// const compiledContract2 = require("../smartcontract/MyContractB.json");

const compiledContract = require("../smartcontract/PKKTToken.json");

const Web3jsComponent = () => {
  const { active, connector } = useWeb3React();
  const [web3jsInstance, setWeb3jsInstance] = useState(null);
  const [account, setAccount] = useState("");

  const deployCode = () => {
    if (web3jsInstance === null) {
      return;
    }
    console.log("web3jsInstance", web3jsInstance);
    // console.log('compiledContract2.abi',compiledContract2.abi);
    console.log('compiledContract.abi',compiledContract.abi);
    
    new web3jsInstance.eth.Contract(
      compiledContract.abi
    )
      .deploy({
        // data: "0x" + compiledContract.evm.bytecode.object,
        data:compiledContract.bytecode,
        arguments: [4],
      })
      .send({
        from: account,
        gas: "2000000",
      })
      .then(function (newContractInstance) {
        console.log(newContractInstance.options.address); // instance with the new contract address
      });
  };

  useEffect(() => {
    connector?.getProvider().then((provider) => {
      // Instantiate web3.js
      const instance = new Web3(provider);
      setWeb3jsInstance(instance);
    });
  }, [active, connector]);

  useEffect(() => {
    if (web3jsInstance === null) {
      return;
    }
    web3jsInstance.eth.getAccounts((err, accounts) => {
      if (err) {
        debugger;
        console.error(err);
      } else {
        setAccount(accounts[0]);
      }
    });
  }, [web3jsInstance]);

  return (
    <>
      <p>{web3jsInstance ? `${account}` : ":("}</p>
      <button type="button" onClick={() => deployCode()}>
        deploy
      </button>
    </>
  );
};

export default Web3jsComponent;
