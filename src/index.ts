import { ponder } from "ponder:registry";
import schema from "ponder:schema";
import { parseAbi } from "viem";

ponder.on("web3ninja:transfer:to", async ({ event, context }) => {
  const balance = await context.client.getBalance({
    address: "0xBcAfdD642118e5536024675e776d32413728dd08",
  });

  await context.db.insert(schema.accountBalance).values({
    timestamp: event.block.timestamp,
    balance: Number(balance) / 10 ** 18,
  });
});

ponder.on("web3ninja:transfer:from", async ({ event, context }) => {
  const balance = await context.client.getBalance({
    address: "0xBcAfdD642118e5536024675e776d32413728dd08",
  });
  await context.db.insert(schema.accountBalance).values({
    timestamp: event.block.timestamp,
    balance: Number(balance) / 10 ** 18,
  });
});

ponder.on("everyBlock:block", async ({ event, context }) => {
  await context.db.insert(schema.blocks).values({
    number: event.block.number,
    timestamp: event.block.timestamp,
  });
});
