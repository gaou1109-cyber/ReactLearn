import React from "react";
import { Button, Container } from "@mui/material";

type WordCheckDisplayProps = {
  word: string;
  handleConfirmWord: React.MouseEventHandler<HTMLButtonElement>;
};

// プレイヤーワードを見せる画面
export const WordCheckDisplay: React.FC<WordCheckDisplayProps> = ({
  word,
  handleConfirmWord,
}) => {
  return (
    <Container component="main" maxWidth="xs">
      <p>
        あなたのワードは<strong>{word}</strong>です
      </p>
      <Button variant="contained" onClick={handleConfirmWord}>
        確認した
      </Button>
    </Container>
  );
};
