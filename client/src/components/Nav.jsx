import { FaWallet } from 'react-icons/fa';
import { shortenAddress } from '../utils';

const Nav = ({ account, metamaskMessage, connectWallet }) => {
  const { address, balance } = account;
  return (
    <nav className="flex flex-row-reverse">
      <div className="flex items-center">
        <img src="/eth-colored.png" className="h-8 mx-4" />
        <h1 className="text-xl  text-slate-100">Template</h1>
      </div>
      {address
        ? (
          <p className="text-sm mr-5 text-slate-200 border-[1px] border-slate-500 px-5 py-2 rounded-full">
            {shortenAddress(address)}
            <span className="mx-3 border" />
            <span>{balance}</span>
          </p>
        )
        : (
          <div>
            {!metamaskMessage
              ? (
                <button
                  type="button"
                  className="h-9 px-6 mr-6 text-slate-200 rounded-full border-slate-200 border-[1px] hover:text-slate-900 hover:bg-white hover:shadow-slate-500/40 duration-300 shadow-xl"
                  onClick={connectWallet}
                >
                  <span className="flex items-center"><FaWallet className="mr-3" /> Connect</span>
                </button>
              )
              : <p className="px-6 mr-6 text-slate-100 text-md">Please install <a target="_blank" className="underline text" href="https://metamask.io/" rel="noreferrer">metamask</a></p>}
          </div>
        )}
    </nav>
  );
};

export default Nav;
