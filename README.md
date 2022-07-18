# Weekend Project
* Structure scripts to
  - [X] Deploy
  - [X] Query proposals
  - [X] Give vote right passing an address as input
  - [ ] Cast a vote to a ballot passing contract address and proposal as input and using the wallet in environment
  - [ ] Delegate my vote passing user address as input and using the wallet in environment
  - [ ] Query voting result and print to console
- [X] Publish the project in Github
- [ ] Run the scripts with a set of proposals, cast and delegate votes and inspect results
- [ ] Write a report detailing the addresses, transaction hashes, description of the operation script being executed and console output from script execution for each step (Deployment, giving voting rights, casting/delegating and querying results).
- [ ] (Extra) Use TDD methodology

# Report

## Deployment
* command
```shell 
ts-node scripts/Ballot/deployment.ts Pro2 Pro3 Pro4
```
* Output: 
Using address 0xBD720874a79628D42BcCE5FCEBBF716239b561Ea
Attached ballot contract interface to address 0xBc3239B1F5E6228D92EAaf4A4b9ce1F9aE2aB718
Wallet balance 0.9961620009809226
Deploying Ballot contract
Proposals: 
Proposal N. 1: Pro2
Proposal N. 2: Pro3
Proposal N. 3: Pro4
Awaiting confirmations
========= NOTICE =========
Request-Rate Exceeded  (this message will not be repeated)

The default API keys for each service are provided as a highly-throttled,
community resource for low-traffic projects and early prototyping.

While your application will continue to function, we highly recommended
signing up for your own API keys to improve performance, increase your
request rate/limit and enable other perks, such as metrics and advanced APIs.

For more details: https://docs.ethers.io/api-keys/
==========================
Completed
Contract deployed at 0x5Df9a6da1fdf82704bc9deb48ACa45cA19720aec
Contract deployment address succesfully saved to artifacts
* Etherscan Contract Address: 
https://ropsten.etherscan.io/address/0x5Df9a6da1fdf82704bc9deb48ACa45cA19720aec

## Give Voting Rights
* command
```shell 
ts-node scripts/Ballot/giveVotingRights.ts 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199
```
* Output: 
Using address 0xBD720874a79628D42BcCE5FCEBBF716239b561Ea
Attached ballot contract interface to address 0x5Df9a6da1fdf82704bc9deb48ACa45cA19720aec
Wallet balance 0.9944118279727551
Giving right to vote to 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199
========= NOTICE =========
Request-Rate Exceeded  (this message will not be repeated)

The default API keys for each service are provided as a highly-throttled,
community resource for low-traffic projects and early prototyping.

While your application will continue to function, we highly recommended
signing up for your own API keys to improve performance, increase your
request rate/limit and enable other perks, such as metrics and advanced APIs.

For more details: https://docs.ethers.io/api-keys/
==========================
Awaiting confirmations
Transaction completed. Hash: 0x51e863500303a1aadac290e642d000341b14bd466d526867cf3834972635c090
* Etherscan Tx
https://ropsten.etherscan.io/tx/0x51e863500303a1aadac290e642d000341b14bd466d526867cf3834972635c090

## Cast Vote
* command
```shell 
ts-node scripts/Ballot/castVote.ts Pro2
```
* Output: 
Using address 0xBD720874a79628D42BcCE5FCEBBF716239b561Ea
Attached ballot contract interface to address 0x5Df9a6da1fdf82704bc9deb48ACa45cA19720aec
========= NOTICE =========
Request-Rate Exceeded  (this message will not be repeated)

The default API keys for each service are provided as a highly-throttled,
community resource for low-traffic projects and early prototyping.

While your application will continue to function, we highly recommended
signing up for your own API keys to improve performance, increase your
request rate/limit and enable other perks, such as metrics and advanced APIs.

For more details: https://docs.ethers.io/api-keys/
==========================
{
  type: 2,
  chainId: 3,
  nonce: 8,
  maxPriorityFeePerGas: BigNumber { _hex: '0x59682f00', _isBigNumber: true },
  maxFeePerGas: BigNumber { _hex: '0x59682f0e', _isBigNumber: true },
  gasPrice: null,
  gasLimit: BigNumber { _hex: '0x016afc', _isBigNumber: true },
  to: '0x5Df9a6da1fdf82704bc9deb48ACa45cA19720aec',
  value: BigNumber { _hex: '0x00', _isBigNumber: true },
  data: '0x0121b93f0000000000000000000000000000000000000000000000000000000000000002',
  accessList: [],
  hash: '0x7412e38372e935ced8b10f9beff21c8966acea0323a2fe48f60e5a8aad940905',
  v: 0,
  r: '0x44927a661ac1bce1582a02d4beb429f2f588bcbd222ba2362fe693cef6e7a959',
  s: '0x7e8b745103583fe1b00f55d579dbc0bc881c0f46e8ddfae3aec36a1c63f06750',
  from: '0xBD720874a79628D42BcCE5FCEBBF716239b561Ea',
  confirmations: 0,
  wait: [Function (anonymous)]
}
Awaiting confirmations
Transaction completed. Hash: 0x7412e38372e935ced8b10f9beff21c8966acea0323a2fe48f60e5a8aad940905

* Etherscan Tx
https://ropsten.etherscan.io/tx/0x7412e38372e935ced8b10f9beff21c8966acea0323a2fe48f60e5a8aad940905


## Delegate Vote
(can only be called for an delegation address that previously has been granted voting rights! )
* command
```shell 
ts-node scripts/Ballot/delegateVote.ts 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
```
* Output: 
Using address 0xBD720874a79628D42BcCE5FCEBBF716239b561Ea
Attached ballot contract interface to address 0xBc3239B1F5E6228D92EAaf4A4b9ce1F9aE2aB718
Awaiting confirmations
Transaction completed. Hash: 0x3283a3488c071d6d81b30942212dc3dd01deb9df2904436635319c66036e819c

* Etherscan Tx
https://ropsten.etherscan.io/tx/0x3283a3488c071d6d81b30942212dc3dd01deb9df2904436635319c66036e819c


## Query Voting Results
* command
```shell 
ts-node scripts/Ballot/delegateVote.ts 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
```
* Output: 
Using address 0xBD720874a79628D42BcCE5FCEBBF716239b561Ea
Attached ballot contract interface to address 0xBc3239B1F5E6228D92EAaf4A4b9ce1F9aE2aB718
Name: Pro1


# Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).
