import "dotenv/config";
import { BigNumber, ethers } from "ethers";
// eslint-disable-next-line node/no-missing-import
import { setupScripts } from "../helpers";

async function main() {
  const { ballotContract } = await setupScripts();

  if (process.argv.length < 3) throw new Error("Proposal index missing");
  const proposalIndex = process.argv[2];
  const [name, voteCount] = await ballotContract.proposals(proposalIndex);

  const decodedProposalName = ethers.utils.parseBytes32String(name);
  const decodedVoteCount = (voteCount as BigNumber).toString();

  console.log(`Vote index: ${proposalIndex}`);
  console.log(`Name: ${decodedProposalName}`);
  console.log(`Vote count: ${decodedVoteCount}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
