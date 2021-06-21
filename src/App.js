import "./App.css";
import Web3Provider from "./web3/Web3Provider";
import Connect from "./web3/Connect";
import Web3jsComponent from "./web3/Web3jsComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Web3Provider>
          <Connect>
            <Web3jsComponent />
          </Connect>
        </Web3Provider>
      </header>
    </div>
  );
}

export default App;
