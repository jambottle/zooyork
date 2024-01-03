/* eslint-disable no-unused-vars */

export const enum CoinSide {
  Heads = 1,
  Tails = 0,
}

class Coin {
  private _side: CoinSide;

  constructor() {
    this._side = Coin.getRandomCoinSide();
  }

  get side(): CoinSide {
    return this._side;
  }

  private static getRandomCoinSide(): CoinSide {
    if (Math.random() >= 0.5) {
      return CoinSide.Heads;
    } else {
      return CoinSide.Tails;
    }
  }
}

export default Coin;
