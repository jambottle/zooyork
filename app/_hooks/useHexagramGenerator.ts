import { useCallback, useState } from 'react';

import Hexagram from '@/_models/Hexagram';
import Trigram from '@/_models/Trigram';

export default function useHexagramGenerator() {
  const [hexagram, setHexagram] = useState<Hexagram | null>(null);

  const generateHexagram = useCallback(
    (innerTrigram: Trigram, outerTrigram: Trigram) => {
      if (hexagram !== null) return;

      const newHexagram = new Hexagram(innerTrigram, outerTrigram);
      setHexagram(newHexagram);
    },
    [hexagram]
  );

  return { hexagram, generateHexagram };
}
