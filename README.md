## 1. Create .env file
- `PRIVATE_KEY` - private key of one of your Metamask accounts
- `GOERLI_RPC_URL` - Goerli RPC URL from Alchemy
- `MUMBAI_RPC_URL` - Mumbai RPC URL from Alchemy
- `ETHERSCAN_API_KEY` - API key from [Etherscan](https://etherscan.io/) for contract verification
- `POLYGONSCAN_API_KEY` - API key from [Polygonscan](https://polygonscan.com/) for contract verification

## 2. Install
When utlizing the `npm i` command, both contract and client dependecies will be installed. Also, contracts will be deployed and verified to Goerli and Mumbai testnets

## 3. Scripts
- Run client
`npm run client`
- Run blockchain
`npm run blockchain`
- Run client and blockchain
`npm run dev`

## Template for building Hardhat projects in Solidity
- Run the tests
`hh test`
- Run the scripts
`hh run scripts/main.js`
- Compile the smart contracts
`hh compile`
- Deploy contracts
`hh deploy`
- Spin up your local blockchain to test locally
`hh node`
- Deploy contract to a **Goerli** testnet
`hh deploy --network goerli`
- Deploy contract to a **Mumabi** testnet
`hh deploy --network mumbai`

##  Frontend (Vite + React + TailwindCSS)

## Eslint Config
`npx eslint --init`