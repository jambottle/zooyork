import Trigram from '@/_models/Trigram';

const HEXAGRAM_CHART: number[][] = [
  [1, 43, 14, 34, 9, 5, 26, 11],
  [10, 58, 38, 54, 61, 60, 41, 19],
  [13, 49, 30, 55, 37, 63, 22, 36],
  [25, 17, 21, 51, 42, 3, 27, 24],
  [44, 28, 50, 32, 57, 48, 18, 46],
  [6, 47, 64, 40, 59, 29, 4, 7],
  [33, 31, 56, 62, 53, 39, 52, 15],
  [12, 45, 35, 16, 20, 8, 23, 2],
];

class Hexagram {
  private _order: number;
  private _hasLargeLine: boolean; // Indicates whether the Hexagram has at least one large Line.

  constructor(
    readonly _innerTrigram: Trigram,
    readonly _outerTrigram: Trigram
  ) {
    if (!_innerTrigram || !_outerTrigram) {
      throw new Error(`Trigrams cannot be null or undefined`);
    }
    this._order = this._getHexagramOrderByTrigrams(
      _innerTrigram,
      _outerTrigram
    );
    this._hasLargeLine =
      _innerTrigram.hasLargeLine || _outerTrigram.hasLargeLine;
  }

  get order(): number {
    return this._order;
  }

  get hasLargeLine(): boolean {
    return this._hasLargeLine;
  }

  private _getHexagramOrderByTrigrams(
    _innerTrigram: Trigram,
    _outerTrigram: Trigram
  ): number {
    const innerTrigramTypeValue: number = Number(_innerTrigram.type);
    const outerTrigramTypeValue: number = Number(_outerTrigram.type);

    return HEXAGRAM_CHART[innerTrigramTypeValue][outerTrigramTypeValue];
  }
}

export default Hexagram;
