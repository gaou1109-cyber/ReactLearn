import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";

// プレイヤーの人数
const PlayerInput = () => {
  const router = useRouter();
  function playerDecide() {
    const result = window.confirm(
      "プレイヤーの人数は" + value + "人でよろしいでしょうか？"
    );
    if (result) {
      router.push({
        pathname: "./displayWord",
        query: { playerNumber: value }, // ココ
      });
    }
  }

  const [value, setValue] = useState("3");

  return (
    <>
      <p>プレイヤーの人数を入力してください</p>
      <select onChange={(e) => setValue(e.target.value)} defaultValue="3">
        <option value="3">3人</option>
        <option value="4">4人</option>
        <option value="5">5人</option>
        <option value="6">6人</option>
        <option value="7">7人</option>
        <option value="8">8人</option>
      </select>
      <Button variant="contained" onClick={() => playerDecide()}>
        プレイヤーを決定する
      </Button>
    </>
  );
};

export default PlayerInput;
