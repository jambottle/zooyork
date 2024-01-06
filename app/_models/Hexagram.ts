import { HEXAGRAM_CHART } from '@/_constants/hexagram';
import Trigram from '@/_models/Trigram';

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
    return HEXAGRAM_CHART[_innerTrigram.type][_outerTrigram.type];
  }
}

export default Hexagram;
