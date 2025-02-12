# Yearn V2 Partner Tracker

Yearn V2 Partner Tracker is a non-custodial accounting smart contract made to track yearn deposits from partners. The purpose of this contract is to accurately track the amount of traffic generated by a partner, so that they can be compensated accordingly. This contract makes use of the `VaultAPI` contract to track and manage deposits.

Yearn V2 Partner Tracker is deployed at the following addresses:

Network | Address
------- | -------
Ethereum (1) | [0x8ee392a4787397126C163Cb9844d7c447da419D8](https://etherscan.io/address/0x8ee392a4787397126C163Cb9844d7c447da419D8)
Optimism (10) | [0x7E08735690028cdF3D81e7165493F1C34065AbA2](https://optimistic.etherscan.io/address/0x7E08735690028cdF3D81e7165493F1C34065AbA2)
Fantom (250) | [0x086865B2983320b36C42E48086DaDc786c9Ac73B](https://ftmscan.com/address/0x086865B2983320b36C42E48086DaDc786c9Ac73B)
Arbitrum (42161) | [0x0e5b46E4b2a05fd53F5a4cD974eb98a9a613bcb7](https://arbiscan.io/address/0x0e5b46E4b2a05fd53F5a4cD974eb98a9a613bcb7) 

- Contract Source Code: https://github.com/yearn/yearn-partner-tracker

## Functionality

The `deposit()` function is used to deposit funds into a vault. The function takes two parameters: 

- `vault` - This is the address of the vault where the funds will be deposited. 
- `partnerId` - This is the address of the partner who has referred the deposit. 

When a user deposits funds into the vault, the contract will pull the specified amount from their wallet and assign it to the partner. The contract will also record the amount of funds that were deposited, allowing the user to track how much they have deposited in total.

The `ReferredBalanceIncreased()` event will be emitted when a partner's referred balance increases. This event will contain the following data: 

- `partnerId` - The address of the partner who referred the deposit. 
- `vault` - The address of the vault where the deposit was made. 
- `depositer` - The address of the user who made the deposit. 
- `amountAdded` - The amount of funds that were deposited. 
- `totalDeposited` - The total amount of funds deposited by the user. 

## Usage

To use the Yearn V2 Partner Tracker, users must first approve the contract by setting the allowance of their wallet to the contract address. Once the allowance is set, users can then call the `deposit()` function to deposit funds into a vault. 

The amount of funds that are deposited can be specified, or the user can opt to deposit the entire balance of their wallet. In either case, the contract will record the amount of funds that were deposited and assign them to the partner who referred the deposit. 

Once the deposit is complete, the `ReferredBalanceIncreased()` event will be emitted, which will indicate the amount of funds that were deposited, as well as the total amount that has been deposited by the user. 
