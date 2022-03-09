/**
 * This package contains deployed contract addresses, ABIs, and Typechain types
 * for the Dark Forest game.
 *
 * ## Installation
 *
 * You can install this package using [`npm`](https://www.npmjs.com) or
 * [`yarn`](https://classic.yarnpkg.com/lang/en/) by running:
 *
 * ```bash
 * npm install --save @darkforest_eth/contracts
 * ```
 * ```bash
 * yarn add @darkforest_eth/contracts
 * ```
 *
 * When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)
 *
 * ```js
 * import * as contracts from 'http://cdn.skypack.dev/@darkforest_eth/contracts'
 * ```
 *
 * ## Typechain
 *
 * The Typechain types can be found in the `typechain` directory.
 *
 * ## ABIs
 *
 * The contract ABIs can be found in the `abis` directory.
 *
 * @packageDocumentation
 */
/**
 * The name of the network where these contracts are deployed.
 */
export declare const NETWORK = 'xdai';
/**
 * The id of the network where these contracts are deployed.
 */
export declare const NETWORK_ID = 100;
/**
 * The block in which the DarkForest contract was initialized.
 */
export declare const START_BLOCK = 21013652;
/**
 * The address for the DarkForest contract.
 */
export declare const CONTRACT_ADDRESS = '0xFbD7FCDAb047d2ac7E4c586089B17A58c9ca5EA5';
/**
 * The address for the initalizer contract. Useful for lobbies.
 */
export declare const INIT_ADDRESS = '0x3c04e142a503A12B3Ab06335Eba8f30093A0e0Aa';
