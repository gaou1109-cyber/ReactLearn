import { useEffect, useState } from "react";
import type { WordType } from "../pages/wordWolf/word";

// 【ワードの配列を返す】
export const useSelectWord = (wordArrays: WordType[]) => {
  const [wordNumber, setWordNumber] = useState<number>(0);

  function generateWordNumber(wordArrays: Array<{}>) {
    return Math.floor(Math.random() * wordArrays.length);
  }

  useEffect(() => setWordNumber(generateWordNumber(wordArrays)), []);
  const wordArray = wordArrays[wordNumber];

  return wordArray;
};
