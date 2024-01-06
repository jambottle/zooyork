/* eslint-disable no-unused-vars */

import Line from '@/_models/Line';

export const enum TrigramType {
  Heaven = 0,
  Lake = 1,
  Fire = 2,
  Thunder = 3,
  Wind = 4,
  Water = 5,
  Mountain = 6,
  Earth = 7,
}

class Trigram {
  private _type: TrigramType;
  private _hasLargeLine: boolean; // Indicates whether the Trigram has at least one large Line.

  constructor(
    readonly _line1: Line,
    readonly _line2: Line,
    readonly _line3: Line
  ) {
    if (!_line1 || !_line2 || !_line3) {
      throw new Error(`Lines cannot be null or undefined`);
    }
    this._type = this._getTrigramTypeByLines(_line1, _line2, _line3);
    this._hasLargeLine = _line1.isLarge || _line2.isLarge || _line3.isLarge;
  }

  get type(): TrigramType {
    return this._type;
  }

  get hasLargeLine(): boolean {
    return this._hasLargeLine;
  }

  private _getTrigramTypeByLines(
    _line1: Line,
    _line2: Line,
    _line3: Line
  ): TrigramType {
    const isLine1Yang: boolean = _line1.isYang;
    const isLine2Yang: boolean = _line2.isYang;
    const isLine3Yang: boolean = _line3.isYang;

    if (isLine1Yang) {
      if (isLine2Yang) {
        return isLine3Yang ? TrigramType.Heaven : TrigramType.Lake;
      } else {
        return isLine3Yang ? TrigramType.Fire : TrigramType.Thunder;
      }
    } else {
      if (isLine2Yang) {
        return isLine3Yang ? TrigramType.Wind : TrigramType.Water;
      } else {
        return isLine3Yang ? TrigramType.Mountain : TrigramType.Earth;
      }
    }
  }
}

export default Trigram;
