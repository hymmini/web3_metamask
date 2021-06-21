import { InjectedConnector } from "@web3-react/injected-connector";

export const CHAIN_IDS = [
  3,
  4,
  5, // Goerli
];

export const injected = new InjectedConnector({ supportedChainIds: CHAIN_IDS });
