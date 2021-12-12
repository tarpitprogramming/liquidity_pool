import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";

module.exports = {
    solidity: "0.8.4",
};

task("accounts", "Prints the list of accounts", async (taskArgs, hardhat) => {
    const accounts = await hardhat.ethers.getSigners();
    for (const account of accounts) {
        console.log(account.address);
    }
});