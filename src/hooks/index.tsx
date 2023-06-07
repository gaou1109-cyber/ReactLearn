import { useEffect, useState } from "react";
import type { WordType } from "../pages/wordWolf/word";

// 【人狼のプレイヤーを返す】
export const useSelectWolf = (max: number) => {
  const [wolf, setWolf] = useState<number | null>(null);

  function generateWolfNumber(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }

  // 初回マウント時に乱数を生成
  useEffect(() => {
    setWolf(generateWolfNumber(max));
  }, []);

  return wolf;
};

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
