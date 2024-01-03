/* eslint-disable no-unused-vars */

export const enum CoinSide {
  Heads = 1,
  Tails = 0,
}

class Coin {
  private _side: CoinSide | undefined;

  constructor() {
    this._side = undefined;
  }

  get side(): CoinSide {
    if (this._side === undefined) {
      throw new Error(`Cannot get 'side' until you toss this Coin`);
    }
    return this._side;
  }

  toss(): void {
    if (this._side !== undefined) {
      throw new Error(`Cannot toss this Coin again`);
    }
    if (Math.random() >= 0.5) {
      this._side = CoinSide.Heads;
    } else {
      this._side = CoinSide.Tails;
    }
  }
}

export default Coin;
