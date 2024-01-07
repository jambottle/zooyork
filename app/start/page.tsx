'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { EMPTY_STR } from '@/_constants/empty';
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

  if (question === EMPTY_STR) return;

  return <section className="space-y-12">질문: {question}</section>;
}
