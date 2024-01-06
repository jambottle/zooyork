/* eslint-disable no-unused-vars */

export const enum CoinSide {
  Heads = 1,
  Tails = 0,
}

class Coin {
  private _side: CoinSide;

  constructor() {
    this._side = this._getRandomCoinSide();
  }

  get side(): CoinSide {
    return this._side;
  }

  private _getRandomCoinSide(): CoinSide {
    return Math.random() >= 0.5 ? CoinSide.Heads : CoinSide.Tails;
  }
}

export default Coin;
