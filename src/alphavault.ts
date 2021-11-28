import { ethers } from 'ethers';

// @ts-ignore semantic error TS6307
import abi from '../artifacts/AlphaVault.json';

import {
  DepositArgs,
  DepositResult,
  WithdrawArgs,
  WithdrawResult,
  GetTotalAmountsResult,
} from './types';

class AlphaVault {
  provider: ethers.providers.BaseProvider;

  contract: ethers.Contract;

  constructor(address: string) {
    this.provider = ethers.getDefaultProvider();
    this.contract = new ethers.Contract(address, abi, this.provider);
  }

  async deposit(depositArgs: DepositArgs): Promise<DepositResult> {
    // this returns a result rather than a transaction receipt
    const [shares, amount0, amount1] = await this.contract.functions.deposit(
      depositArgs.amount0Desired,
      depositArgs.amount1Desired,
      depositArgs.amount0Min,
      depositArgs.amount1Min,
      depositArgs.to,
    );

    return {
      shares,
      amount0,
      amount1,
    };
  }

  async withdraw(withdrawArgs: WithdrawArgs): Promise<WithdrawResult> {
    const [amount0, amount1] = await this.contract.functions.withdraw(
      withdrawArgs.amount0Min,
      withdrawArgs.amount1Min,
      withdrawArgs.shares,
      withdrawArgs.to,
    );

    return {
      amount0,
      amount1,
    };
  }

  async getTotalAmounts(): Promise<GetTotalAmountsResult> {
    const [amount0, amount1] = await this.contract.functions.getTotalAmounts();

    return {
      amount0,
      amount1,
    };
  }
}

export default AlphaVault;
