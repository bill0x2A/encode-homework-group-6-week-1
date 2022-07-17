import { ethers } from "ethers";
import "dotenv/config";
// eslint-disable-next-line node/no-missing-import
import { checkBalance, saveDeploymentAddress, setupScripts } from "../helpers";

function convertStringArrayToBytes32(array: string[]) {
  const bytes32Array = [];
  for (let index = 0; index < array.length; index++) {
    bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
  }
  return bytes32Array;
}

async function main() {
  const { signer, ballotJson } = await setupScripts();
  await checkBalance(signer);

  console.log("Deploying Ballot contract");
  console.log("Proposals: ");

  const proposals = process.argv.slice(2);
  if (proposals.length < 2) throw new Error("Not enough proposals provided");
  proposals.forEach((element, index) => {
    console.log(`Proposal N. ${index + 1}: ${element}`);
  });

  const ballotFactory = new ethers.ContractFactory(
    ballotJson.abi,
    ballotJson.bytecode,
    signer
  );

  const ballotContract = await ballotFactory.deploy(
    convertStringArrayToBytes32(proposals)
  );
  console.log("Awaiting confirmations");

  await ballotContract.deployed();

  console.log("Completed");
  console.log(`Contract deployed at ${ballotContract.address}`);

  await saveDeploymentAddress(
    __dirname,
    "../../artifacts/contracts/Ballot.sol/Ballot.json",
    ballotContract.address
  );

  console.log("Contract deployment address succesfully saved to artifacts");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
