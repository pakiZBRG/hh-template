import React, { useEffect } from 'react'
import { useMoralis } from 'react-moralis'

export default function Button() {
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } = useMoralis();

    useEffect(() => {
        if (window.localStorage.getItem('connected')) {
            enableWeb3();
        }
    }, [isWeb3Enabled])

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3();
            }
        })
    }, [])

    const connectToMetamask = async () => {
        await enableWeb3();
        if (window && window.ethereum) {
            window.localStorage.setItem("connected", 'true')
        }
    }

    return (
        <div>
            {account
                ? <p className='text-md'>{account.slice(0, 6)}...{account.slice(-4)}</p>
                : <button
                    className='bg-slate-400 text-slate-100 px-4 py-2 rounded hover:bg-slate-500'
                    onClick={connectToMetamask}
                    disabled={isWeb3EnableLoading}
                >
                    Connect
                </button>
            }
        </div>
    )
}
