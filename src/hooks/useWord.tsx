import { useEffect, useState } from "react";
import type { WordType } from "../pages/wordWolf/word";

// 【ワードの配列を返す】
export const useWord = (wordArrays: WordType[]) => {
  const [wordNumber, setWordNumber] = useState<number>(0);

  // 初回マウント時に乱数を生成
  function generateWolfNumber(wordArrays: Array<{}>) {
    return Math.floor(Math.random() * Number(wordArrays.length));
  }

  // 初回マウント時に乱数を生成
  useEffect(() => setWordNumber(generateWolfNumber(wordArrays)), []);
  const wordArray = wordArrays[wordNumber];

  return wordArray;
};
