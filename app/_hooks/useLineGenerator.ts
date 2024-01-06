import { useCallback, useState } from 'react';

import Coin from '@/_models/Coin';
import Line from '@/_models/Line';

export default function useLineGenerator() {
  const [line, setLine] = useState<Line | null>(null);

  const generateLine = useCallback(() => {
    if (line !== null) return;

    const coin1 = new Coin();
    const coin2 = new Coin();
    const coin3 = new Coin();

    const newLine = new Line(coin1, coin2, coin3);
    setLine(newLine);
  }, [line]);

  return { line, generateLine };
}
