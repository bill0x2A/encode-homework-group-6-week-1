import "dotenv/config";
import { BigNumber, ethers } from "ethers";
// eslint-disable-next-line node/no-missing-import
import { setupScripts } from "../helpers";

async function main() {
    const { ballotContract } = await setupScripts();
    const name = await ballotContract.winnerName();
    const decodedProposalName = ethers.utils.parseBytes32String(name);
    console.log(`Name: ${decodedProposalName}`);
  }
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
