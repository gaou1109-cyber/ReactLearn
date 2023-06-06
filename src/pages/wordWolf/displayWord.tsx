import { wordArrays } from "./word";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";

// 表示する画面
const Display = () => {
  const [count, setCount] = useState(1);
  const router = useRouter();
  const [playerNumber] = useState(router.query.playerNumber);
  const [wolf] = useState(Math.floor(Math.random() * Number(playerNumber)) + 1);
  //人狼のワードを決定
  const [wordNumber] = useState(
    Math.floor(Math.random() * Number(wordArrays.length))
  );
  const wordArray = wordArrays[wordNumber];

  const [checked, setChecked] = useState(false);
  const word: string = count == wolf ? wordArray.minor : wordArray.majar;

  // 「Yes」ならプレイヤー1にワードを見せる
  const hancleCheckWord = (): void => {
    setChecked(true);
  };

  //プレイヤーが違う場合
  const handleWrongPlayer = (): void => {
    alert("プレイヤーに" + count + "画面を見せてください");
  };

  // 結果発表
  const handleAnnounceResult = (): void => {
    {
      router.push({
        pathname: "./resultsAnnounce",
        query: { wolf: wolf, wolfWord: wordArray.minor }, // ココ
      });
    }
  };

  //ワードを確認した場合
  const handleConfirmWord = (): void => {
    setCount(count + 1);
    setChecked(false);
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
};

type displayhancleCheckWordProps = {
  word: String;
  handleConfirmWord: React.MouseEventHandler<HTMLButtonElement>;
};

// プレイヤー1にワードを見せる
const DisplayhancleCheckWord: React.FC<displayhancleCheckWordProps> = ({
  word,
  handleConfirmWord,
}) => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <FormControl>
          <p>
            あなたのワードは<strong>{word}</strong>です
          </p>
          <Button variant="contained" onClick={handleConfirmWord}>
            確認した
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

type displayConfirmPlayerProps = {
  count: number;
  hancleCheckWord: React.MouseEventHandler<HTMLButtonElement>;
  handleWrongPlayer: React.MouseEventHandler<HTMLButtonElement>;
};

// プレイヤー1を確認する
const DisplayConfirmPlayer: React.FC<displayConfirmPlayerProps> = ({
  count,
  hancleCheckWord,
  handleWrongPlayer,
}) => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <FormControl>
          <p>あなたはプレイヤー{count}ですか</p>
          <Button variant="contained" onClick={hancleCheckWord} sx={{ mb: 2 }}>
            はい
          </Button>
          <Button variant="contained" onClick={handleWrongPlayer}>
            いいえ
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

type displayTalkProps = {
  handleAnnounceResult: React.MouseEventHandler<HTMLButtonElement>;
};

const DisplayTalk: React.FC<displayTalkProps> = ({ handleAnnounceResult }) => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <FormControl>
          <p>全員にワードが行きわたりました。トークを開始してください</p>
          <Button variant="contained" onClick={handleAnnounceResult}>
            結果発表
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default Display;
