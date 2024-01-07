'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo } from 'react';

import CoinTossButton from '@/_components/CoinTossButton';
import { EMPTY_STR } from '@/_constants/empty';
import useLineGenerator from '@/_hooks/useLineGenerator';
import useQuestionStore from '@/_stores/useQuestionStore';

export default function Start() {
  const { replace } = useRouter();
  const { question } = useQuestionStore();

  useEffect(() => {
    if (question === EMPTY_STR) {
      alert(`알고 싶은 것에 대한 질문을 적어주세요.`);
      replace(`/`);
    }
  }, [question, replace]);

  const { line: line1, generateLine: genLine1 } = useLineGenerator();
  const { line: line2, generateLine: genLine2 } = useLineGenerator();
  const { line: line3, generateLine: genLine3 } = useLineGenerator();
  const { line: line4, generateLine: genLine4 } = useLineGenerator();
  const { line: line5, generateLine: genLine5 } = useLineGenerator();
  const { line: line6, generateLine: genLine6 } = useLineGenerator();

  const isEveryLineGenerated: boolean = useMemo(() => {
    return [line1, line2, line3, line4, line5, line6].every(
      line => line !== null
    );
  }, [line1, line2, line3, line4, line5, line6]);

  const generateAllLines = useCallback(() => {
    genLine1();
    genLine2();
    genLine3();
    genLine4();
    genLine5();
    genLine6();
  }, [genLine1, genLine2, genLine3, genLine4, genLine5, genLine6]);

  if (question === EMPTY_STR) return;

  return (
    <section className="space-y-12">
      <div className="flex items-center justify-center">
        <div className="space-y-4">
          <CoinTossButton label="Coin1" line={line1} generateLine={genLine1} />
          <CoinTossButton label="Coin2" line={line2} generateLine={genLine2} />
          <CoinTossButton label="Coin3" line={line3} generateLine={genLine3} />
          <CoinTossButton label="Coin4" line={line4} generateLine={genLine4} />
          <CoinTossButton label="Coin5" line={line5} generateLine={genLine5} />
          <CoinTossButton label="Coin6" line={line6} generateLine={genLine6} />

          <button
            type="button"
            disabled={isEveryLineGenerated}
            onClick={generateAllLines}
            className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Toss All
          </button>
        </div>
      </div>
    </section>
  );
}
