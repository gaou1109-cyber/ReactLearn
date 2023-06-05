import { wordArrays } from "./word";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// 表示する画面
const Display = () => {
  const [count, currentPlayer] = useState(1);
  const router = useRouter();
  const [playerNumber] = useState(router.query.playerNumber);
  const [wolf] = useState(Math.floor(Math.random() * Number(playerNumber)) + 1);

  //人狼のワードを決定
  const [wordNumber] = useState(
    Math.floor(Math.random() * Number(wordArrays.length))
  );
  const wordArray = wordArrays[wordNumber];

  var [checked, changeChecked] = useState(false);
  var Word: string = count == wolf ? wordArray.minor : wordArray.majar;

  // 「Yes」ならプレイヤー1にワードを見せる
  const checkWord = () => {
    changeChecked((checked = true));
  };

  //プレイヤーが違う場合
  const wrongPlayer = () => {
    alert("プレイヤーに" + count + "画面を見せてください");
  };

  // 結果発表
  function resultAnnounce() {
    {
      router.push({
        pathname: "./resultsAnnounce",
        query: { wolf: wolf, wolfWord: wordArray.minor }, // ココ
      });
    }
  }

  //ワードを確認した場合
  const confirmWord = () => {
    currentPlayer(count + 1);
    changeChecked((checked = false));
  };

  if (!checked && Number(playerNumber) >= count) {
    return (
      <DisplayConfirmPlayer
        count={count}
        checkWord={() => checkWord()}
        wrongPlayer={() => wrongPlayer()}
      />
    );
  } else if (checked && Number(playerNumber) >= count) {
    return <DisplayCheckWord Word={Word} confirmWord={() => confirmWord()} />;
  } else if (Number(playerNumber) < count) {
    return <DisplayTalk resultAnnounce={() => resultAnnounce()} />;
  }
};

type DisplayCheckWord = {
  Word: String;
  confirmWord: React.MouseEventHandler<HTMLButtonElement>;
};

// プレイヤー1にワードを見せる
const DisplayCheckWord: React.FC<DisplayCheckWord> = ({
  Word,
  confirmWord,
}) => {
  return (
    <>
      <Box>
        <p>あなたのワードは{Word}です</p>
        <Button variant="contained" onClick={confirmWord}>
          確認した
        </Button>
      </Box>
    </>
  );
};

type DisplayConfirmPlayer = {
  count: ReactNode;
  checkWord: React.MouseEventHandler<HTMLButtonElement>;
  wrongPlayer: React.MouseEventHandler<HTMLButtonElement>;
};

// プレイヤー1を確認する
const DisplayConfirmPlayer: React.FC<DisplayConfirmPlayer> = ({
  count,
  checkWord,
  wrongPlayer,
}) => {
  return (
    <>
      <p>あなたはプレイヤー{count}ですか</p>
      <Button variant="contained" onClick={checkWord}>
        はい
      </Button>
      <Button variant="contained" onClick={wrongPlayer}>
        いいえ
      </Button>
    </>
  );
};

type DisplayTalk = {
  resultAnnounce: React.MouseEventHandler<HTMLButtonElement>;
};

const DisplayTalk: React.FC<DisplayTalk> = ({ resultAnnounce }) => {
  return (
    <>
      <p>全員にワードが行きわたりました。トークを開始してください</p>
      <Button variant="contained" onClick={resultAnnounce}>
        結果発表
      </Button>
    </>
  );
};

export default Display;
