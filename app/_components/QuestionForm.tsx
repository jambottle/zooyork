'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useCallback } from 'react';

import { EMPTY_STR } from '@/_constants/empty';
import useQuestionStore from '@/_stores/useQuestionStore';

export default function QuestionForm() {
  const { push } = useRouter();
  const { question, setQuestion, resetQuestion } = useQuestionStore();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setQuestion(e.target.value);
    },
    [setQuestion]
  );

  const handleCancel = useCallback(() => {
    if (question === EMPTY_STR) return;
    resetQuestion();
  }, [question, resetQuestion]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // 페이지 리로딩 방지

      if (question === EMPTY_STR) {
        alert(`알고 싶은 것에 대한 질문을 적어주세요.`);
        return;
      }

      push(`/start`);
    },
    [push, question]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="question"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        알고 싶은 것에 대한 질문을 적어주세요.
      </label>
      <textarea
        id="question"
        name="question"
        value={question}
        onChange={handleChange}
        rows={3}
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <p className="mt-3 text-sm leading-6 text-gray-600">
        작은 고민거리여도 좋습니다. 고민은 변화의 시작입니다.
      </p>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={handleCancel}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
