import { wordArrays } from "./word";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  useSelectWolf,
  useWord,
  DisplayTalk,
  DisplayConfirmPlayer,
  DisplayhancleCheckWord,
} from "./components";

// 表示する画面
const Display = () => {
  const [count, setCount] = useState(1);
  const [checked, setChecked] = useState(false);

  //人狼を決定
  const router = useRouter();
  const playerNumber = Number(router.query.playerNumber);
  const wolf = useSelectWolf(playerNumber);

  // ワードを決定
  const wordArray = useWord(wordArrays);
  const word: string = count == wolf ? wordArray.minor : wordArray.majar;

  // 「Yes」ならプレイヤーにワードを見せる
  const hancleCheckWord = (): void => {
    setChecked(true);
  };

  // 「No」なら該当プレイヤーにワードを見せるように指示
  const handleWrongPlayer = (): void => {
    alert("プレイヤーに" + count + "画面を見せてください");
  };

  //ワードを確認した場合
  const handleConfirmWord = (): void => {
    setCount(count + 1);
    setChecked(false);
  };

  // 結果発表
  const handleAnnounceResult = (): void => {
    {
      router.push({
        pathname: "./resultsAnnounce",
        query: { wolf: wolf, wolfWord: wordArray.minor },
      });
    }
  };

  if (!checked && Number(playerNumber) >= count) {
    return (
      <DisplayConfirmPlayer
        count={count}
        hancleCheckWord={() => hancleCheckWord()}
        handleWrongPlayer={() => handleWrongPlayer()}
      />
    );
  } else if (checked && Number(playerNumber) >= count) {
    return (
      <DisplayhancleCheckWord
        word={word}
        handleConfirmWord={() => handleConfirmWord()}
      />
    );
  } else if (Number(playerNumber) < count) {
    return <DisplayTalk handleAnnounceResult={() => handleAnnounceResult()} />;
  }
  return null;
};

export default Display;
