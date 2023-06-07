import React from "react";
import { Button, Container } from "@mui/material";

type PlayerConfirmDisplayProps = {
  currentPlayer: number;
  handleCheckWord: React.MouseEventHandler<HTMLButtonElement>;
  handleWrongPlayer: React.MouseEventHandler<HTMLButtonElement>;
};

// プレイヤーを確認する画面
export const PlayerConfirmDisplay: React.FC<PlayerConfirmDisplayProps> = ({
  currentPlayer,
  handleCheckWord,
  handleWrongPlayer,
}) => {
  return (
    <Container component="main" maxWidth="xs">
      <p>あなたはプレイヤー{currentPlayer}ですか</p>
      <Button variant="contained" onClick={handleCheckWord} sx={{ mr: 2 }}>
        はい
      </Button>
      <Button variant="contained" onClick={handleWrongPlayer}>
        いいえ
      </Button>
    </Container>
  );
};
