import { onchainTable } from "ponder";

export const accountBalance = onchainTable("web3ninja_balance", (t) => ({
  timestamp: t.bigint().primaryKey(),
  balance: t.doublePrecision().notNull(),
}));
export const blocks = onchainTable("blocks", (t) => ({
  number: t.bigint().primaryKey(),
  timestamp: t.bigint().notNull(),
}));
