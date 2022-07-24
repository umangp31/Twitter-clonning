import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { MagicIcon } from "../Assests/Icons";
import { USERIMG } from '../utills/User';
import getAllTweets from "../Web3/getAllTweets";
import "./Feed.css";
import Loader from "./Loader";
import MobileSideBar from "./MobileSideBar";
import MobileYourTweetButton from "./MobileYourTweetButton";
import Tweets from './Tweets';
import YourTweet from './YourTweet';
const Feed = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [currentAccount, setCurrentAccount] = useState("");
    const [isMetamsk, setIsMetamsk] = useState(true);
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
    },
    {
        id: 1,
        displayName: "Sahil Kakwani",
        userName: "@somewhatsahil",
        tweetPostedTime: Date.now(),
        tweetContent: "MongoDB is on Way,API Routes are Ready and Image Support Config Done,Now interagation remain",
        likeCount: 1,
        replyCount: 0,
        retweetCount: 2,
        imgLink: "https://ipfs.filebase.io/ipfs/QmUWGivcTvcBRC8gu71WZtNaNjhWvrsDK3Ru1o4zUU3MZy",
        videoLink: null

    },
    {
        id: 2,
        displayName: "Umang Patel",
        userName: "@umangp31",
        tweetPostedTime: Date.now(),
        tweetContent: "Twitter Clone Project is 🔥🔥🔥,And @iamviveksuthar and @harsh220 is Adding Block-Chain Based Twitter and @somewhatsahil is Working on Backend,as always I am only to build the Cool front-end",
        likeCount: 1,
        replyCount: 0,
        retweetCount: 2,
        imgLink: null,
        videoLink: null
    },
    {
        id: 3,
        displayName: "Bill Gates",
        userName: "@umangp31",
        tweetPostedTime: Date.now(),
        tweetContent: "NFT's are cool way to spend your money,And If you have Extra money Invest in Etherum and Still left then Invest in BTCF",
        likeCount: 1,
        replyCount: 0,
        retweetCount: 2,
        imgLink: null,
        videoLink: "https://images.mintkudos.xyz/token/1006.mp4",
    },
    {
        id: 4,
        displayName: "Elon Musk",
        userName: "@elonmusk",
        tweetPostedTime: Date.now(),
        tweetContent: "Dogecoin is hitting All Time HITS,Vro buy kar le abhi,kya matlab Elon ka Chamcha",
        likeCount: 1,
        replyCount: 0,
        retweetCount: 2,
        imgLink: "https://ipfs.io/ipfs/QmcEd1R1Qq7M6G7NnHxDXYdiYtJAn9A2FGjg94Ku75HgUD?filename=gamer_bull.png",
        videoLink: null,
    }
    ])

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
            console.log("Account:", await signer.getAddress());
            signer.getChainId().then(async (res) => {
                console.log(res);
                if (res !== 5) {
                    const goerli = await ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '0x5' }]
                    })
                    const accounts = await ethereum.request({
                        method: 'eth_requestAccounts',
                    });
                    setCurrentAccount(accounts[0])
                    console.log(currentAccount);
                }
            })
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
        }
    }
    function showTweets(res) {
        console.log(res);
    }
    async function fetchAllTweets() {
        const allTweets = await fetch("http://localhost:5000/api/tweet");
        console.log("got response now converting to JSON");
        const alltwetsInJSON = await allTweets.json();
        console.log("JSON");
        console.log(alltwetsInJSON.tweetList);

    }
    useEffect(() => {
        connectWallet();
        getAllTweets().then(res => {
            showTweets(res)
        });
        fetchAllTweets()
    }, [])

    setTimeout(() => setIsLoading(false), 200)
    return (
        <div className='Feed_Container'>
            <div className="Yourtweet_Header">
                <div className='Tweet_UserAvatar Mobile' onClick={() => setIsOpen(true)}>
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
            <MobileYourTweetButton />
            <YourTweet tweets={tweets} />
            {
                isLoading ? <Loader /> : <>
                    {
                        tweets.map((tweet) =>
                            <Tweets
                                key={tweet.id}
                                id={tweet.id}
                                displayName={tweet.displayName}
                                userName={tweet.userName}
                                tweetContent={tweet.tweetContent}
                                likeCount={tweet.likeCount}
                                replyCount={tweet.replyCount}
                                retweetCount={tweet.retweetCount}
                                tweetPostedTime={tweet.tweetPostedTime}
                                imgLink={tweet.imgLink}
                                videoLink={tweet.videoLink}
                            />
                        )
                    }
                </>
            }
        </div >
    )
}

export default Feed