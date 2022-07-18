import "dotenv/config";
import { BigNumber, ethers } from "ethers";
// eslint-disable-next-line node/no-missing-import
import { setupScripts, deployNewContract } from "../helpers";


async function main() {
   const deployedAddress = await deployNewContract();
  const { ballotContract } = await setupScripts(deployedAddress);//got everything about the contract
  
  if (process.argv.length < 3) throw new Error("Proposal index missing");
  const proposalIndex = process.argv[2];
  const voteTransaction = await ballotContract.vote(proposalIndex);
 
  console.log("Awaiting confirmations");
  await voteTransaction.wait();
  console.log(`Transaction completed. Hash: ${voteTransaction.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
