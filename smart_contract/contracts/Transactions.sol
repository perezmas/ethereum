//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// contract is like a class
contract Transactions {
    // keeps track of amount of transactions
    uint256 transactionCount;

    // function that we will call later on
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    // specify what properties and its types this object has
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword; 
    }

    // define array to store multiple transactions
    // transactions variable is an array of transfer structures
    TransferStruct[] transactions;

    // need to specify scope of specific function 
    // address payable means use built-in methods at compile time
    // string memory means data will be stored in memory of that transaction
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public{
        transactionCount += 1;
        // store all transactions that go through contract
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        // transfers the amount
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}