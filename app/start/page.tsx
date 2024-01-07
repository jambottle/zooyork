'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo } from 'react';

import CoinTossButton from '@/_components/CoinTossButton';
import { EMPTY_STR } from '@/_constants/empty';
import useHexagramGenerator from '@/_hooks/useHexagramGenerator';
import useLineGenerator from '@/_hooks/useLineGenerator';
import Trigram from '@/_models/Trigram';
import useQuestionStore from '@/_stores/useQuestionStore';

export default function Start() {
  // Step 1. 질문 제출 Form을 제출하지 않은 경우, 다른 페이지로 접근 제한
  const { replace } = useRouter();
  const { question } = useQuestionStore();

  useEffect(() => {
    if (question === EMPTY_STR) {
      alert(`알고 싶은 것에 대한 질문을 적어주세요.`);
      replace(`/`);
    }
  }, [question, replace]);

  // Step 2. 동전을 3개씩 6번 던지는 과정을 useLineGenerator Hook으로 구현
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

  // Step 3. 동전을 3개씩 6번 던진 결괏값을 useHexagramGenerator Hook으로 변환
  const { hexagram, generateHexagram } = useHexagramGenerator();

  useEffect(() => {
    if (!isEveryLineGenerated) return;

    const innerTrigram = new Trigram(line1!, line2!, line3!);
    const outerTrigram = new Trigram(line4!, line5!, line6!);

    generateHexagram(innerTrigram, outerTrigram);
  }, [
    generateHexagram,
    isEveryLineGenerated,
    line1,
    line2,
    line3,
    line4,
    line5,
    line6,
  ]);

  // 3-1) 64괘 중 해당하는 괘의 번호: 두 자리 숫자 형식의 문자열 (ex. 01, 64 등)
  const formattedHexagramOrder: string | null = useMemo(() => {
    if (!hexagram) return null;
    return String(hexagram.order).padStart(2, '0');
  }, [hexagram]);

  // 3-2) 64괘 중 해당하는 괘의 이미지
  const hexagramImage: JSX.Element = useMemo(() => {
    const visibility: string = formattedHexagramOrder ? 'visible' : 'collapse';

    return (
      <figure
        className={`flex flex-col items-center justify-center gap-y-2 ${visibility}`}
      >
        <Image
          alt={`Hexagram-${formattedHexagramOrder}`}
          src={`https://www.iching-online.com/images/hexagram${formattedHexagramOrder}.png`}
          width={200}
          height={224}
          className="min-h-56"
        />
        <figcaption className="min-h-7 text-base font-semibold leading-7 text-gray-900">
          {formattedHexagramOrder ? `#${formattedHexagramOrder}` : EMPTY_STR}
        </figcaption>
      </figure>
    );
  }, [formattedHexagramOrder]);

  if (question === EMPTY_STR) return;

  return (
    <section className="space-y-12">
      <article className="pt-6">{hexagramImage}</article>

      <div className="mt-6 flex items-center justify-center">
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
