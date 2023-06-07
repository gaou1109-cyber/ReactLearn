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
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [checked, setChecked] = useState(false);

  //人狼を決定
  const router = useRouter();
  const playerNumber = Number(router.query.playerNumber);
  const wolf = useSelectWolf(playerNumber);

  // ワードを決定
  const wordArray = useWord(wordArrays);
  const word: string =
    currentPlayer == wolf ? wordArray.minor : wordArray.majar;

  // 「Yes」ならプレイヤーにワードを見せる
  const hancleCheckWord = (): void => {
    setChecked(true);
  };

  // 「No」なら該当プレイヤーにワードを見せるように指示
  const handleWrongPlayer = (): void => {
    alert("プレイヤーに" + currentPlayer + "画面を見せてください");
  };

  //ワードを確認した場合
  const handleConfirmWord = (): void => {
    setCurrentPlayer(currentPlayer + 1);
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

  if (!checked && Number(playerNumber) >= currentPlayer) {
    return (
      <DisplayConfirmPlayer
        currentPlayer={currentPlayer}
        hancleCheckWord={() => hancleCheckWord()}
        handleWrongPlayer={() => handleWrongPlayer()}
      />
    );
  } else if (checked && Number(playerNumber) >= currentPlayer) {
    return (
      <DisplayhancleCheckWord
        word={word}
        handleConfirmWord={() => handleConfirmWord()}
      />
    );
  } else if (Number(playerNumber) < currentPlayer) {
    return <DisplayTalk handleAnnounceResult={() => handleAnnounceResult()} />;
  }
  return null;
};

export default Display;
