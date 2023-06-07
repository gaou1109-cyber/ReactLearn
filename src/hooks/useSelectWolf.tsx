import { useEffect, useState } from "react";

// 【人狼のプレイヤーを返す】
export const useSelectWolf = (max: number) => {
  const [wolf, setWolf] = useState<number | null>(null);

  // 初回マウント時に乱数を生成
  function generateWolfNumber(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }

  // 初回マウント時に乱数を生成
  useEffect(() => {
    setWolf(generateWolfNumber(max));
  }, []);

  return wolf;
};
