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

export async function deployNewContract(
  proposals = ["Proposal 1", "Proposal 2", "Proposal 3"]
) {
  const { signer, ballotJson } = await setupScripts();
  await checkBalance(signer);

  console.log("Deploying Ballot contract");
  console.log("Proposals: ");

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

  return ballotContract.address;
}

async function main() {
  await deployNewContract();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
