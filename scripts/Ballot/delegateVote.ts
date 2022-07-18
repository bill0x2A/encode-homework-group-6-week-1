import "dotenv/config";
import { BigNumber, ethers } from "ethers";
// eslint-disable-next-line node/no-missing-import
import { setupScripts } from "../helpers";

async function main() {
  const { ballotContract } = await setupScripts();//got everything about the contract
  
  if (process.argv.length < 3) throw new Error("Proposal index missing");
 
  const chair = await ballotContract.chairperson();
  const delegateToAddress = process.argv[2];
  const delegateResult = await ballotContract.delegate(delegateToAddress);
  
  console.log("Awaiting confirmations");
  console.log(`Transaction completed. Hash: ${delegateResult}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
