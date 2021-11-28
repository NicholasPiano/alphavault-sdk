export type DepositArgs = {
  amount0Desired: number;
  amount1Desired: number;
  amount0Min: number;
  amount1Min: number;
  to: string;
};

export type DepositResult = {
  shares: number;
  amount0: number;
  amount1: number;
};

export type WithdrawArgs = {
  shares: number;
  amount0Min: number;
  amount1Min: number;
  to: string;
};

export type WithdrawResult = {
  amount0: number;
  amount1: number;
};

export type GetTotalAmountsResult = {
  amount0: number;
  amount1: number;
};
