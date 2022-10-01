import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import { Nav, Loader } from './components';
import { abi, contractAddress } from './contract';
import { formatBigNumber } from './utils';
import 'react-toastify/dist/ReactToastify.css';

let provider; let
  signer;
if (window.ethereum) {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();
}

const App = () => {
  const [account, setAccount] = useState({ address: '', balance: '' });
  const [metamaskMessage, setMetamaskMessage] = useState(false);
  const [chainMessage, setChainMessage] = useState('');

  const getContract = async (signerOrProvider) => {
    const network = await provider.getNetwork();
    const address = contractAddress[network.chainId.toString()];
    const contract = new ethers.Contract(address, abi, signerOrProvider);
    return contract;
  };

  const connectWallet = async () => {
    const accounts = await provider.send('eth_requestAccounts', []);
    const balance = await signer.getBalance();
    const numEth = formatBigNumber(balance, 3);
    setAccount({ address: accounts[0], balance: numEth });
  };

  const isConnected = async () => {
    const address = await signer.getAddress();
    return address;
  };

  const getCurrentNetwork = async () => {
    const network = await provider.getNetwork();
    if (contractAddress[+network.chainId]) {
      setChainMessage('');
    } else {
      setChainMessage('Please use Goerli network');
      if (!contractAddress[+network.chainId]) {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x5' }],
        });
      }
      window.location.reload();
    }
  };

  useEffect(() => {
    if (typeof ethereum !== 'undefined') {
      ethereum.on('accountsChanged', async (accounts) => {
        if (accounts.length) {
          await connectWallet();
        } else {
          setAccount({ address: '', balance: '' });
        }
      });
      ethereum.on('chainChanged', (chainId) => {
        if (contractAddress[+chainId]) {
          setChainMessage('');
        } else {
          setChainMessage('Please use Goerli network');
        }
      });

      getCurrentNetwork();
      isConnected()
        .then(async () => connectWallet())
        .catch((err) => console.log(err.message));
    } else {
      setMetamaskMessage(true);
    }
  }, []);

  return (
    <>
      <ToastContainer position="bottom-right" theme="dark" />
      <div className="min-h-screen gradient-background flex flex-col justify-between">
        <Nav
          connectWallet={connectWallet}
          account={account}
          metamaskMessage={metamaskMessage}
        />
        {chainMessage
          ? <p className="text-center mt-16 text-3xl">{chainMessage}</p>
          : (
            <p>
              Hello
              <Loader />
            </p>
          )}
      </div>
    </>
  );
};

export default App;
