'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

export default function QuestionForm() {
  const [question, setQuestion] = useState('');

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setQuestion(e.target.value);
  }

  function handleCancel() {
    setQuestion('');
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // 페이지 리로딩 방지

    alert(`다음과 같이 질문을 적어주셨습니다.\n${question}`);
    setQuestion(''); // 상태 초기화
  }

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
