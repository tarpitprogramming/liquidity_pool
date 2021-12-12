import { ethers } from "hardhat";
import chai from "chai";

import { Greeter } from "../typechain-types/Greeter";

const { expect } = chai;

describe("Greeter", () => {
    let greeter: Greeter;

    it("Should return the new greeting once it's changed",async () => {
        const Greeter = await ethers.getContractFactory("Greeter");
        const greeter = await Greeter.deploy("Hello, world");

        expect(await greeter.greet()).to.equal("Hello, world");

        await greeter.setGreeting("Goodbye");

        expect(await greeter.greet()).to.equal("Goodbye");
    })
});

