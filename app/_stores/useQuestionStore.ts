/* eslint-disable no-unused-vars */

import { create } from 'zustand';

export interface QuestionState {
  question: string;
  setQuestion: (value: string) => void;
}

const useQuestionStore = create<QuestionState>(set => ({
  question: '',
  setQuestion: (value: string) => set({ question: value }),
}));

export default useQuestionStore;
