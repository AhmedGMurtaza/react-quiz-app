import { createContext, useReducer, useState, useContext } from "react";
import questions from "../data";

const initialState = {
  questions,
  currentQuestionIndex: 0,
};

export const QuizContext = createContext(initialState);

function reducer(state: any, action: any) {
  return state;
  //   throw new Error(`Unhandled action type: ${action.type}`);
}

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider value={[state, dispatch]}>
      {children}
    </QuizContext.Provider>
  );
};

// function useQuizContext() {
//   const context = useContext(QuizContext);
//   if (context === undefined) {
//     throw new Error("useQuizContext must be used within a CountProvider");
//   }
//   return context;
// }

export { QuizProvider };

// type Action = {type: 'increment'} | {type: 'decrement'}
// type Dispatch = (action: Action) => void
// type State = {count: number}
// type CountProviderProps = {children: React.ReactNode}

// const CountStateContext = React.createContext<
//   {state: State; dispatch: Dispatch} | undefined
// >(undefined)
