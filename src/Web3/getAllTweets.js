import { ethers } from "ethers";
import abi from "../utills/abi.json";
const TwitterContractAddress = "0x896E958ADA4596BC62CBcB0eC1D8170C17C0354F";
const ABI = abi.abi;
const getAllTweets = async () => {
    try {
        const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum, "any");
            const signer = provider.getSigner();
            const TwitterContract = new ethers.Contract(
                TwitterContractAddress,
                ABI,
                signer
            );
            const allTweets = await TwitterContract.getTweets();
            return allTweets
        }
    } catch (error) {
        console.log(error);
    }
}
export default getAllTweets;