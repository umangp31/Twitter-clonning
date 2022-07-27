import { ethers } from "ethers";
import abi from "../utills/abi.json";
const TwitterContractAddress = "0x896E958ADA4596BC62CBcB0eC1D8170C17C0354F";
const ABI = abi.abi;
const getOwner = async () => {
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
            const owner = await TwitterContract.getOwner();
            console.log("owner ", owner);
        }
    } catch (error) {
        console.log(error);
    }
};
export default getOwner;