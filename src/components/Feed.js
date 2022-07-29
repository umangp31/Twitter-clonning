import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { MagicIcon } from "../Assests/Icons";
import { USERIMG } from '../utills/User';
import "./Feed.css";
import MobileSideBar from "./MobileSideBar";
import MobileYourTweetButton from "./MobileYourTweetButton";
import Tweets from './Tweets';
import YourTweet from './YourTweet';
const Feed = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [currentAccount, setCurrentAccount] = useState("");
    const [isMetamsk, setIsMetamsk] = useState(true);
    const [userTwitted, setUserTwitted] = useState(false);
    const [tweets, setTweets] = useState([{
        id: 0,
        displayName: "Vivek Suthar",
        userName: "@iamviveksuthar",
        tweetPostedTime: Date.now(),
        tweetContent: "Just Started Implementing Block-chain Based version of Twitter Clone,Front-end is in Progress and Centralized twitter's(back-end server) work is in hands of @somewhatsahil",
        likeCount: 2,
        replyCount: 0,
        retweetCount: 2,
        imgLink: null,
        videoLink: null
    }])
    const connectWallet = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                setIsMetamsk(false);
            }
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
            });
            const provider = new ethers.providers.Web3Provider(ethereum, "any");
            const signer = provider.getSigner();
            // console.log("Account:", await signer.getAddress());
            signer.getChainId().then(async (res) => {
                // console.log(res);
                if (res !== 5) {
                    const goerli = await ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '0x5' }]
                    })
                    const accounts = await ethereum.request({
                        method: 'eth_requestAccounts',
                    });
                    provider.getSigner()
                    setCurrentAccount(accounts[0])
                    console.log(currentAccount);
                }
            })
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        connectWallet();
    }, [])
    setTimeout(() => setIsLoading(false), 200)
    return (
        <div className='Feed_Container'>
            <div className="Yourtweet_Header">
                <div className='Tweet_UserAvatarHead Mobile' onClick={() => setIsOpen(true)}>
                    <img src={USERIMG} alt='USERIMG' />
                    <span className="HearUserNAme">Home</span>
                </div>
                <div className='Yourtweet_HomeText dn' onClick={() => setIsOpen(true)}>
                    Home
                </div>
                <div className='YourTweet_MagicIcon'>
                    <MagicIcon />
                </div>
                <MobileSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <MobileYourTweetButton userTwitted={setUserTwitted}/>
            <YourTweet tweets={tweets} userTwitted={setUserTwitted}/>
            <Tweets userTwitted={userTwitted} />
        </div >
    )
}

export default Feed