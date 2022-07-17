import "dotenv/config";
// eslint-disable-next-line node/no-missing-import
import { checkBalance, setupScripts } from "../helpers";
// eslint-disable-next-line node/no-missing-import

async function main() {
  const { signer, ballotContract } = await setupScripts();
  await checkBalance(signer);

  if (process.argv.length < 3) throw new Error("Voter address missing");
  const voterAddress = process.argv[2];

  const chairpersonAddress = await ballotContract.chairperson();
  if (chairpersonAddress !== signer.address)
    throw new Error("Caller is not the chairperson for this contract");
  console.log(`Giving right to vote to ${voterAddress}`);
  const tx = await ballotContract.giveRightToVote(voterAddress);
  console.log("Awaiting confirmations");
  await tx.wait();
  console.log(`Transaction completed. Hash: ${tx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
