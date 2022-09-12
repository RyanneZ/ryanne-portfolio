import React from "react";
import { Box } from "@mui/material";

function EmojiBullet(props) {
  const { emoji, text } = props;
  if (text === "ryannezhuo@gmail.com") {
    return (
      <a href="mailto:ryannezho@gmail.com">
        <Box component={"li"} fontSize={"1rem"} lineHeight={1.5}>
          <Box
            component={"span"}
            aria-label="cheese"
            role="img"
            mr={{ xs: "0.5rem", md: "1rem" }}
            fontSize={"1.5rem"}
          >
            {emoji}
          </Box>{" "}
          {text}
        </Box>
      </a>
    );
  }

  return (
    <Box
      component={"li"}
      fontSize={"1rem"}
      lineHeight={1.5}
      style={{ cursor: "default" }}
    >
      <Box
        component={"span"}
        aria-label="cheese"
        role="img"
        mr={{ xs: "0.5rem", md: "1rem" }}
        fontSize={"1.5rem"}
      >
        {emoji}
      </Box>{" "}
      {text}
    </Box>
  );
}

export default EmojiBullet;
