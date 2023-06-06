import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
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
            <MenuItem value="3">3人</MenuItem>
            <MenuItem value="4">4人</MenuItem>
            <MenuItem value="5">5人</MenuItem>
            <MenuItem value="6">6人</MenuItem>
            <MenuItem value="7">7人</MenuItem>
            <MenuItem value="8">8人</MenuItem>
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
