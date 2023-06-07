import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import React from "react";

// 【トークを開始させる】
type DisplayTalkProps = {
  handleAnnounceResult: React.MouseEventHandler<HTMLButtonElement>;
};

export const DisplayTalk: React.FC<DisplayTalkProps> = ({
  handleAnnounceResult,
}) => {
  return (
    <Container component="main" maxWidth="xs">
      <p>全員にワードが行きわたりました。トークを開始してください</p>
      <Button variant="contained" onClick={handleAnnounceResult}>
        結果発表
      </Button>
    </Container>
  );
};
