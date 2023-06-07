import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import React from "react";

// 【プレイヤー1にワードを見せる】
type DisplayhancleCheckWordProps = {
  word: string;
  handleConfirmWord: React.MouseEventHandler<HTMLButtonElement>;
};

export const DisplayhancleCheckWord: React.FC<DisplayhancleCheckWordProps> = ({
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
