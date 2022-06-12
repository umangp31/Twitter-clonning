//SPDX-License-Identifier: Unlicense
// contracts/TwitterContract.sol
pragma solidity ^0.8.0;

contract TwitterCloneContract {
    // Event to emit when a user tweets
    event userTwitted(
        address indexed from,
        uint256 timestamp,
        string username,
        string tweetMessage
    );

    struct Tweet {
        address from;
        uint256 timestamp;
        string username;
        string tweetMessage;
    }
    // Address of contract deployer Marked as payable so that  we can withdraw to this address later.
    address payable owner;

    // List of all tweets  stored on block-chain
    Tweet[] tweets;

    constructor() {
        // Store the address of the deployer as a payable address.
        owner = payable(msg.sender);
    }

    //fetches all stored tweets
    function getTweets() public view returns (Tweet[] memory) {
        return tweets;
    }

    function postTweet(string memory _username, string memory _tweetMessage)
        public
        payable
    {
        // Must accept more than 0 ETH for tweeting your twe
        require(msg.value > 0, "Can't tweet for free,Just pay some gas !");

        // Add the tweet to storage
        tweets.push(
            Tweet(msg.sender, block.timestamp, _username, _tweetMessage)
        );

        // Emit a userTwitted event with details about the the tweet.
        emit userTwitted(msg.sender, block.timestamp, _username, _tweetMessage);
    }

    // send the entire balance stored in this contract to the owner
    function withdrawBalance() public {
        require(owner.send(address(this).balance));
    }
}
