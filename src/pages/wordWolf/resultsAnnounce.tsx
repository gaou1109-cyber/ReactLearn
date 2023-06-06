import { useRouter } from "next/router";
import { useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";

// 結果を発表する

const AnnounceResult = () => {
  const router = useRouter();
  const [wolf] = useState(router.query.wolf);
  const [wolfWord] = useState(router.query.wolfWord);

  const tryAgain = () => {
    router.push("./input");
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <FormControl>
          <p>
            今回の人狼はプレイヤー<strong>「{wolf}」</strong>で、ワードは
            <strong>「{wolfWord}」</strong>です！
          </p>
          <Button variant="contained" onClick={tryAgain}>
            もう一度プレーをする
          </Button>
        </FormControl>
      </Container>
    </>
  );
};
export default AnnounceResult;
