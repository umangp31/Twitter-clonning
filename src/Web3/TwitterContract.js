import { ethers } from "ethers";
import abi from "../utills/abi.json";

let TwitterContract;
let Signer;
const ABI = abi.abi;
const TwitterContractAddress = "0x896E958ADA4596BC62CBcB0eC1D8170C17C0354F";
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
        Signer = provider.getSigner(accounts[0]);
        console.log(Signer);
        TwitterContract = new ethers.Contract(
            TwitterContractAddress,
            ABI,
            Signer
        );
        console.log(TwitterContract);
    });
});

export default TwitterContract;