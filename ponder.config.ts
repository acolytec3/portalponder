import { createConfig } from "ponder";
import { http } from "viem";

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  accounts: {
    vitalikDotEth: {
      startBlock: 7616805,
      endBlock: 9616805,
      network: "mainnet",
      address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    },
  },
  blocks: {
    everyBlock: {
      network: "mainnet",
      startBlock: 7616805,
      endBlock: 9616805,
      interval: 1000,
    },
  },
});
