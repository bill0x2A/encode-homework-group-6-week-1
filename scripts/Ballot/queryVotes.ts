import "dotenv/config";
import { BigNumber, ethers } from "ethers";
// eslint-disable-next-line node/no-missing-import
import { setupScripts } from "../helpers";

async function main() {
  const { ballotContract } = await setupScripts();//got everything about the contract

  //const winnerIndex = await ballotContract.winningProposal();
    const winnerName = await ballotContract.winnerName();
  const decodedProposalName = ethers.utils.parseBytes32String(winnerName);
 
  //console.log(`Vote index: ${winnerIndex}`);
  console.log(`Name: ${decodedProposalName}`);
 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
