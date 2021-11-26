import React from "react";

import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function ColorSwitches() {
  return (
    <div>
      <Switch {...label} defaultChecked color="error" />
    </div>
  );
}
