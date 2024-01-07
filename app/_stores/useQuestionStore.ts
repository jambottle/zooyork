/* eslint-disable no-unused-vars */

import { create } from 'zustand';

import { EMPTY_STR } from '@/_constants/empty';

type QuestionState = {
  question: string;
  setQuestion: (value: string) => void;
  resetQuestion: () => void;
};

const useQuestionStore = create<QuestionState>(set => ({
  question: EMPTY_STR,
  setQuestion: (value: string) => set({ question: value }),
  resetQuestion: () => set({ question: EMPTY_STR }),
}));

export default useQuestionStore;
