import { useState } from "react";

const connectWallet = async () => {
    const [isMetamsk, setIsMetamsk] = useState(false);
    try {
        const { ethereum } = window;

        if (!ethereum) {
            setIsMetamsk(false);
            // console.log("please install MetaMask");
        }

        const accounts = await ethereum.request({
            method: 'eth_requestAccounts'
        });

        setCurrentAccount(accounts[0]);
        // console.log(currentAccount);
    } catch (error) {
        console.log(error);
    }
}