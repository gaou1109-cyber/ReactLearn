import React from "react";
import { Button, Container } from "@mui/material";

type TalkDisplayProps = {
  handleAnnounceResult: React.MouseEventHandler<HTMLButtonElement>;
};

// トークを開始させる画面
export const TalkDisplay: React.FC<TalkDisplayProps> = ({
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
