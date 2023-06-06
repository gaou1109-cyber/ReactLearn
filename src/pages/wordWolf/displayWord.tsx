import { wordArrays } from "./word";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";

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

  let [checked, changeChecked] = useState(false);
  let Word: string = count == wolf ? wordArray.minor : wordArray.majar;

  // 「Yes」ならプレイヤー1にワードを見せる
  const checkWord = (): void => {
    changeChecked((checked = true));
  };

  //プレイヤーが違う場合
  const wrongPlayer = (): void => {
    alert("プレイヤーに" + count + "画面を見せてください");
  };

  // 結果発表
  const resultAnnounce = (): void => {
    {
      router.push({
        pathname: "./resultsAnnounce",
        query: { wolf: wolf, wolfWord: wordArray.minor }, // ココ
      });
    }
  };

  //ワードを確認した場合
  const confirmWord = (): void => {
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
      <Container component="main" maxWidth="xs">
        <FormControl>
          <p>
            あなたのワードは<strong>{Word}</strong>です
          </p>
          <Button variant="contained" onClick={confirmWord}>
            確認した
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

type DisplayConfirmPlayer = {
  count: number;
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
      <Container component="main" maxWidth="xs">
        <FormControl>
          <p>あなたはプレイヤー{count}ですか</p>
          <Button variant="contained" onClick={checkWord} sx={{ mb: 2 }}>
            はい
          </Button>
          <Button variant="contained" onClick={wrongPlayer}>
            いいえ
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

type DisplayTalk = {
  resultAnnounce: React.MouseEventHandler<HTMLButtonElement>;
};

const DisplayTalk: React.FC<DisplayTalk> = ({ resultAnnounce }) => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <FormControl>
          <p>全員にワードが行きわたりました。トークを開始してください</p>
          <Button variant="contained" onClick={resultAnnounce}>
            結果発表
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default Display;
