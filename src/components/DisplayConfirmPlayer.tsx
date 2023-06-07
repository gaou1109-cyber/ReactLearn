import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import React from "react";

// 【プレイヤーを確認する】
type DisplayConfirmPlayerProps = {
  currentPlayer: number;
  hancleCheckWord: React.MouseEventHandler<HTMLButtonElement>;
  handleWrongPlayer: React.MouseEventHandler<HTMLButtonElement>;
};

export const DisplayConfirmPlayer: React.FC<DisplayConfirmPlayerProps> = ({
  currentPlayer,
  hancleCheckWord,
  handleWrongPlayer,
}) => {
  return (
    <Container component="main" maxWidth="xs">
      <p>あなたはプレイヤー{currentPlayer}ですか</p>
      <Button variant="contained" onClick={hancleCheckWord} sx={{ mr: 2 }}>
        はい
      </Button>
      <Button variant="contained" onClick={handleWrongPlayer}>
        いいえ
      </Button>
    </Container>
  );
};
