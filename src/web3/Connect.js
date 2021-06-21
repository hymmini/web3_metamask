import React from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./Connector";

const Connect = ({ children }) => {
  const { active, activate } = useWeb3React();

  const onError = (err: any) => {
    console.error(err);
    debugger;
  };

  const activateWeb3 = () => {
    activate(injected, onError, true).catch((err) => {
      console.error(err);
      debugger;
    });
  }; 

  return active ? (
    <>
      {children}
     
    </>
  ) : (
    <>
      <button type="button" onClick={() => activateWeb3()}>
        Connect
      </button>
    </>
  );
};

export default Connect;
