'use client';

import useQuestionStore from '@/_stores/useQuestionStore';

export default function Start() {
  const { question } = useQuestionStore();

  return <section className="space-y-12">질문: {question}</section>;
}
