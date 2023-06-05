import { useRouter } from "next/router";
import { useState } from "react";
import Button from "@mui/material/Button";

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
      <p>
        今回の人狼はプレイヤー「{wolf}」で、ワードは「{wolfWord}」です！
      </p>
      <Button variant="contained" onClick={tryAgain}>
        もう一度プレーをする
      </Button>
    </>
  );
};
export default AnnounceResult;
