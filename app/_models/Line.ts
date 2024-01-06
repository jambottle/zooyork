/* eslint-disable no-unused-vars */

import Coin from '@/_models/Coin';

export const enum LineType {
  LargeYang = 3,
  SmallYang = 2,
  LargeYin = 1,
  SmallYin = 0,
}

class Line {
  private _type: LineType;
  private _isYang: boolean;
  private _isLarge: boolean;

  constructor(
    readonly _coin1: Coin,
    readonly _coin2: Coin,
    readonly _coin3: Coin
  ) {
    if (!_coin1 || !_coin2 || !_coin3) {
      throw new Error(`Coins cannot be null or undefined`);
    }
    this._type = Line.getLineTypeByCoins(_coin1, _coin2, _coin3);
    this._isYang =
      this._type === LineType.LargeYang || this._type === LineType.SmallYang;
    this._isLarge =
      this._type === LineType.LargeYang || this._type === LineType.LargeYin;
  }

  get type(): LineType {
    return this._type;
  }

  get isYang(): boolean {
    return this._isYang;
  }

  get isLarge(): boolean {
    return this._isLarge;
  }

  private static getLineTypeByCoins(
    _coin1: Coin,
    _coin2: Coin,
    _coin3: Coin
  ): LineType {
    const sum: number =
      Number(_coin1.side) + Number(_coin2.side) + Number(_coin3.side);

    switch (sum) {
      case 3:
        return LineType.LargeYang;
      case 2:
        return LineType.SmallYang;
      case 1:
        return LineType.LargeYin;
      case 0:
        return LineType.SmallYin;
      default:
        throw new Error(`Invalid combination of Coins`);
    }
  }
}

export default Line;
