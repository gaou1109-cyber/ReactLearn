import React, { useState } from "react";
import { wordArrays } from "../../word";
import { useRouter } from "next/router";
import { useSelectWolf, useSelectWord } from "../../hooks";
import { WordCheckDisplay } from "../../components/WordCheckDisplay";
import { PlayerConfirmDisplay } from "../../components/PlayerConfirmDisplay";
import { TalkDisplay } from "../../components/TalkDisplay";

// 表示する画面
const Display = () => {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [checked, setChecked] = useState(false);

  //人狼を決定
  const router = useRouter();
  const playerNumber = Number(router.query.playerNumber);
  const wolf = useSelectWolf(playerNumber);

  // ワードを決定
  const wordArray = useSelectWord(wordArrays);
  const word: string =
    currentPlayer == wolf ? wordArray.minor : wordArray.majar;

  // 「Yes」ならプレイヤーにワードを見せる
  const handleCheckWord = (): void => {
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

  if (Number(playerNumber) >= currentPlayer) {
    if (!checked) {
      return (
        <PlayerConfirmDisplay
          currentPlayer={currentPlayer}
          handleCheckWord={() => handleCheckWord()}
          handleWrongPlayer={() => handleWrongPlayer()}
        />
      );
    } else {
      return (
        <WordCheckDisplay
          word={word}
          handleConfirmWord={() => handleConfirmWord()}
        />
      );
    }
  }
  return <TalkDisplay handleAnnounceResult={() => handleAnnounceResult()} />;
};

export default Display;
