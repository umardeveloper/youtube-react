import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        className="bg-danger 

rounded-pill"
      >
        Subscribe 2.3m
      </Button>
    </Stack>
  );
}
