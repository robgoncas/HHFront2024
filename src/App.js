import logo from './logo.svg';
import './App.css';

import Web3 from 'web3';
//import { ethers, providers } from 'ethers';
import  convertLib  from './ConvertLib.json'
const ethers = require("ethers");

const web3 = new Web3('http://localhost:7545');
const contractAddress = '0x1713950E56046eeee9969de8FF134370770e3d54';

  const provider = new ethers.providers.Web3Provider(web3.currentProvider);
  const contract = new ethers.Contract(contractAddress, convertLib, provider);

const loadData = async() => {
  const convert = await contract.convert(1000,693);
  alert(convert);
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={loadData} >Convert 1000 CAD to CLP</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
