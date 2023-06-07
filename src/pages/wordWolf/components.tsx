import { useEffect, useState } from "react";
import type { WordType } from "./word";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

// 【人狼のプレイヤーを返す】
const useSelectWolf = (max: number) => {
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

// 【ワードの配列を返す】
const useWord = (wordArrays: WordType[]) => {
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

// 【プレイヤー1にワードを見せる】
type displayhancleCheckWordProps = {
  word: String;
  handleConfirmWord: React.MouseEventHandler<HTMLButtonElement>;
};

const DisplayhancleCheckWord: React.FC<displayhancleCheckWordProps> = ({
  word,
  handleConfirmWord,
}) => {
  return (
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
  );
};

// 【プレイヤー1を確認する】
type displayConfirmPlayerProps = {
  count: number;
  hancleCheckWord: React.MouseEventHandler<HTMLButtonElement>;
  handleWrongPlayer: React.MouseEventHandler<HTMLButtonElement>;
};

const DisplayConfirmPlayer: React.FC<displayConfirmPlayerProps> = ({
  count,
  hancleCheckWord,
  handleWrongPlayer,
}) => {
  return (
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
  );
};

// 【トークを開始させる】
type displayTalkProps = {
  handleAnnounceResult: React.MouseEventHandler<HTMLButtonElement>;
};

const DisplayTalk: React.FC<displayTalkProps> = ({ handleAnnounceResult }) => {
  return (
    <Container component="main" maxWidth="xs">
      <FormControl>
        <p>全員にワードが行きわたりました。トークを開始してください</p>
        <Button variant="contained" onClick={handleAnnounceResult}>
          結果発表
        </Button>
      </FormControl>
    </Container>
  );
};

export {
  useSelectWolf,
  useWord,
  DisplayhancleCheckWord,
  DisplayConfirmPlayer,
  DisplayTalk,
};