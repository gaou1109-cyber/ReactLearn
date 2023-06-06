import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";

// プレイヤーの人数
const PlayerInput = () => {
  const [value, setValue] = useState("3");
  const router = useRouter();

  const handleDecidePlayer = () => {
    const result = window.confirm(
      "プレイヤーの人数は" + value + "人でよろしいでしょうか？"
    );
    if (result) {
      router.push({
        pathname: "./displayWord",
        query: { playerNumber: parseInt(value) },
      });
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <FormControl>
          <p>プレイヤーの人数を入力してください</p>
          <Select
            onChange={(e) => setValue(e.target.value)}
            defaultValue="3"
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              m: 2,
              minWidth: 300,
            }}
          >
            <option value="3">3人</option>
            <option value="4">4人</option>
            <option value="5">5人</option>
            <option value="6">6人</option>
            <option value="7">7人</option>
            <option value="8">8人</option>
          </Select>
          <Button variant="contained" onClick={handleDecidePlayer}>
            プレイヤーを決定する
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default PlayerInput;
